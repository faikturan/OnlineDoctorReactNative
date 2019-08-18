import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


import FirebaseConfig from '../../FirebaseConfig';
import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';

if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
};

export default class BasicInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            phone:'',
            gender:'',
        }
    }

    componentDidMount(){

    }
    render() {
        return(
            <SafeAreaView style={styles.Container}>
                <Text>
                    Please tell us some basic info to complete your profile
                </Text>
                <TextInput
                    placeholder= 'First Name'
                    onChangeText={(text) => this.setState({firstname : text})}
                />
                <TextInput
                    placeholder= 'Last Name'
                    onChangeText={(text) => this.setState({firstname : text})}
                />
                <TextInput
                    placeholder= 'Phone Number'
                    onChangeText={(text) => this.setState({firstname : text})}
                />
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
})