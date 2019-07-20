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
import Account from './screens/components/Profile/Account';
import CallHistory from './screens/components/Profile/CallHistory';
import FamilyMember from './screens/components/Profile/FamilyMember';
import LabReport from './screens/components/Profile/LabReport';
import Medication from './screens/components/Profile/Medication';
import Monitor from './screens/components/Profile/Monitor';
import Payment from './screens/components/Profile/Payment';
import Referral from './screens/components/Profile/Referral';
import Vaccination from './screens/components/Profile/Vaccination';
import Profile from './screens/Profile';

import firebase from 'firebase';
import { firebaseConfig } from './screens/firebaseconfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component{
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Loading : Loading,
  Login : Login,
  SignUp: SignUp,
  Dashboard: Dashboard,
  Profile: { screen: Profile},
  Account: { screen: Account },
  CallHistory: { screen: CallHistory },
  FamilyMember: { screen: FamilyMember },
  LabReport: { screen: LabReport },
  Medication: { screen: Medication },
  Monitor: { screen: Monitor },
  Payment: { screen: Payment },
  Referral: { screen: Referral },
  Vaccination: { screen: Vaccination },
  
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
