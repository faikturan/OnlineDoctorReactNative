/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Route from './Route';
import firebase from 'firebase';

export default class App extends Component{

  componentDidMount() {
    this.checkIfLoggedIn;
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
        function(user){
            if(user)
            {
                this.props.navigation.navigate('BottomTabNavigator');
            } else {
                this.props.navigation.navigate('Login');
            }
        }.bind(this)
    );
  }

  render() {
    return (
      <Route />
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
