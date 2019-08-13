import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';
import Iconn from 'react-native-vector-icons/AntDesign';
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

const rootRef = firebase.database().ref();
const accountRef = rootRef.child('Appointment');

const { width } = Dimensions.get('window');

export default class MakeAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patient_firstname : '',
            patient_lastname : '',
            provider_firstname : '',
            provider_lastname : '',
            date : '',
            time : '',
            status: 'confirmed'
        };
    }

    componentDidMount() {
        var email = firebase.auth().currentUser.email;
        var query = accountRef.orderByChild('email').equalTo(email);
        query.once('value', (snapshot) => {
        snapshot.forEach((child) => {
            this.setState({
                patient_firstname : child.val().firstname,
                patient_lastname : child.val().lastname,
            })
            console.log(this.state.patient_firstname);
            console.log(this.state.patient_lastname);
        });
        }).catch((error) => {
        console.log(error);
        });
        this.setState ({
            provider_firstname : this.props.navigation.state.params.data.firstname,
            provider_lastname : this.props.navigation.state.params.data.lastname,
            date : this.props.navigation.state.params.data.date,
            time : this.props.navigation.state.params.data.slot,
        });
    }

    handleConfirm = () => {
        var patient_email = firebase.auth().currentUser.email;
        var root = firebase.database().ref();
        var first_name = this.state.provider_firstname;
        var last_name = this.state.provider_lastname;
        var name = first_name+last_name;
        var date_selected = this.state.date;
        var slot_selected = this.state.time;
        console.log('Appointment/' + name + '/' + date_selected);
        var query = firebase.database().ref('Appointment/' + name + '/' + date_selected);
        query.update({
            patient_firstname : this.state.patient_firstname,
            patient_lastname : this.state.patient_lastname,
            patient_email : patient_email,
            date : this.state.date,
            timeslot : this.state.time,
            status: this.state.status
          }).then(() => {
          alert('Appointment booking successfully!');
        }).catch(error => this.setState({errorMessage : error.message}));
    }

    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ height: this.startHeaderHeight }}>
                    <View style={ styles.header}>
                        <Icon 
                        name="ios-arrow-back" 
                        size={25}
                        onPress ={() => this.props.navigation.navigate('MakeAppointment')}
                        />
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.headertext}>Appointment</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex:1 }}>
                    <ScrollView scrollEventThrottle={16}>
                        <ScrollView vertical={true}
                        showsVerticalScrollIndicator={true}>
                            <Text>Thank you very much Mr/Mrs. {this.state.patient_firstname} {this.state.patient_lastname} for booking Appointment for Dr. {this.state.provider_firstname} {this.state.provider_lastname} on {this.state.date} at {this.state.time}</Text>
                            <Button title= "Confirm" onPress={this.handleConfirm} />
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
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height : 350
    },
});