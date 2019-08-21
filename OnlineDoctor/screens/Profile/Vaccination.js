import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Vaccination extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Vaccination</Text>
      </View>
    )
  }
}
export default Vaccination;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });