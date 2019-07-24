import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

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

const { width } = Dimensions.get('window');

const jsonData = { "slot" : {
    "slot1" :   "9:00am to 9:30am",
    "slot2" :   "9:30am to 10:00am",
    "slot3" :   "10:00am to 10:30am",
    "slot4" :   "10:30am to 11:00am",
    "slot5" :   "11:00am to 11:30am",
    "slot6" :   "11:30am to 12:00pm",
    "slot7" :   "12:00pm to 12:30am",
    "slot8" :   "12:30pm to 1:00pm",
    "slot9" :   "1:00pm to 1:30pm",
    "slot10" :  "1:30pm to 2:00pm",
    "slot11" :  "2:00pm to 2:30pm",
    "slot12" :  "2:30pm to 3:00pm",
    "slot13" :  "3:00pm to 3:30pm",
    "slot14" :  "3:30pm to 4:00pm",
    "slot15" :  "4:00pm to 4:30am",
    "slot16" :  "4:30pm to 5:00am",
    "slot17" :  "5:00pm to 5:30am",
    "slot18" :  "5:00pm to 6:00am",
}}
export default class MakeAppointment extends Component {

    constructor(props) {
        this.state = {
            bookingDate : this.props.navigation.state.params.bookingDate
        }
    }

    _bookSlot(status, key, value) {
        const month = this.state.bookingDate.month
        const date = this.state.bookingDate.day
        const email = firebase.auth().currentUser
        
    }

    render () {
        return(
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ height: this.startHeaderHeight }}>
                    <View style={ styles.header}>
                        <Icon 
                        name="ios-arrow-back" 
                        size={25}
                        onPress ={() => this.props.navigation.navigate('Appointment')}
                        />
                        <Text style={styles.headertext}>Make Appointment</Text>
                    </View>
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
        width: '75%', 
        justifyContent: 'space-between'
    },
});