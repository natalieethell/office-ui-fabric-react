import { IAnnouncedStyleProps, IAnnouncedStyles } from './Announced.types';
import { hiddenContentStyle } from 'office-ui-fabric-react/lib/Styling';

export const getStyles = (props: IAnnouncedStyleProps): IAnnouncedStyles => {
  return {
    root: {},
    screenReaderText: hiddenContentStyle
  };
};
