import { DefaultFontStyles } from './DefaultFontStyles';
import { FontSizes, FontWeights, createFonts } from './fonts';
import { IFontFamilies, IFontSizes, IFontWeights, IFontVariants, IFont } from '../interfaces/IFont';
import { getLanguage } from '@uifabric/utilities';

export const DefaultFontSizes: IFontSizes = {
  // 70: '',
  80: FontSizes.mini,
  90: FontSizes.small,
  100: FontSizes.medium,
  110: FontSizes.mediumPlus,
  120: FontSizes.large,
  130: FontSizes.xLarge,
  // 140: '',
  150: FontSizes.xxLarge,
  // 160: '',
  // 170: '',
  180: FontSizes.superLarge,
  // 190: '',
  // 200: '',
  210: FontSizes.mega
  // 220: ''
};

export const DefaultFontFamilies: IFontFamilies = {
  default: DefaultFontStyles.medium.fontFamily!,
  header: 'Segoe UI',
  monospace: 'Menlo, Monaco, "Courier New", monospace'
};

export const DefaultFontWeights: IFontWeights = {
  regular: FontWeights.regular,
  light: FontWeights.light,
  semibold: FontWeights.semibold,
  bold: FontWeights.bold
};

export const DefaultFontVariants: IFontVariants = createFonts(getLanguage());

export const DefaultFont: IFont = {
  families: DefaultFontFamilies,
  sizes: DefaultFontSizes,
  weights: DefaultFontWeights,
  variants: DefaultFontVariants
};
