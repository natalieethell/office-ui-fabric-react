import * as React from 'react';
import { IProcessedStyleSet } from '../../Styling';
import { BaseComponent, classNamesFunction } from '../../Utilities';
import { ISeparatorProps, ISeparatorStyles, ISeparatorStyleProps } from './Separator.types';

const getClassNames = classNamesFunction<ISeparatorStyleProps, ISeparatorStyles>();

export class SeparatorBase extends BaseComponent<ISeparatorProps, {}> {
  private _classNames: IProcessedStyleSet<ISeparatorStyles>;

  constructor(props: ISeparatorProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { message, styles, theme, className } = this.props;

    this._classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    return (
      <div className={this._classNames.root}>
        <div className={this._classNames.text} role="heading">
          {message}
        </div>
      </div>
    );
  }
}
