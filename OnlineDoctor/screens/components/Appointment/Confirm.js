import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Iconn from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import FirebaseConfig from '../../FirebaseConfig';
import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
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
        var first_name = this.state.patient_firstname;
        var last_name = this.state.patient_lastname;
        var name = first_name.toLowerCase()+last_name.toLowerCase();
        var date_selected = this.state.date;
        var slot_selected = this.state.time;
        console.log('123123123: ' + 'Appointment/yuyangchen/' + date_selected);
        var query = firebase.database().ref('Appointment/yuyangchen/' + date_selected);
        query.update({
            patient_firstname : 'Yuyang',
            patient_lastname : 'Chen',
            patient_email : patient_email,
            provider_firstname: 'Emma',
            provider_lastname: 'Jefferson',
            date : this.state.date,
            timeslot : this.state.time,
            status: this.state.status
          }).then(() => {
          alert('Appointment booking successfully!');
        }).catch(error => this.setState({errorMessage : error.message}));
        this.props.navigation.navigate('Appointment');
    }

    render() {
        console.log('444: ' + this.state.patient_firstname);
        console.log('555: ' + this.state.patient_lastname);
        return (
            <SafeAreaView style={{ flex:1 }}>
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