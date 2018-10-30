import * as React from 'react';
import { BaseComponent, KeyCodes, css, getId, getRTL, getRTLSafeKeyCode, createRef } from '../../Utilities';
import { ISliderProps, ISlider, ISliderStyleProps, ISliderStyles } from './Slider.types';
import { classNamesFunction } from '../../Utilities';
import { Label } from '../../Label';

export interface ISliderState {
  value?: number;
  renderedValue?: number;
}

/**
 * @deprecated Unused.
 */
export enum ValuePosition {
  Previous = 0,
  Next = 1
}

const getClassNames = classNamesFunction<ISliderStyleProps, ISliderStyles>();
export class SliderBase extends BaseComponent<ISliderProps, ISliderState> implements ISlider {
  public static defaultProps: ISliderProps = {
    step: 1,
    min: 0,
    max: 10,
    showValue: true,
    disabled: false,
    vertical: false,
    buttonProps: {}
  };

  private _sliderLine = createRef<HTMLDivElement>();
  private _thumb = createRef<HTMLSpanElement>();
  private _id: string;

  constructor(props: ISliderProps) {
    super(props);

    this._warnMutuallyExclusive({
      value: 'defaultValue'
    });

    this._id = getId('Slider');

    const value = props.value !== undefined ? props.value : props.defaultValue !== undefined ? props.defaultValue : props.min;

    this.state = {
      value: value,
      renderedValue: value
    };
  }

  /**
   * Invoked when a component is receiving new props. This method is not called for the initial render.
   */
  public componentWillReceiveProps(newProps: ISliderProps): void {
    if (newProps.value !== undefined) {
      const value = Math.max(newProps.min as number, Math.min(newProps.max as number, newProps.value));

      this.setState({
        value: value,
        renderedValue: value
      });
    }
  }

  public render(): React.ReactElement<{}> {
    const { ariaLabel, className, disabled, label, max, min, showValue, buttonProps, vertical, styles, theme } = this.props;
    const { value, renderedValue } = this.state;
    const thumbOffsetPercent: number = min === max ? 0 : ((renderedValue! - min!) / (max! - min!)) * 100;
    const lengthString = vertical ? 'height' : 'width';
    const onMouseDownProp: {} = disabled ? {} : { onMouseDown: this._onMouseDownOrTouchStart };
    const onTouchStartProp: {} = disabled ? {} : { onTouchStart: this._onMouseDownOrTouchStart };
    const onKeyDownProp: {} = disabled ? {} : { onKeyDown: this._onKeyDown };
    const classNames = getClassNames(styles, {
      className,
      disabled,
      vertical,
      showTransitions: renderedValue === value,
      showValue,
      theme: theme!
    });

    return (
      <div className={classNames.root}>
        {label && (
          <Label className={classNames.titleLabel} {...(ariaLabel ? {} : { htmlFor: this._id })}>
            {label}
          </Label>
        )}
        <div className={classNames.container}>
          <button
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuetext={this._getAriaValueText(value)}
            aria-label={ariaLabel || label}
            {...onMouseDownProp}
            {...onTouchStartProp}
            {...onKeyDownProp}
            {...buttonProps}
            className={css(classNames.slideBox, buttonProps!.className)}
            id={this._id}
            disabled={disabled}
            type="button"
            role="slider"
          >
            <div ref={this._sliderLine} className={classNames.line}>
              <span ref={this._thumb} className={classNames.thumb} style={this._getThumbStyle(vertical, thumbOffsetPercent)} />
              <span
                className={css(classNames.lineContainer, classNames.activeSection)}
                style={{ [lengthString]: thumbOffsetPercent + '%' }}
              />
              <span
                className={css(classNames.lineContainer, classNames.inactiveSection)}
                style={{ [lengthString]: 100 - thumbOffsetPercent + '%' }}
              />
            </div>
          </button>
          {showValue && <Label className={classNames.valueLabel}>{value}</Label>}
        </div>
      </div>
    ) as React.ReactElement<{}>;
  }
  public focus(): void {
    if (this._thumb.current) {
      this._thumb.current.focus();
    }
  }

  public get value(): number | undefined {
    return this.state.value;
  }

  private _getAriaValueText = (value: number | undefined): string | undefined => {
    if (this.props.ariaValueText && value !== undefined) {
      return this.props.ariaValueText(value);
    }
  };

  private _getThumbStyle(vertical: boolean | undefined, thumbOffsetPercent: number): any {
    const direction: string = vertical ? 'bottom' : getRTL() ? 'right' : 'left';
    return {
      [direction]: thumbOffsetPercent + '%'
    };
  }

