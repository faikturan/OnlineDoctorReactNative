import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Label, InputAccessoryView, Item, TextInput, AlertIOS, TouchableHighlight, Picker, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextField } from 'react-native-material-textfield';
import FirebaseConfig from '../../FirebaseConfig';
import firebase from 'firebase';


const { width: WIDTH } = Dimensions.get('window')

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
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
    };
  }

  componentDidMount() {
    var email =firebase.auth().currentUser.email;
    var query = accountRef.orderByChild('email').equalTo(email);
    query.once('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.setState({
          firstname : child.val().firstname,
          lastname : child.val().lastname,
          mi : child.val().mi,
          address1 : child.val().address1,
          address2 : child.val().address2,
          city : child.val().city,
          state : child.val().state,
          zipcode : child.val().zipcode,
          phone : child.val().phone,
          dob : child.val().dob,
          gender : child.val().gender,
          servicecode : child.val().servicecode,
          username : child.val().username
        })
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleSubmit = () => {
    var email = firebase.auth().currentUser.email;
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
                <Icon 
                  name="ios-arrow-back" 
                  size={25}
                  onPress ={() => this.props.navigation.navigate('Profile')}
                />
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text style={styles.headertext}>Account</Text>
                </View>
            </View>
          </View>
          <Text style={ styles.title}>
            Personal Information
          </Text>
          <ScrollView scrollEventThrottle={16}>
            <ScrollView vertical={true}
                      showsVerticalScrollIndicator={true} style={{paddingLeft: 30, paddingRight: 30, paddingBottom: 20}}>
              <TextField
                label='Username'
                placeholder={'Username'}
                value={this.state.username}
                onChangeText={(text) => this.setState({username : text})}
              /> 
              <TextField
                label='Firstname'
                placeholder={'Firstname'}
                value={this.state.firstname}
                onChangeText={(text) => this.setState({firstname : text})}
              />  
              <TextField
                label='Lastname'
                placeholder={'Lastname'}
                value={this.state.lastname}
                onChangeText={(text) => this.setState({lastname : text})}
              /> 
              <TextField
                label='MI'
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
              <TextField
                label='Phone'
                placeholder={'Phone'}
                value={this.state.phone}
                onChangeText={(text) => this.setState({phone : text})}
              /> 
              <TextField
                label='Address1'
                placeholder={'Address1'}
                value={this.state.address1}
                onChangeText={(text) => this.setState({address1 : text})}
              /> 
              <TextField
                label='Address2'
                placeholder={'Address2'}
                value={this.state.address2}
                onChangeText={(text) => this.setState({address2 : text})}
              /> 
              <TextField
                label='DOB'
                placeholder={'DOB'}
                value={this.state.dob}
                onChangeText={(text) => this.setState({dob : text})}
              /> 
              <TextField
                label='Gender'
                placeholder={'Gender'}
                value={this.state.gender}
                onChangeText={(text) => this.setState({gender : text})}
              /> 
              <TextField
                label='State'
                placeholder={'State'}
                value={this.state.state}
                onChangeText={(text) => this.setState({state : text})}
              /> 
              <TextField
                label='City'
                placeholder={'City'}
                value={this.state.city}
                onChangeText={(text) => this.setState({city : text})}
              /> 
              <TextField
                label='Zipcode'
                placeholder={'Zipcode'}
                value={this.state.zipcode && String(this.state.zipcode)}
                onChangeText={(text) => this.setState({zipcode : text})}
              /> 
              <TextField
                label='Servicecode'
                placeholder={'Servicecode'}
                value={this.state.servicecode}
                onChangeText={(text) => this.setState({servicecode : text})}
              /> 
              <Button title= "Submit" onPress={this.handleSubmit} />
            </ScrollView>
          </ScrollView>
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
    textAlign:'center'
  },
  textinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500'
  }
});