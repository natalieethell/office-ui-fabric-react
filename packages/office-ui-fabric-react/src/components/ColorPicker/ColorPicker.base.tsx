import * as React from 'react';
import { classNamesFunction, initializeComponentRef } from '../../Utilities';
import { IColorPickerProps, IColorPickerStyleProps, IColorPickerStyles, IColorPicker } from './ColorPicker.types';
import { TextField } from '../../TextField';
import { ColorRectangle } from './ColorRectangle/ColorRectangle';
import { ColorSlider } from './ColorSlider/ColorSlider';
// These imports are separated to help with bundling
import {
  MAX_COLOR_ALPHA,
  MAX_COLOR_HUE,
  MAX_COLOR_RGB,
  MAX_HEX_LENGTH,
  MAX_RGBA_LENGTH,
  MIN_HEX_LENGTH,
  MIN_RGBA_LENGTH,
  HEX_REGEX,
  RGBA_REGEX
} from '../../utilities/color/consts';
import { IColor, IRGB } from '../../utilities/color/interfaces';
import { getColorFromString } from '../../utilities/color/getColorFromString';
import { getColorFromRGBA } from '../../utilities/color/getColorFromRGBA';
import { updateA } from '../../utilities/color/updateA';
import { updateH } from '../../utilities/color/updateH';
import { correctRGB } from '../../utilities/color/correctRGB';
import { correctHex } from '../../utilities/color/correctHex';

type IRGBHex = Pick<IColor, 'r' | 'g' | 'b' | 'a' | 'hex'>;

export interface IColorPickerState {
  color: IColor;
  editingColor?: {
    component: keyof IRGBHex;
    value: string;
  };
}

const getClassNames = classNamesFunction<IColorPickerStyleProps, IColorPickerStyles>();

const colorComponents: Array<keyof IRGBHex> = ['hex', 'r', 'g', 'b', 'a'];

/**
 * {@docCategory ColorPicker}
 */
export class ColorPickerBase extends React.Component<IColorPickerProps, IColorPickerState> implements IColorPicker {
  public static defaultProps = {
    hexLabel: 'Hex',
    redLabel: 'Red',
    greenLabel: 'Green',
    blueLabel: 'Blue',
    alphaLabel: 'Alpha'
  };

  private _textChangeHandlers: {
    [K in keyof IRGBHex]: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => void
  };
  private _textLabels: { [K in keyof IRGBHex]?: string };

  constructor(props: IColorPickerProps) {
    super(props);

    initializeComponentRef(this);

    this.state = {
      color: _getColorFromProps(props) || getColorFromString('#ffffff')!
    };

    this._textChangeHandlers = {} as any;
    for (const component of colorComponents) {
      this._textChangeHandlers[component] = this._onTextChange.bind(this, component);
    }
    this._textLabels = {
      r: props.redLabel,
      g: props.greenLabel,
      b: props.blueLabel,
      a: props.alphaLabel,
      hex: props.hexLabel
    };
  }

  public get color(): IColor {
    return this.state.color;
  }

  // tslint:disable-next-line function-name
  public UNSAFE_componentWillReceiveProps(newProps: IColorPickerProps): void {
    const color = _getColorFromProps(newProps);
    if (color) {
      this._updateColor(undefined, color);
    }
  }

