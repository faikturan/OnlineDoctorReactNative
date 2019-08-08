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
import MakeAppointment from './screens/components/Appointment/MakeAppointment';
import Slot from './screens/components/Appointment/Slot';
import DoctorList from './screens/components/Appointment/DoctorList';
import DoctorDetail from './screens/components/Appointment/DoctorDetail';
import Confirm from './screens/components/Appointment/Confirm';

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
  Account: { screen: Account },
  CallHistory: { screen: CallHistory },
  FamilyMember: { screen: FamilyMember },
  LabReport: { screen: LabReport },
  Medication: { screen: Medication },
  Monitor: { screen: Monitor },
  Payment: { screen: Payment },
  Referral: { screen: Referral },
  Vaccination: { screen: Vaccination },
  Dashboard : { screen: Dashboard },
  MakeAppointment : { screen: MakeAppointment },
  Slot : { screen: Slot },
  DoctorList : { screen: DoctorList },
  DoctorDetail : { screen: DoctorDetail },
  Confirm : { screen: Confirm }
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
