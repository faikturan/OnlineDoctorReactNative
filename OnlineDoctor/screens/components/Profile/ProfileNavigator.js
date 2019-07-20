import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'; 
import Account from './Account';
import CallHistory from './CallHistory';
import FamilyMember from './FamilyMember';
import LabReport from './LabReport';
import Medication from './Medication';
import Monitor from './Monitor';
import Payment from './Payment';
import Referral from './Referral';
import Vaccination from './Vaccination';
import Profile from '../../Profile';

export default class ProfileNavigator extends Component{
    render() {
        return(
            <AppStackNavigator />
        )
    }
}

const AppStackNavigator = createStackNavigator({
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