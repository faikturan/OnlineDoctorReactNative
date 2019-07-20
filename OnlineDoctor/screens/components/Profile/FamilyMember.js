import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FamilyMember extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>FamilyMember</Text>
      </View>
    )
  }
}
export default FamilyMember;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  