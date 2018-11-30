import { ISemanticTextColors } from '../../Styling';
import { ITextComponent } from './Text.types';

export const TextStyles: ITextComponent['styles'] = props => {
  const { as, className, inline, theme, wrap, variant, family, weight, size, color, hoverColor } = props;
  const { semanticColors, font } = theme;
  const variantObject = font.variants[variant!] || font.variants.default;

  return {
    root: [
      theme.fonts.medium,
      {
        display: inline ? 'inline' : as === 'td' ? 'table-cell' : 'block',
        fontFamily: variantObject.family || 'inherit',
        fontSize: variantObject.size || 'inherit',
        // tslint:disable-next-line:no-any
        fontWeight: (variantObject.weight as any) || 'inherit',
        color: variantObject.color || 'inherit'
      },
      family && {
        // TODO: How are language specific font families configured?
        fontFamily: font.families[family]
      },
      size && {
        fontSize: font.sizes[size]
      },
      weight && {
        fontWeight: font.weights[weight]
      },
      color && {
        color: semanticColors[color as keyof ISemanticTextColors]
      },
      hoverColor && {
        selectors: {
          ':hover': {
            color: semanticColors[hoverColor as keyof ISemanticTextColors]
          }
        }
      },
      !wrap && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      // TODO: this needs to be evaluated.
      //     mozOsxFontSmoothing: mozOsxFontSmoothing,
      //     webkitFontSmoothing: webkitFontSmoothing,
      className
    ]
  };
};
