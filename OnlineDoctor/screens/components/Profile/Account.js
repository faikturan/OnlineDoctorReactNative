import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Label, InputAccessoryView, Item, TextInput, AlertIOS, TouchableHighlight, Picker } from 'react-native';
import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';


export default class Account extends Component {

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDCozJ--F6g1nGzsxstmGXAm0Tfe39LVrc",
      authDomain: "onlinedoctorproject.firebaseapp.com",
      databaseURL: "https://onlinedoctorproject.firebaseio.com",
      projectId: "onlinedoctorproject",
      storageBucket: "onlinedoctorproject.appspot.com",
      messagingSenderId: "298997965467",
      appId: "1:298997965467:web:1b2070c19b10333d"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      firstname    : '',
      lastname     : '',
      address1     : '',
      address2     : '',
      dob          : '',
      gender       : '',
      mi           : '',
      phone        : '',
      servicecode  : '',
      state        : '',
      zipcode      : '',
      email        : '',
      username     : '',
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  writeUserData(firstname, lastname, address1, address2, dob, gender, phone, mi,
    servicecode, state, city,
    ) {
    firebase.database().ref('accountInfo/').push({
      firstname,
      lastname,
      address1,
      address2,
      dob,
      gender,
      mi,
      phone,
      servicecode,
      state,
      zipcode,
      email,
      username,
      city         
    }).then((data) => {
      console.log('data: ', data)
    })
  }

  handleSubmit() {
    updateAccountInfo(
      this.state.firstname,
      this.state.lastname,
      this.state.address1,
      this.state.address2,
      this.state.mi,
      this.state.dob,
      this.state.gender,
      this.state.phone,
      this.state.servicecode,
      this.state.state,
      this.state.zipcode,
      this.state.email,
      this.state.username
    );
    AlertIOS.alert('Account Info updated successfully!');
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            Personal Information
          </Text>
          <View>
            <TextInput
              placeholder={'firstname'}
              value={this.state.firstname}
              onChangeText={(text) => this.updateAccountInfo(text, 'firstname')}
            />  
            <TextInput
              placeholder={'firstname'}
              value={this.state.lastname}
              onChangeText={(text) => this.updateAccountInfo(text, 'lastname')}
            /> 
            <TextInput
              placeholder={'firstname'}
              value={this.state.mi}
              onChangeText={(text) => this.updateAccountInfo(text, 'mi')}
            />
            <Picker style={{ width : '80%'}}
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemIndex) => this.setState({ gender : itemValue }) }
            >
              <Picker.Item label="Select a option" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
            <TextInput
              placeholder={'firstname'}
              value={this.state.firstname}
              onChangeText={(text) => this.updateAccountInfo(text, 'firstname')}
            /> 
            <TextInput
              placeholder={'firstname'}
              value={this.state.firstname}
              onChangeText={(text) => this.updateAccountInfo(text, 'firstname')}
            /> 
            <TextInput
              placeholder={'firstname'}
              value={this.state.firstname}
              onChangeText={(text) => this.updateAccountInfo(text, 'firstname')}
            /> 
            <TextInput
              placeholder={'firstname'}
              value={this.state.firstname}
              onChangeText={(text) => this.updateAccountInfo(text, 'firstname')}
            /> 
            <TextInput
              placeholder={'firstname'}
              value={this.state.firstname}
              onChangeText={(text) => this.updateAccountInfo(text, 'firstname')}
            /> 
          </View>
          <Button title="go back to login screen" 
            onPress={() => this.props.navigation.navigate('Profile')}>
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});