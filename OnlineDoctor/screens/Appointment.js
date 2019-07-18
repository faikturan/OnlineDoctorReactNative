import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appointment extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Appointment</Text>
      </View>
    )
  }
}
export default Appointment;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  