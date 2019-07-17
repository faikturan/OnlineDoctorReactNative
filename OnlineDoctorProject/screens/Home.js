import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Home</Text>
      </View>
    )
  }
}
export default Home;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  