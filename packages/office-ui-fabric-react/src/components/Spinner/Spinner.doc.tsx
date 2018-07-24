import * as React from 'react';
import { SpinnerBasicExample } from './examples/Spinner.Basic.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { SpinnerStatus } from './Spinner.checklist';

const SpinnerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Spinner/examples/Spinner.Basic.Example.tsx') as string;

export const SpinnerPageProps: IDocPageProps = {
  title: 'Spinner',
  componentName: 'Spinner',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Spinner',
  componentStatus: SpinnerStatus,
  examples: [
    {
      title: 'Various Spinner Types',
      code: SpinnerBasicExampleCode,
      view: <SpinnerBasicExample />
    }
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/Spinner/Spinner.types.ts')
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Spinner/docs/SpinnerOverview.md'),
  accessibility: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/Spinner/docs/SpinnerAccessibility.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Spinner/docs/SpinnerDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Spinner/docs/SpinnerDonts.md'),
  isHeaderVisible: true
};
