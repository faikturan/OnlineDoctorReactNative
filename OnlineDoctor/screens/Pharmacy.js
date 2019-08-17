import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Pharmacy extends Component {

  // static navigationOptions = {
  //   title: 'Pharmacy',
  // };

  render() {
    return (
      <View style={styles.Container}>
        <Text>Pharmacy</Text>
      </View>
    )
  }
}
export default Pharmacy;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  