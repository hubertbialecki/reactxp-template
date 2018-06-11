import * as RX from 'reactxp';
import { Component } from 'react';

interface Props {}

const styles = {
  appContainer: RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: 'row',
  }),
};

class AppContainer extends Component<Props, {}> {
  render() {
    return (
      <RX.View style={styles.appContainer}>
        <RX.Text>Web</RX.Text>
      </RX.View>
    );
  }
}

export default AppContainer;
