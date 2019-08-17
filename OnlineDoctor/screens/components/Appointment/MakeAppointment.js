import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Iconn from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { ListItem } from 'react-native-elements';
import FirebaseConfig from '../../FirebaseConfig';
import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
};

const rootRef = firebase.database().ref();

const { width } = Dimensions.get('window');

export default class MakeAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname_selected: '',
            lastname_selected: '',
            array : [],
            showTimeslotList : false
        };
        this.onDayPress = this.onDayPress.bind(this);
        this.bookingDate = '';
    }

    onDayPress(day) {
        this.setState({
            selected : day.dateString,
            bookingDate : day,
            showTimeslotList: true
        });
        var query = rootRef.child('Appointment/' + this.state.firstname_selected + this.state.lastname_selected + '/' + day.dateString);
        query.once('value', (snapshot) => {
            var items = [];
            snapshot.forEach((child) => {
            // items = snapshot.val();
                items.push({
                    name : child.val().name,
                    slot : child.val().slot,
                    date : day.dateString,
                    firstname : this.state.firstname_selected,
                    lastname : this.state.lastname_selected,
                });
            });
            this.setState({ array : items });
            console.log(items);
        });
        // this.props.navigation.navigate('Slot', { bookingDate : day });
    }

    _bookSlot(status, key, value) {
        const month = this.state.bookingDate.month
        const date = this.state.bookingDate.day
        const email = firebase.auth().currentUser 
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Confirm', { data: item })}> 
        <ListItem style={{flex:1, height:100}}
            title={item.slot}
            chevronColor="black"
            chevron
            leftIcon={ 
                <Iconn 
                    name="calendar" 
                    size={25}
                /> 
            }
        />
    </TouchableOpacity>
    )


    componentDidMount() {
        var firstname = this.props.navigation.state.params.fn;
        var firstname_lc = firstname.toLowerCase();
        var lastname = this.props.navigation.state.params.ln;
        var lastname_lc = lastname.toLowerCase();
        this.setState({
            firstname_selected : firstname_lc,
            lastname_selected : lastname_lc
        });
    }

    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
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
                            { this.state.showTimeslotList ? 
                                <View hide={this.state.showTimeslotList}>
                                    <FlatList
                                        keyExtractor={this.keyExtractor}
                                        data={this.state.array}
                                        renderItem={this.renderItem}
                                    />
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