import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Medication extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Medication</Text>
      </View>
    )
  }
}
export default Medication;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  