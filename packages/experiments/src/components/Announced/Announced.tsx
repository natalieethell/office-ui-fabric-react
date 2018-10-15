import * as React from 'react';
import { BaseComponent, DelayedRender, classNamesFunction } from '../../Utilities';
import { IProcessedStyleSet } from '../../Styling';
import { IAnnouncedProps, IAnnouncedStyles, IAnnouncedStyleProps } from './Announced.types';

const getClassNames = classNamesFunction<IAnnouncedStyleProps, IAnnouncedStyles>();

export class Announced extends BaseComponent<IAnnouncedProps, {}> {
  private _classNames: IProcessedStyleSet<IAnnouncedStyles>;
  public render(): JSX.Element {
    const { message, styles, theme, key } = this.props;

    this._classNames = getClassNames(styles, {
      theme: theme!
    });

    return (
      <div role="status" aria-live="assertive" key={key}>
        <DelayedRender>
          <div className={this._classNames.screenReaderText}>{message}</div>
        </DelayedRender>
      </div>
    );
  }
}
