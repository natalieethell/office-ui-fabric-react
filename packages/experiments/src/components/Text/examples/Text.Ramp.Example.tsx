import * as React from 'react';
import { Text, VerticalStack } from '@uifabric/experiments';
import { IFontVariants, IFontSizes, IFontWeights, IFontFamilies, IStyle } from '@uifabric/experiments/lib/Styling';
import { ISemanticTextColors, IPalette } from '@uifabric/experiments/lib/Styling';
import { createStatelessComponent, IStyleableComponentProps, IStatelessComponent } from '@uifabric/experiments/lib/Foundation';

const TestText = 'The quick brown fox jumped over the lazy dog.';

interface ISetting<TType> {
  name: TType;
  usage: string;
}

const Variants: ISetting<keyof IFontVariants>[] = [
  { name: 'default', usage: 'default' },
  { name: 'metadata', usage: 'metadata' },
  { name: 'header', usage: 'header' }
];

const Sizes: ISetting<keyof IFontSizes>[] = [
  { name: 80, usage: 'usage here.' },
  { name: 90, usage: 'usage here.' },
  { name: 100, usage: 'usage here.' },
  { name: 110, usage: 'usage here.' },
  { name: 120, usage: 'usage here.' },
  { name: 130, usage: 'usage here.' },
  { name: 150, usage: 'usage here.' },
  { name: 180, usage: 'usage here.' },
  { name: 210, usage: 'usage here.' }
];

const Weights: ISetting<keyof IFontWeights>[] = [
  { name: 'light', usage: '' },
  { name: 'regular', usage: '' },
  { name: 'semibold', usage: '' },
  { name: 'bold', usage: '' }
];

const Families: ISetting<keyof IFontFamilies>[] = [{ name: 'default', usage: '' }, { name: 'monospace', usage: '' }];

const Colors: ISetting<keyof ISemanticTextColors | keyof IPalette>[] = [
  { name: 'bodyText', usage: '' },
  { name: 'link', usage: '' },
  { name: 'linkHovered', usage: '' },
  { name: 'actionLink', usage: '' },
  { name: 'actionLinkHovered', usage: '' }
];

interface ITableStyles {
  root: IStyle;
  table: IStyle;
  header: IStyle;
}

// Note I intuitively tried to extend IStyleableComponentProps... this was confusing.
interface ITableProps extends IStyleableComponentProps<ITableProps, ITableStyles> {
  className?: string;
  title: string;
  headers: string[];
  children: React.ReactNode;
}

type ITableComponent = IStatelessComponent<ITableProps, ITableStyles>;

const TableView: ITableComponent['view'] = props => (
  <VerticalStack className={props.className} gap={20}>
    <Text variant="header">{props.title}</Text>
    <table className={props.classNames.table}>
      <thead>
        <tr className={props.classNames.header}>
          {props.headers.map((header: string) => (
            <Text key={header} as="td" weight="bold">
              {header}
            </Text>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  </VerticalStack>
);

const Table = createStatelessComponent<ITableProps, ITableStyles>({
  view: TableView,
  displayName: 'Table',
  styles: {
    table: {
      borderCollapse: 'collapse'
    },
    header: {
      borderBottom: '1px solid black'
    }
  }
});

interface ITableRowProps {
  cells: React.ReactNode[];
}

const TableRow: React.StatelessComponent<ITableRowProps> = (props: ITableRowProps) => (
  <tr>
    {props.cells.map((cell: string) => (
      <Text as="td" key={cell}>
        {cell}
      </Text>
    ))}
  </tr>
);

export const TextRampExample = () => (
  <VerticalStack gap={40}>
    <Text>Default text should render using the "default" variant.</Text>

    <Table title="Variants" headers={['Variant', 'Example', 'Usage']}>
      {Variants.map((setting: ISetting<keyof IFontVariants>) => (
        <TableRow
          key={setting.name}
          cells={[
            setting.name,
            <Text key={setting.name + 'text'} variant={setting.name}>
              {TestText}
            </Text>,
            <Text key={setting.name + 'usage'}>setting.usage</Text>
          ]}
        />
      ))}
    </Table>

    <Table title="Sizes" headers={['Size', 'Example', 'Usage']}>
      {Sizes.map((setting: ISetting<keyof IFontSizes>) => (
        <TableRow
          key={setting.name}
          cells={[
            setting.name,
            <Text key={setting.name + 'text'} size={setting.name}>
              {TestText}
            </Text>,
            setting.usage
          ]}
        />
      ))}
    </Table>

    <Table title="Weights" headers={['Weight', 'Example', 'Usage']}>
      {Weights.map((setting: ISetting<keyof IFontWeights>) => (
        <TableRow
          key={setting.name}
          cells={[
            setting.name,
            <Text key={setting.name + 'text'} weight={setting.name}>
              {TestText}
            </Text>,
            setting.usage
          ]}
        />
      ))}
    </Table>

    <Table title="Families" headers={['Family', 'Example', 'Usage']}>
      {Families.map((setting: ISetting<keyof IFontFamilies>) => (
        <TableRow
          key={setting.name}
          cells={[
            setting.name,
            <Text key={setting.name + 'text'} family={setting.name}>
              {TestText}
            </Text>,
            setting.usage
          ]}
        />
      ))}
    </Table>

    <Table title="Colors" headers={['Color', 'Example']}>
      {Colors.map((setting: ISetting<keyof ISemanticTextColors | keyof IPalette>) => (
        <TableRow
          key={setting.name}
          cells={[
            setting.name,
            <Text key={setting.name + 'text'} color={setting.name}>
              {TestText}
            </Text>
          ]}
        />
      ))}
    </Table>
  </VerticalStack>
);
