import * as React from 'react';
import { AnnouncedBase } from './Announced.base';
import { IStyle } from '../../Styling';
import { IStyleFunctionOrObject, IRefObject } from '../../Utilities';

export interface IAnnounced {}

export interface IAnnouncedProps extends React.Props<AnnouncedBase> {
  /**
   * Optional callback to access the IAnnounced interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<IAnnounced>;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IAnnouncedStyleProps, IAnnouncedStyles>;

  /**
   * Role of the progress component.
   */
  role?: string;

  /**
   * The status message for the screen reader.
   */
  statusMessage?: string;

  /**
   * Politeness setting for progress update announcement.
   * @default polite
   */
  ariaLive?: 'assertive' | 'polite' | 'off';
}

export interface IAnnouncedStyles {
  root?: IStyle;
  screenReaderText?: IStyle;
}

export interface IAnnouncedStyleProps {}
