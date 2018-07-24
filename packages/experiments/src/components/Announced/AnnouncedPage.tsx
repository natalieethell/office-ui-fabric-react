import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage } from '@uifabric/example-app-base';

import { AnnouncedProgressIndicatorExample } from './examples/Announced.ProgressIndicator.Example';
const AnnouncedProgressIndicatorExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Announced/examples/Announced.ProgressIndicator.Example.tsx') as string;

export class AnnouncedPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Announced"
        componentName="Announced"
        exampleCards={
          <div>
            <ExampleCard
              title="Announced Component with Progress Indicator"
              isOptIn={true}
              code={AnnouncedProgressIndicatorExampleCode}
            >
              <AnnouncedProgressIndicatorExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={<div />}
        overview={<div />}
        bestPractices={<div />}
        dos={
          // @todo: fill in description
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        donts={
          // @todo: fill in description
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
