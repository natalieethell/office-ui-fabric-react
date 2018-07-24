import { styled } from '../../Utilities';
import { IAnnouncedProps, IAnnouncedStyleProps, IAnnouncedStyles } from './Announced.types';
import { getStyles } from './Announced.styles';
import { AnnouncedBase } from './Announced.base';

export const Announced = styled<IAnnouncedProps, IAnnouncedStyleProps, IAnnouncedStyles>(
  AnnouncedBase,
  getStyles,
  undefined,
  {
    scope: 'Announced'
  }
);
