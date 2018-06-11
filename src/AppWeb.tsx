import * as RX from 'reactxp';
import { Component } from 'react';

import AppContainer from '@src/containers/AppContainer/AppContainer.web';

class AppWeb extends Component {
  static init() {
    RX.App.initialize(true, true);
    RX.UserInterface.setMainView(<AppWeb />);
  }

  render() {
    return (
      <RX.View style={{ flex: 1 }}>
        <AppContainer />
      </RX.View>
    );
  }
}

export default AppWeb;
