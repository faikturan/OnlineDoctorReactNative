import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'firebase';

const { height, width } = Dimensions.get('window');

class Profile extends Component {

  // static navigationOptions = {
  //   title: 'Profile',
  // };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 8/9, backgroundColor: '#92DFF3' }}>
            <Button
              title="Account"
              onPress={() => this.props.navigation.navigate('Account')}
            />
            <Button
              title="Sign up"
              onPress={() => this.props.navigation.navigate('BasicInfo')}
            />
          </View>
          <View style={{ flex: 1/9, backgroundColor: 'white'}}>
          <TouchableOpacity
          style={styles.customBtnBG}
          onPress = {() => firebase.auth().signOut()}
          onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={styles.customBtnText}>Sign Out</Text>
          </TouchableOpacity>
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
    },
    /* Here style the text of your button */
    customBtnText: {
      fontSize: 35,
      fontWeight: '700',
      color: "black",
      textAlign: 'center'
    },

    /* Here style the background of your button */
    customBtnBG: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30
    }
  });
  