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
const accountRef = rootRef.child('AccountProfile');

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
      email1       : '',
      username     : '',
      password     : '',
      city         : '',
      username     : '',
      errorMessage : null,
      // firstname: '',
      // lastname: '',
      // address1: '',
      // address2: '',
      // dob: '',
      // gender: '',
      // mi: '',
      // phone: '',
      // servicecode: '',
      // state: '',
      // zipcode: '',
      // email: '',
      // username: '',
      // city : ''
    };
  }

  componentDidMount() {
    var email = firebase.auth().currentUser.email;
    console.log(email);
    var query = accountRef.orderByChild('email').equalTo(email);
    query.once('value', (snapshot) => {
      snapshot.forEach((child) => {
        // var firstname_display = child.val().firstname;
        this.setState({
          firstname : child.val().firstname,
          lastname : child.val().lastname,
          mi : child.val().mi,
          address1 : child.val().address1,
          address2 : child.val().address2,
          city : child.val().city,
          state : child.val().state,
          zipcode : child.val().zipcode,
          phone : child.val().lastname,
          dob : child.val().dob,
          gender : child.val().gender,
          servicecode : child.val().servicecode,
          username : child.val().username
        })
        // console.log(firstname_display);
        console.log(this.state.firstname);
        console.log(this.state.zipcode);
      });
    }).catch((error) => {
      console.log(error);
    });
    // accountRef.on('value', (childSnapshot) => {
    //   const accounts = [];
    //   childSnapshot.forEach((doc) => {
    //     accounts.push({
    //       key : doc.key,
    //       firstname: doc.toJSON().firstname,
    //       lastname: doc.toJSON().lastname,
    //       address1: doc.toJSON().address1,
    //       address2: doc.toJSON().address2,
    //       dob: doc.toJSON().dob,
    //       gender: doc.toJSON().gender,
    //       mi: doc.toJSON().mi,
    //       phone: doc.toJSON().phone,
    //       servicecode: doc.toJSON().servicecode,
    //       state: doc.toJSON().state,
    //       city: doc.toJSON().city,
    //       email: doc.toJSON().email,
    //       username: doc.toJSON().username,
    //     })
    //   })
    // });
    // var email = firebase.auth().currentUser.email;
    
    // firebase.database().ref('UserProfile').once('value', data => {
    //   let obj = data.toJSON()
    //   console.log(obj);
    //   // this.setState({
    //   //   firstname : accountsObj.firstname,
    //   //   lastname : accountsObj.lastname,
    //   //   address1 : accountsObj.address1,
    //   //   address2 : accountsObj.address2,
    //   //   dob : accountsObj.dob,
    //   //   gender : accountsObj.gender,
    //   //   mi : accountsObj.mi,
    //   //   phone : accountsObj.phone,
    //   //   servicecode : accountsObj.servicecode,
    //   //   state : accountsObj.state,
    //   //   city : accountsObj.city,
    //   //   email : accountsObj.email,
    //   //   username : accountsObj.username,
    //   // });
    //   // console.log(this.state.firstname);
    // }).catch((error) => {
    //   console.log(error)
    // });
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

  // readData = () => {
  //   var email = firebase.auth().currentUser.email;;
  //   var query = accountRef.orderByChild('email').equalTo(email);
  //   query.once('value', function(snapshot) {
  //     snapshot.forEach(function(child) {
  //       console.log(child.key, child.val().firstname);
  //     });
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  handleSubmit = () => {
    var email = firebase.auth().currentUser.email;
    // var newPostKey = firebase.database().ref().child('AccountProfile').push().key;
    var query = accountRef.orderByChild('email').equalTo(email);
    query.once('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.setState({
          email1 : child.val().email
        })
        console.log(this.state.email1);
      });
    }).catch((error) => {
      console.log(error);
    });
    if(this.state.email1 === ''){
      firebase.database().ref().child('AccountProfile/'+ this.state.username).set({
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
          username : this.state.username 
        }).then(() => {
        alert('Account profile submited successfully!');
      }).catch(error => this.setState({errorMessage : error.message}))
    }
    if(this.state.email1 === email) {
      firebase.database().ref().child('AccountProfile/' + this.state.username).update({
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
        username : this.state.username
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
            <TextInput style={styles.textinput}
              placeholder={'Username'}
              value={this.state.username}
              onChangeText={(text) => this.setState({username : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'Firstname'}
              value={this.state.firstname}
              onChangeText={(text) => this.setState({firstname : text})}
            />  
            <TextInput style={styles.textinput}
              placeholder={'Lastname'}
              value={this.state.lastname}
              onChangeText={(text) => this.setState({lastname : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'MI'}
              value={this.state.mi || this.state.mi}
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
            <TextInput style={styles.textinput}
              placeholder={'Phone'}
              value={this.state.phone}
              onChangeText={(text) => this.setState({phone : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'Address1'}
              value={this.state.address1}
              onChangeText={(text) => this.setState({address1 : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'Address2'}
              value={this.state.address2}
              onChangeText={(text) => this.setState({address2 : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'DOB'}
              value={this.state.dob}
              onChangeText={(text) => this.setState({dob : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'Gender'}
              value={this.state.gender}
              onChangeText={(text) => this.setState({gender : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'State'}
              value={this.state.state}
              onChangeText={(text) => this.setState({state : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'City'}
              value={this.state.city}
              onChangeText={(text) => this.setState({city : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'Zipcode'}
              value={this.state.zipcode && String(this.state.zipcode)}
              onChangeText={(text) => this.setState({zipcode : text})}
            /> 
            <TextInput style={styles.textinput}
              placeholder={'Servicecode'}
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
  textinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  },
});