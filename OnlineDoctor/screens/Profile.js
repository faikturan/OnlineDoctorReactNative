import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Button, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { ListItem } from 'react-native-elements'

const { height, width } = Dimensions.get('window');

const list = [
  {
    title: 'Account',
    name: 'Account',
    icon: 'person'
  },
  {
    title: 'Call History',
    name: 'CallHistory',
    icon: 'call'
  },
  {
    title: 'Family Member',
    name: 'FamilyMember',
    icon: 'people'
  },
  {
    title: 'Lab Report',
    name: 'LabReport',
    icon: 'note'
  },
  {
    title: 'Medication',
    name: 'Medication',
    icon: 'pills'
  },
  {
    title: 'Monitor',
    name: 'Monitor',
    icon: 'tv'
  },
  {
    title: 'Payment',
    name: 'Payment',
    icon: 'payment'
  },
  {
    title: 'Vaccination',
    name: 'Vaccination',
    icon: 'colorize'
  },
  {
    title: 'Referral',
    name: 'Referral',
    icon: 'people'
  },
  {
    title: 'Basic Info',
    name: 'BasicInfo',
    icon: 'people'
  }
]

class Profile extends Component {

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
        function(user){
            if(user)
            {
                this.props.navigation.navigate('BottomTabNavigator');
            } else {
                this.props.navigation.navigate('Login');
            }
        }.bind(this)
    );
  }

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                chevron
                onPress={() => this.props.navigation.navigate( item.name )}
              />
            ))
          }
          <View style={ styles.bottomView} >
            <Button
              title='Log out'
              onPress={() => firebase.auth().signOut()} 
            />
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
    bottomView:{
      width: '100%', 
      height: 50, 
      backgroundColor: '#87CEFA', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
  });
  