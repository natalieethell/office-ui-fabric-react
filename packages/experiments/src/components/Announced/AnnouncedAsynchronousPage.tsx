import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { AnnouncedAsynchronousExample } from './examples/Announced.Asynchronous.Example';
const AnnouncedAsynchronousExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Announced/examples/Announced.Asynchronous.Example.tsx') as string;

export class AnnouncedAsynchronousPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Announced"
        componentName="Announced"
        exampleCards={
          <div>
            <ExampleCard
              title="Announced component used for asynchronous page/page content loading"
              isOptIn={true}
              code={AnnouncedAsynchronousExampleCode}
            >
              <AnnouncedAsynchronousExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!@uifabric/experiments/src/components/Announced/Announced.types.ts')]}
          />
        }
        overview={
          <div>
            <p>
              The Announced component aims to fill several of the accessibility gaps that exist in various web application experiences. It
              provides text for the screen reader in certain scenarios that are lacking comprehensive updates, particularly those showing
              the completion status or progress of operation(s).
            </p>
            <p>
              Some real-world applications of the component include copying, uploading, deleting, or moving many files, "lazy loading" of
              page sections that do not appear all at once, and appearance of search results.
            </p>
          </div>
        }
        bestPractices={<div />}
        dos={
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
