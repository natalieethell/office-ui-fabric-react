import * as React from 'react';
import { BaseComponent, DelayedRender } from '../../Utilities';
import { IAnnouncedProps, IAnnouncedStyles, IAnnouncedStyleProps } from './Announced.types';
import { classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';

const getClassNames = classNamesFunction<IAnnouncedStyleProps, IAnnouncedStyles>();

export interface IAnnouncedState {}

export class AnnouncedBase extends BaseComponent<IAnnouncedProps, IAnnouncedState> {
  public static defaultProps: IAnnouncedProps = {
    ariaLive: 'polite'
  };

  constructor(props: IAnnouncedProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { statusMessage, styles, ariaLive } = this.props;

    const classNames = getClassNames(styles, {});

    return (
      <div role="status" aria-live={ariaLive}>
        <DelayedRender>
          <div className={classNames.screenReaderText}>{statusMessage}</div>
        </DelayedRender>
      </div>
    );
  }
}
