import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/SignUp';
import AddJournal from './screens/AddJournal';

import store from './store'
import { Provider } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="AddJournal" component={AddJournal} title="Welcome" initial={true} />
            <Scene key="signUp" component={SignUp} title="SignUp"  />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

