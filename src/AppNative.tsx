import * as RX from 'reactxp';
import { Component } from 'react';

import AppContainer from '@src/containers/AppContainer/AppContainer.native';

class AppNative extends Component {
  static init() {
    RX.App.initialize(true, true);
    RX.UserInterface.setMainView(<AppNative />);
  }


  render() {
    return (
      <RX.View style={{ flex: 1 }}>
        <AppContainer />
      </RX.View>
    );
  }
}

export default AppNative;
