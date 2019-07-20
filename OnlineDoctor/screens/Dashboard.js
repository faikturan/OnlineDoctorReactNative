/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Pharmacy from './Pharmacy';
import Appointment from './Appointment';
import Profile from './Profile';

export default createBottomTabNavigator({
  Home: {
    screen:Home,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Pharmacy: {
    screen:Pharmacy,
    navigationOptions: {
      tabBarLabel: 'PHARMACY',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-map" color={tintColor} size={24} />
      )
    }
  },
  Appointment: {
    screen:Appointment,
    navigationOptions: {
      tabBarLabel: 'APPOINTMENT',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-paper" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen:Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  },
},{
  tabBarOptions:{
    activeTintColor:'red',
    inactiveTintColor:'grey',
    style:{
      backgroundColor:'white',
      borderTopWidth:0,
      shadowOffset:{width:5,height:3},
      shadowColor:'black',
      shadowOpacity:0.5,
      elevation: 5
    }
  }
})

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
