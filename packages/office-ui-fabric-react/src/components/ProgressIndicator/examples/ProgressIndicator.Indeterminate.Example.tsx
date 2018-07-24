import * as React from 'react';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';

export class ProgressIndicatorIndeterminateExample extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <ProgressIndicator
        label="Example title"
        description="Example description"
        onAnnounceProgress={this._onAnnounceProgress}
      />
    );
  }

  private _onAnnounceProgress(progress?: number): string | undefined {
    let update = 'Loading';

    if (progress === undefined) {
      return update;
    } else {
      if (progress === 1) {
        update = 'Starting to upload files';
        console.log(update);
      } else if (Math.round(progress) === 50) {
        update = 'Halfway done uploading files';
        console.log(update);
      } else if (progress === 100) {
        update = 'Uploading files complete';
        console.log(update);
      }
    }
  }
}
