import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LabReport extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>LabReport</Text>
      </View>
    )
  }
}
export default LabReport;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });