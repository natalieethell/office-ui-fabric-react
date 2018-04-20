import * as React from 'react';
import {
  Chiclet
} from '../Chiclet';

export class ChicletBasicExample extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <Chiclet url="http://localhost:4322" size="medium"
        actions={ ["Breadcrumb", "Save", "Share"] }
      />
    );
  }

}

// actions={ [
//   { iconProps: { iconName: 'Breadcrumb' } },
//   { iconProps: { iconName: 'Save' } },
//   { iconProps: { iconName: 'Share' } }
// ] }