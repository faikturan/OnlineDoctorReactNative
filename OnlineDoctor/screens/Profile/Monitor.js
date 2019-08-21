import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Monitor extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Monitor</Text>
      </View>
    )
  }
}
export default Monitor;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });