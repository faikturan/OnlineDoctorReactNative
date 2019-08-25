import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Iconn from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import FirebaseConfig from '../FirebaseConfig';
import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
};

const rootRef = firebase.database().ref();
const accountRef = rootRef.child('AccountProfile');

const { width } = Dimensions.get('window');

export default class MakeAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patient_firstname : '',
            patient_lastname : '',
            provider_firstname: '',
            provider_lastname : '',
            provider_firstname_lc : '',
            provider_lastname_lc : '',
            date : '',
            time : '',
            status: 'confirmed',
            image : ''
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
            provider_firstname_lc : this.props.navigation.state.params.data.firstname,
            provider_lastname_lc : this.props.navigation.state.params.data.lastname,
            date : this.props.navigation.state.params.data.date,
            time : this.props.navigation.state.params.data.slot,
            provider_firstname : this.state.provider_firstname_lc.charAt(0).toUpperCase() + this.state.provider_firstname_lc.slice(1),
            provider_lastname : this.state.provider_lastname_lc.charAt(0).toUpperCase() + this.state.provider_lastname_lc.slice(1)
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
        var query = firebase.database().ref('Appointment/yuyangchen/' + date_selected);
        query.update({
            patient_firstname : this.state.patient_firstname,
            patient_lastname : this.state.patient_lastname,
            patient_email : patient_email,
            provider_firstname: this.state.provider_firstname_lc.charAt(0).toUpperCase() + this.state.provider_firstname_lc.slice(1),
            provider_lastname: this.state.provider_lastname_lc.charAt(0).toUpperCase() + this.state.provider_lastname_lc.slice(1),
            date : this.state.date,
            timeslot : this.state.time,
            status: this.state.status
          }).then(() => {
          alert('Appointment booking successfully!');
        }).catch(error => this.setState({errorMessage : error.message}));
        this.props.navigation.navigate('Appointment');
    }

    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ flex:1 }}>
                    <ScrollView scrollEventThrottle={16}>
                        <ScrollView vertical={true}
                        showsVerticalScrollIndicator={true}>
                            <Text>Thank you very much Mr/Mrs. {this.state.patient_firstname} {this.state.patient_lastname} for booking Appointment for Dr. {this.state.provider_firstname_lc.charAt(0).toUpperCase() + this.state.provider_firstname_lc.slice(1)} {this.state.provider_lastname_lc.charAt(0).toUpperCase() + this.state.provider_lastname_lc.slice(1)} on {this.state.date} at {this.state.time}</Text>
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