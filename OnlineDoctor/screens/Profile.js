import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileItem from './components/Profile/ProfileItem';

const { height, width } = Dimensions.get('window');

class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 8/9, backgroundColor: '#92DFF3' }}>
            
          </View>
          <View style={{ flex: 1/9, backgroundColor: 'white'}}>

          </View>
      </SafeAreaView>
    )
  }
}
export default Profile;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row', 
      padding: 10, 
      marginHorizontal: 10, 
      justifyContent: 'space-between',
      alignItems: 'center', 
      elevation: 1, 
      marginTop: Platform.OS == 'android' ? 30 : null
    },
    homeText: {
        fontSize: 22, 
        fontWeight: '500', 
        width: '60%', 
        justifyContent: 'space-between'
    }
  });
  