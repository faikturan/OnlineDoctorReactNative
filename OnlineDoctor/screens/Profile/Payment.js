import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Payment extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Payment</Text>
      </View>
    )
  }
}
export default Payment;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });