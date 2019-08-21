import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Referral extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Referral</Text>
      </View>
    )
  }
}
export default Referral;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });