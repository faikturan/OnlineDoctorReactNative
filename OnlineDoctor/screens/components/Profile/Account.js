import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Label, InputAccessoryView, Item, Input } from 'react-native';
import Form from 'react-native-form';
import * as firebase from 'firebase';
import firebaseConfig from '../../firebaseconfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Account extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
    this.itemsRef = firebase.database().ref().child('accountInfo')
  }

  pushToFirebase() {
    let formValues = this.refs.personalInfoForm.getValues()
    this.itemsRef.push(formValues)
  }

  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.title}>
          Personal Information
        </Text>
        <Form ref="personalInfoForm" style={styles.form} >
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>First name</Label>
            <Input style={{marginLeft: 25}} name="firstName" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Last name</Label>
            <Input style={{marginLeft: 25}} name="lastName" type="TextInput" />
          </Item>
          <Button Block primary onPress{() => this.pushToFirebase()} style={styles.button} />
          <Button title="go back to login screen" 
          onPress={() => this.props.navigation.navigate('Profile')}>

          </Button>
        </Form>
      </View>
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
    title: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    text: {
      textAlign: 'left',
      color: '#333333',
      marginBottom: 5,
    },
    form: {
      width: '80%'
    },
    button: {
      margin: 10
    }
  });
  