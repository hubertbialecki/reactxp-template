import * as RX from 'reactxp';
import { Component } from 'react';

interface State {}

const styles = {
  appContainer: RX.Styles.createViewStyle({
    padding: 0,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'stretch',
  }),
};

interface Props {}

class AppContainer extends Component<Props, State> {
  render() {
    return (
      <RX.View style={styles.appContainer}>
        <RX.Text>Mobile</RX.Text>
      </RX.View>
    );
  }
}

export default AppContainer;
