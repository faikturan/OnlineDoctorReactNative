import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Label, InputAccessoryView, Item, TextInput, AlertIOS, TouchableHighlight, Picker, Dimensions } from 'react-native';
import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window')

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
};


const rootRef = firebase.database().ref();
const accountRef = rootRef.child('accounts');

export default class Account extends Component {

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
      password     : '',
      city         : '',
      errorMessage : null
    };
  }

  componentDidMount() {
    accountRef.on('value', (childSnapshot) => {
      const accounts = [];
      childSnapshot.forEach((doc) => {
        accounts.push({
          key : doc.key,
          firstname: doc.toJSON().firstname,
          lastname: doc.toJSON().lastname,
          address1: doc.toJSON().address1,
          address2: doc.toJSON().address2,
          dob: doc.toJSON().dob,
          gender: doc.toJSON().gender,
          mi: doc.toJSON().mi,
          phone: doc.toJSON().phone,
          servicecode: doc.toJSON().servicecode,
          state: doc.toJSON().state,
          city: doc.toJSON().city,
          email: doc.toJSON().email,
          username: doc.toJSON().username,
          phone : doc.toJSON().phone,
        })
      })
    });
  }

  // writeUserData(firstname, lastname, address1, address2, dob, gender, phone, mi,
  //   servicecode, state, city, zipcode, email, username) {
  //     firebase.database().ref('accountInfo/').set({
  //     // firstname : FirstName,
  //     // lastname, FirstName,
  //     // address1: Address1,
  //     // address2: Address2,
  //     // dob: DOB,
  //     // gender: Gender,
  //     // mi: MI,
  //     // phone: Phone,
  //     // servicecode: ServiceCode,
  //     // state: State,
  //     // zipcode: ZipCode,
  //     // email: Email,
  //     // username: Username,
  //     // city: City  
  //     firstname: '',
  //     lastname: '',
  //     address1: '',
  //     address2: '',
  //     mi: '',
  //     gender: '',
  //     dob: '',
  //     phone: '',
  //     servicecode: '',
  //     state: '',
  //     city: '',
  //     email: '',
  //     username: '',

  //   }).then((data) => {
  //     console.log('data: ', data)
  //   }).catch((error) => {
  //     console.log('error: ', error)
  //   })
  // }

  handleSubmit = () => {
    var email = firebase.auth().currentUser.email;
    var email1 = firebase.database().ref.child('accounts/' + email);
    if(email1 == ''){
      accountRef.push({
          firstname : this.state.firstname,
          lastname : this.state.lastname, 
          address1 : this.state.address1, 
          address2 : this.state.address2,
          dob : this.state.dob, 
          gender : this.state.gender, 
          phone : this.state.phone, 
          mi : this.state.mi,
          servicecode : this.state.servicecode, 
          state : this.state.state, 
          city : this.state.city,
          zipcode : this.state.zipcode, 
          email : email, 
          username : email
        }).then(() => {
        alert('Account profile submited successfully!');
      }).catch(error => this.setState({errorMessage : error.message}))
    }
    else {
      accountRef.update({
        firstname : this.state.firstname,
        lastname : this.state.lastname, 
        address1 : this.state.address1, 
        address2 : this.state.address2,
        dob : this.state.dob, 
        gender : this.state.gender, 
        phone : this.state.phone, 
        mi : this.state.mi,
        servicecode : this.state.servicecode, 
        state : this.state.state, 
        city : this.state.city,
        zipcode : this.state.zipcode,
      }).then(() => {
        alert('Account profile updated successfully!');
      }).catch(error => this.setState({errorMessage : error.message}))
    }
}

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: this.startHeaderHeight }}>
            <View style={ styles.header}>
                <Icon name="ios-arrow-back" size={25} />
                <Text style={styles.headertext}>Account</Text>
            </View>
          </View>
          <Text style={styles.title}>
            Personal Information
          </Text>
          <View>
            <TextInput
              placeholder={'firstname'}
              value={this.state.firstname}
              onChangeText={(text) => this.setState({firstname : text})}
            />  
            <TextInput
              placeholder={'lastname'}
              value={this.state.lastname}
              onChangeText={(text) => this.setState({lastname : text})}
            /> 
            <TextInput
              placeholder={'mi'}
              value={this.state.mi}
              onChangeText={(text) => this.setState({mi : text})}
            />
            {/* <Picker style={{ width : '80%'}}
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemIndex) => this.setState({ gender : itemValue }) }
            >
              <Picker.Item label="Select a option" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker> */}
            <TextInput
              placeholder={'phone'}
              value={this.state.phone}
              onChangeText={(text) => this.setState({phone : text})}
            /> 
            <TextInput
              placeholder={'address1'}
              value={this.state.address1}
              onChangeText={(text) => this.setState({address1 : text})}
            /> 
            <TextInput
              placeholder={'address2'}
              value={this.state.address2}
              onChangeText={(text) => this.setState({address2 : text})}
            /> 
            <TextInput
              placeholder={'dob'}
              value={this.state.dob}
              onChangeText={(text) => this.setState({dob : text})}
            /> 
            <TextInput
              placeholder={'gender'}
              value={this.state.gender}
              onChangeText={(text) => this.setState({gender : text})}
            /> 
            <TextInput
              placeholder={'state'}
              value={this.state.state}
              onChangeText={(text) => this.setState({state : text})}
            /> 
            <TextInput
              placeholder={'city'}
              value={this.state.city}
              onChangeText={(text) => this.setState({city : text})}
            /> 
            <TextInput
              placeholder={'zipcode'}
              value={this.state.zipcode}
              onChangeText={(text) => this.setState({zipcode : text})}
            /> 
            <TextInput
              placeholder={'servicecode'}
              value={this.state.servicecode}
              onChangeText={(text) => this.setState({servicecode : text})}
            /> 
            <Button title= "Submit" onPress={this.handleSubmit} />
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
  header: {
    flexDirection: 'row', 
    padding: 10, 
    marginLeft: 10, 
    justifyContent: 'space-between',
    alignItems: 'center', 
    elevation: 1, 
    marginTop: Platform.OS == 'android' ? 30 : null
  },
  headertext: {
      fontSize: 22, 
      fontWeight: '500', 
      width: '65%', 
      justifyContent: 'space-between'
  },
});