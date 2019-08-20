import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

class Pharmacy extends Component {

  // static navigationOptions = {
  //   title: 'Pharmacy',
  // };

  render() {
    return (
      <View style={styles.Container}>
        {/* <MapView
          style={styles.Map} 
          region={{
            latitude : 59.00000,
            longitude: 18.00000,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
        </MapView> */}
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
    Map : {

    }
  });
  