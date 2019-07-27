import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';


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

export default class MakeAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
        this.bookingDate = '';
        this.state.showTimeslotList = false;
    }

    onDayPress(day) {
        this.setState({
            selected : day.dateString,
            bookingDate : day,
            showTimeslotList: true
        });
        console.log(day)
        // this.props.navigation.navigate('Slot', { bookingDate : day });
    }

    _bookSlot(status, key, value) {
        const month = this.state.bookingDate.month
        const date = this.state.bookingDate.day
        const email = firebase.auth().currentUser 
    }

    // keyExtractor = (item, index) => index.toString()

    // renderItem = ({ item }) => (
    // <ListItem
    //     Component={TouchableScale}
    //     title={item.name}
    //     chevronColor="white"
    //     chevron
    // />
    // )


    componentDidMount() {
        // console.log(this.props.navigation.state.params.timeslot);
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
                        CalendarWidth={width - 10}
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
                            { this.state.isPastListVisible ? 
                                <View hide={this.state.showTimeslotList}>
                                    <Text>
                                    Past
                                    </Text>
                                </View>
                                : null
                            }
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