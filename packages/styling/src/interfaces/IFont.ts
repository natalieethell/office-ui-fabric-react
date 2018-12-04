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
 * Interface for font variant
 */
export interface IFontVariant {
  family: keyof IFontFamilies | string;
  size: keyof IFontSizes | number | string;
  weight: keyof IFontWeights | IFontWeight | number;
  color?: keyof ISemanticTextColors;
}

/**
 * Font variants
 */
export interface IFontVariants {
  default: Partial<IFontVariant>;
  metadata: Partial<IFontVariant>;
  header: Partial<IFontVariant>;
}

/**
 * UI Fabric font set
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
