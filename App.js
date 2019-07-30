import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/SignUp';

import store from './store'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <View style={styles.container}>
            <SignUp />
          </View>
        </Provider>
      </BrowserRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
