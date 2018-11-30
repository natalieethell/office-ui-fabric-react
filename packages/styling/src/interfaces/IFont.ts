import { IFontWeight } from '../MergeStyles';
import { ISemanticTextColors } from './ISemanticTextColors';

/**
 * Font families
 */
export interface IFontFamilies {
  default: string;
  header: string;
  monospace: string;
}

/**
 * Font sizes
 */
export interface IFontSizes {
  // 70: string;
  80: string;
  90: string;
  100: string;
  110: string;
  120: string;
  130: string;
  // 140: string;
  150: string;
  // 160: string;
  // 170: string;
  180: string;
  // 190: string;
  // 200: string;
  210: string;
  // 220: string;
}

/**
 * Font weights
 */
export interface IFontWeights {
  light: IFontWeight;
  regular: IFontWeight;
  semibold: IFontWeight;
  bold: IFontWeight;
}

/**
 * @internal This is an experimental interface and will be changed post design review.
 */
export interface IFontVariant {
  family: keyof IFontFamilies | string;
  size: keyof IFontSizes | number | string;
  weight: keyof IFontWeights | number;
  color?: keyof ISemanticTextColors;
  hoverColor?: keyof ISemanticTextColors;
  disabledColor?: keyof ISemanticTextColors;
}

/**
 * @internal This is an experimental interface and will be changed post design review.
 */
export interface IFontVariants {
  default: Partial<IFontVariant>;
  caption: Partial<IFontVariant>;
  link: Partial<IFontVariant>;
  h1: Partial<IFontVariant>;
  h2: Partial<IFontVariant>;
  h3: Partial<IFontVariant>;
  h4: Partial<IFontVariant>;
  h5: Partial<IFontVariant>;
}

/**
 * @internal This is an experimental interface and will be changed post design review.
 */
export interface IFont {
  families: IFontFamilies;
  sizes: IFontSizes;
  weights: IFontWeights;
  variants: IFontVariants;
}

/**
 * Used in IPartialTheme so that user-defined themes can override selected font properties
 */
export type IPartialFont = { [P in keyof IFont]?: Partial<IFont[P]> };