  public render(): JSX.Element {
    const props = this.props;
    const { theme, className, styles } = props;
    const { color } = this.state;

    const classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    return (
      <div className={classNames.root}>
        <div className={classNames.panel}>
          <ColorRectangle color={color} onChange={this._onSVChanged} className={classNames.colorRectangle} />
          <div className={classNames.flexContainer}>
            <div className={classNames.flexSlider}>
              <ColorSlider className="is-hue" minValue={0} maxValue={MAX_COLOR_HUE} value={color.h} onChange={this._onHChanged} />
              {!props.alphaSliderHidden && (
                <ColorSlider
                  className="is-alpha"
                  isAlpha
                  overlayStyle={{ background: `linear-gradient(to right, transparent 0, #${color.hex} 100%)` }}
                  minValue={0}
                  maxValue={MAX_COLOR_ALPHA}
                  value={color.a}
                  onChange={this._onAChanged}
                />
              )}
            </div>
            {props.showPreview && (
              <div className={classNames.flexPreviewBox}>
                <div
                  className={classNames.colorSquare + ' is-preview'}
                  style={{
                    backgroundColor: color.str
                  }}
                />
              </div>
            )}
          </div>

          <table className={classNames.table} cellPadding="0" cellSpacing="0">
            <thead>
              <tr className={classNames.tableHeader}>
                <td className={classNames.tableHexCell}>{props.hexLabel}</td>
                <td>{props.redLabel}</td>
                <td>{props.greenLabel}</td>
                <td>{props.blueLabel}</td>
                {!props.alphaSliderHidden && <td>{props.alphaLabel}</td>}
              </tr>
            </thead>
            <tbody>
              <tr>
                {...colorComponents.map((comp: keyof IRGBHex) => {
                  if (comp === 'a' && props.alphaSliderHidden) {
                    return null;
                  }
                  return (
                    <td key={comp} style={comp === 'hex' ? undefined : { width: '18%' }}>
                      <TextField
                        className={classNames.input}
                        onChange={this._textChangeHandlers[comp]}
                        onBlur={this._onBlur}
                        value={this._getDisplayValue(comp)}
                        spellCheck={false}
                        ariaLabel={this._textLabels[comp]}
                      />
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  private _getDisplayValue(component: keyof IColor): string {
    const { color, editingColor } = this.state;
    if (editingColor && editingColor.component === component) {
      return editingColor.value;
    }
    if (component === 'hex') {
      return color[component] || '';
    } else if (typeof color[component] === 'number' && !isNaN(color[component] as number)) {
      return String(color[component]);
    }
    return '';
  }

  private _onSVChanged = (ev: React.MouseEvent<HTMLElement>, color: IColor): void => {
    this._updateColor(ev, color);
  };

  private _onHChanged = (ev: React.MouseEvent<HTMLElement>, h: number): void => {
    this._updateColor(ev, updateH(this.state.color, h));
  };

  private _onAChanged = (ev: React.MouseEvent<HTMLElement>, a: number): void => {
    this._updateColor(ev, updateA(this.state.color, Math.round(a)));
  };

  private _onTextChange(component: keyof IRGBHex, event: React.FormEvent<HTMLInputElement>, newValue?: string): void {
    const color = this.state.color;
    const isHex = component === 'hex';
    const isAlpha = component === 'a';
    newValue = (newValue || '').substr(0, isHex ? MAX_HEX_LENGTH : MAX_RGBA_LENGTH);

    // Ignore what the user typed if it contains invalid characters
    const validCharsRegex = isHex ? HEX_REGEX : RGBA_REGEX;
    if (!validCharsRegex.test(newValue)) {
      return;
    }

    // Determine if the entry is valid (different methods for hex, alpha, and RGB)
    let isValid: boolean;
    if (newValue === '') {
      // Empty string is obviously not valid
      isValid = false;
    } else if (isHex) {
      // Technically hex values of length 3 are also valid, but committing the value here would
      // cause it to be automatically converted to a value of length 6, which may not be what the
      // user wanted if they're not finished typing. (Values of length 3 will be committed on blur.)
      isValid = newValue.length === MAX_HEX_LENGTH;
    } else if (isAlpha) {
      isValid = Number(newValue) <= MAX_COLOR_ALPHA;
    } else {
      isValid = Number(newValue) <= MAX_COLOR_RGB;
    }

    if (!isValid) {
      // If the new value is an empty string or other invalid value, save that to display.
      // (if the user still hasn't entered anything on blur, the last value is restored)
      this.setState({ editingColor: { component, value: newValue } });
    } else if (String(color[component]) === newValue) {
      // If the new value is the same as the current value, mostly ignore it.
      // Exception is that if the user was previously editing the value (but hadn't yet entered
      // a new valid value), we should clear the intermediate value.
      if (this.state.editingColor) {
        this.setState({ editingColor: undefined });
      }
    } else {
      // Should be a valid color. Update the value.
      const newColor = isHex
        ? getColorFromString('#' + newValue)
        : getColorFromRGBA({
            ...color,
            // Overwrite whichever key is being updated with the new value
            [component]: Number(newValue)
          });
      this._updateColor(event, newColor);
    }
  }

  private _onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { color, editingColor } = this.state;
    if (!editingColor) {
      return;
    }

    // If there was an intermediate incorrect value (such as too large or empty), correct it.
    const { value, component } = editingColor;
    const isHex = component === 'hex';
    const minLength = isHex ? MIN_HEX_LENGTH : MIN_RGBA_LENGTH;
    if (value.length >= minLength && (isHex || !isNaN(Number(value)))) {
      // Real value. Clamp to appropriate length (hex) or range (rgba).
      let newColor: IColor | undefined;
      if (isHex) {
        newColor = getColorFromString('#' + correctHex(value));
      } else {
        newColor = getColorFromRGBA(
          correctRGB({
            ...color,
            [component]: Number(value)
          } as IRGB)
        );
      }

      // Update state and call onChange
      this._updateColor(event, newColor);
    } else {
      // Intermediate value was an empty string, too short (hex only), or just . (alpha only).
      // Just clear the intermediate state and revert to the previous value.
      this.setState({ editingColor: undefined });
    }
  };

  /**
   * Update the displayed color and call change handlers if appropriate.
   * @param ev - Event if call was triggered by an event (undefined if triggered by props change)
   * @param newColor - Updated color
   */
  private _updateColor(ev: React.SyntheticEvent<HTMLElement> | undefined, newColor: IColor | undefined): void {
    if (!newColor) {
      return;
    }

    const { color, editingColor } = this.state;
    const isDifferentColor = newColor.h !== color.h || newColor.str !== color.str;

    if (isDifferentColor || editingColor) {
      this.setState({ color: newColor, editingColor: undefined }, () => {
        if (ev && this.props.onChange) {
          this.props.onChange(ev, newColor);
        }
      });
    }
  }
}

function _getColorFromProps(props: IColorPickerProps): IColor | undefined {
  const { color } = props;
  return typeof color === 'string' ? getColorFromString(color) : color;
}
