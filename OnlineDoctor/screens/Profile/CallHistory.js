import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CallHistory extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>CallHistory</Text>
      </View>
    )
  }
}
export default CallHistory;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  