  private _onMouseDownOrTouchStart = (event: MouseEvent | TouchEvent): void => {
    if (event.type === 'mousedown') {
      this._events.on(window, 'mousemove', this._onMouseMoveOrTouchMove, true);
      this._events.on(window, 'mouseup', this._onMouseUpOrTouchEnd, true);
    } else if (event.type === 'touchstart') {
      this._events.on(window, 'touchmove', this._onMouseMoveOrTouchMove, true);
      this._events.on(window, 'touchend', this._onMouseUpOrTouchEnd, true);
    }
    this._onMouseMoveOrTouchMove(event, true);
  };

  private _onMouseMoveOrTouchMove = (event: MouseEvent | TouchEvent, suppressEventCancelation?: boolean): void => {
    if (!this._sliderLine.current) {
      return;
    }

    const { max, min, step } = this.props;
    const steps: number = (max! - min!) / step!;
    const sliderPositionRect: ClientRect = this._sliderLine.current.getBoundingClientRect();
    const sliderLength: number = !this.props.vertical ? sliderPositionRect.width : sliderPositionRect.height;
    const stepLength: number = sliderLength / steps;
    let currentSteps: number | undefined;
    let distance: number | undefined;

    if (!this.props.vertical) {
      const left: number | undefined = this._getPosition(event, this.props.vertical);
      distance = getRTL() ? sliderPositionRect.right - left! : left! - sliderPositionRect.left;
      currentSteps = distance / stepLength;
    } else {
      const bottom: number | undefined = this._getPosition(event, this.props.vertical);
      distance = sliderPositionRect.bottom - bottom!;
      currentSteps = distance / stepLength;
    }

    let currentValue: number | undefined;
    let renderedValue: number | undefined;

    // The value shouldn't be bigger than max or be smaller than min.
    if (currentSteps! > Math.floor(steps)) {
      renderedValue = currentValue = max as number;
    } else if (currentSteps! < 0) {
      renderedValue = currentValue = min as number;
    } else {
      renderedValue = min! + step! * currentSteps!;
      currentValue = min! + step! * Math.round(currentSteps!);
    }

    this._updateValue(currentValue, renderedValue);

    if (!suppressEventCancelation) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  private _getPosition(event: MouseEvent | TouchEvent, vertical: boolean | undefined): number | undefined {
    let currentPosition: number | undefined;
    switch (event.type) {
      case 'mousedown':
      case 'mousemove':
        currentPosition = !vertical ? (event as MouseEvent).clientX : (event as MouseEvent).clientY;
        break;
      case 'touchstart':
      case 'touchmove':
        currentPosition = !vertical ? (event as TouchEvent).touches[0].clientX : (event as TouchEvent).touches[0].clientY;
        break;
    }
    return currentPosition;
  }
  private _updateValue(value: number, renderedValue: number): void {
    const { step } = this.props;

    let numDec = 0;
    if (Math.floor(step!) !== step!) {
      numDec = step!.toString().split('.')[1].length;
    }

    // Make sure value has correct number of decimal places based on steps without JS's floating point issues
    const roundedValue = Math.round(value * Math.pow(10, numDec)) / Math.pow(10, numDec);
    const valueChanged = roundedValue !== this.state.value;

    this.setState(
      {
        value: roundedValue,
        renderedValue
      },
      () => {
        if (valueChanged && this.props.onChange) {
          this.props.onChange(this.state.value as number);
        }
      }
    );
  }

  private _onMouseUpOrTouchEnd = (event: MouseEvent | TouchEvent): void => {
    // Synchronize the renderedValue to the actual value.
    this.setState({
      renderedValue: this.state.value
    });

    if (this.props.onChanged) {
      this.props.onChanged(event, this.state.value as number);
    }

    this._events.off();
  };

  private _onKeyDown = (event: KeyboardEvent): void => {
    let value: number | undefined = this.state.value;
    const { max, min, step } = this.props;

    let diff: number | undefined = 0;

    switch (event.which) {
      case getRTLSafeKeyCode(KeyCodes.left):
      case KeyCodes.down:
        diff = -(step as number);
        break;
      case getRTLSafeKeyCode(KeyCodes.right):
      case KeyCodes.up:
        diff = step;
        break;

      case KeyCodes.home:
        value = min;
        break;

      case KeyCodes.end:
        value = max;
        break;

      default:
        return;
    }

    const newValue: number = Math.min(max as number, Math.max(min as number, value! + diff!));

    this._updateValue(newValue, newValue);

    event.preventDefault();
    event.stopPropagation();
  };
}
