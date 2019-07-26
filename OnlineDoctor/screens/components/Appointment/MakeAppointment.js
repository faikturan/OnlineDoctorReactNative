import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Animbutton from './Animbutton';


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

const jsonData = { "slots" : {
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
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
        this.bookingDate = '';
    }

    onDayPress(day) {
        this.setState({
            selected : day.dateString,
            bookingDate : day
        });
        // this.props.navigation.navigate('Slot', { bookingDate : day });
    }

    _bookSlot(status, key, value) {
        const month = this.state.bookingDate.month
        const date = this.state.bookingDate.day
        const email = firebase.auth().currentUser
        
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params.timeslot);
    }

    render() {
        let _this = this
        const slots = jsonData.slots
        const slotsarr = Object.keys(slots).map( function(k) {
        return (  <View key={k} style={{margin:5}}>
                    <Animbutton countCheck={0} onColor={"green"} effect={"pulse"} _onPress={(status) => _this._bookSlot(status,k,slots[k]) } text={slots[k]} />
                    </View>)
        });
        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ height: this.startHeaderHeight }}>
                    <View style={ styles.header}>
                        <Icon 
                        name="ios-arrow-back" 
                        size={25}
                        onPress ={() => this.props.navigation.navigate('Appointment')}
                        />
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.headertext}>Make Appointment</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex:1 }}>
                    <Calendar
                        style={styles.calendar}
                        horizontal = {true}
                        pagingEnabled = {true}
                        CalendarWidth={320}
                        current={this.state.default}
                        onDayPress= { this.onDayPress }
                        hideExtraDays
                        markedDates = {{[this.state.selected]: {selected : true }}}
                        theme={{
                            selectedDayBackgroundColor : 'green',
                            todayTextColor: 'green',
                            arrowColor: 'green'
                        }}
                    />
                </View>
                <View style={{ flex:1 }}>
                    <ScrollView scrollEventThrottle={16}>
                        <ScrollView vertical={true}
                        showsVerticalScrollIndicator={true}>
                            { slotsarr }
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