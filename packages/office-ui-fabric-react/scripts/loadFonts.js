const { DefaultFontStyles, _loadFonts } = require('@uifabric/styling');
const fs = require('fs');
const path = require('path');

const fonts = _loadFonts();

const srcRoot = './src/common';
const lines = [];
const defaultFontStyles = DefaultFontStyles;

for (const fontName of Object.keys(defaultFontStyles)) {
  const font = defaultFontStyles[fontName];
  for (const propName of Object.keys(font)) {
    const name = 'ms-font-' + fontName + '-' + propName;
    lines.push(`$${name}: "[theme:${name}, default: ${font[propName]}]";`);
  }
}

const outputFilename = '_themeVariables.scss';
fs.writeFileSync(path.join(srcRoot, outputFilename), lines.join('\n'));
