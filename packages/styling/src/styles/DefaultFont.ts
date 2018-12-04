import { DefaultFontStyles } from './DefaultFontStyles';
import { FontSizes, FontWeights } from './fonts';
import { IFontFamilies, IFontSizes, IFontWeights, IFontVariants, IFont } from '../interfaces/IFont';

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

// TODO: use the original DefaultFontStyles for these
export const DefaultFontVariants: IFontVariants = {
  default: {
    family: 'default',
    size: 'inherit'
  },

  caption: {
    size: 'xSmall'
  },

  h1: {
    size: 'mega',
    weight: 'light'
  },

  h2: {
    size: 'xxLarge',
    weight: 'light'
  },

  h3: {
    size: 'xLarge',
    weight: 'light'
  },

  h4: {
    size: 'large',
    weight: 'light'
  },

  h5: {
    size: 'mediumPlus',
    weight: 'light'
  },

  link: {
    color: 'link',
    hoverColor: 'linkHovered'
  }
};

export const DefaultFont: IFont = {
  families: DefaultFontFamilies,
  sizes: DefaultFontSizes,
  weights: DefaultFontWeights,
  variants: DefaultFontVariants
};
