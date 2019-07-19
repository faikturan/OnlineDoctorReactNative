/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './screens/Login';
import SignUp from './screens/Signup';
import Dashboard from './screens/Dashboard';
import Loading from './screens/Loading';

import * as firebase from 'firebase';
import { firebaseConfig } from './screens/firebaseconfig';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component{
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Loading : Loading,
  Login : Login,
  SignUp: SignUp,
  Dashboard: Dashboard
});

const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
