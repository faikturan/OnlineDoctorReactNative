import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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

export default class MakeAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false
        };
    }

    render() {
        return (
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
                <View style={{ flex:1 }}>
                    
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
textinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
},
});