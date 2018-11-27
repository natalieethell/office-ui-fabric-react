import * as React from 'react';
import { IDocPageProps } from '../../common/DocPage.types';

import { TextRampExample } from './examples/Text.Ramp.Example';
const TextRampExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Text/examples/Text.Ramp.Example.tsx') as string;

export const TextPageProps: IDocPageProps = {
  title: 'Text',
  componentName: 'Text',
  componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Text',
  examples: [
    {
      title: 'Text Ramps',
      code: TextRampExampleCode,
      view: <TextRampExample />
    }
  ],
  propertiesTablesSources: [require<string>('!raw-loader!office-ui-fabric-react/src/components/Text/Text.types.ts')],
  overview: '',
  bestPractices: '',
  dos: '',
  donts: '',
  isHeaderVisible: true,
  isFeedbackVisible: true
};
