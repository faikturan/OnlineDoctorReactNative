/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
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
import DoctorList from './screens/components/Appointment/DoctorList';
import DoctorDetail from './screens/components/Appointment/DoctorDetail';
import Confirm from './screens/components/Appointment/Confirm';
import AppointmentDetail from './screens/components/Appointment/AppointmentDetail';
import FirebaseConfig from './screens/FirebaseConfig';
import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
};

export default class App extends Component{

  render() {
    return 
      <AppNavigator1 />;
      <AppNavigator2 />;
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
  DoctorList : { screen: DoctorList },
  DoctorDetail : { screen: DoctorDetail },
  Confirm : { screen: Confirm },
  AppointmentDetail : { screen: AppointmentDetail },
});

const AppNavigator1 = createAppContainer(AppSwitchNavigator);

const AppStackNavigator = createStackNavigator({
  
});

const AppNavigator2 = createStackNavigator(AppStackNavigator);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
