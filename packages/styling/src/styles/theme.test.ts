import { registerOnThemeChangeCallback, removeOnThemeChangeCallback, loadTheme, createTheme } from './theme';
import { DefaultFont } from './DefaultFont';
import { IPartialTheme, IFont } from '../interfaces/index';

describe('registerOnThemeChangeCallback', () => {
  let callback = jest.fn();

  it('registers a callback successfully', () => {
    registerOnThemeChangeCallback(callback);
    expect(callback.mock.calls.length).toBe(0);
  });

  it('calls the previously registered callback', () => {
    loadTheme({});
    expect(callback.mock.calls.length).toBe(1);
  });

  it('calls the previously registered callback (again)', () => {
    loadTheme({});
    expect(callback.mock.calls.length).toBe(2);
  });

  it('unregisters the callback, and doesnt call it again', () => {
    removeOnThemeChangeCallback(callback);
    expect(callback.mock.calls.length).toBe(2);
    loadTheme({});
    expect(callback.mock.calls.length).toBe(2);
  });

  it('didnt pass null to the callback', () => {
    expect(callback.mock.calls[0][0]).toBeTruthy();
    expect(callback.mock.calls[1][0]).toBeTruthy();
  });
});

describe('theme.font', () => {
  it('expands sizes', () => {
    const userTheme: IPartialTheme = {
      font: {
        variants: {
          default: {
            family: 'monospace',
            size: '90',
            weight: 'bold',
            color: 'link'
          }
        }
      }
    };

    const newTheme = createTheme(userTheme);

    expect(newTheme.font.variants.default.size).toEqual(DefaultFont.sizes['90']);
  });

  it('updates the variants when sizes are adjusted', () => {
    const userTheme = {
      font: {
        sizes: {
          [DefaultFont.variants.default.size!]: '100px'
        }
      }
    } as IPartialTheme;

    const newTheme = createTheme(userTheme);

    expect(newTheme.font.variants.default.size).toEqual('100px');
  });

  it('does not modify DefaultFont when given a theme with no font', () => {
    const previousDefault = { ...DefaultFont };
    const newTheme = createTheme({
      palette: {
        themePrimary: '#ff0000'
      }
    });
    expect(DefaultFont).toEqual(previousDefault);
  });
});
