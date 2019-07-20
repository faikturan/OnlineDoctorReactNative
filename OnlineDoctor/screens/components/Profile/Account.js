import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Account extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Account</Text>
        <Button title="go back to login screen" 
        onPress={() => this.props.navigation.navigate('Profile')} />
      </View>
    )
  }
}
export default Account;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  