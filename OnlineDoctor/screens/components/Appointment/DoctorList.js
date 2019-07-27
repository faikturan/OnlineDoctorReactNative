import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListItem } from 'react-native-elements';
const { width } = Dimensions.get('window');

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
// const providerRef = rootRef.child('Provider');

export default class DoctorList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrData : []
        };
    }

    componentDidMount () {
        var query = rootRef.child('Provider');
        query.once('value', (snapshot) => {
            var items = [];
            snapshot.forEach((child) => {
                items.push({
                    firstname : child.val().firstname,
                    lastname : child.val().lastname,
                    mi : child.val().mi,
                    gender : child.val().gender,
                    phone : child.val().phone,
                    provider : child.val().provider,
                    email : child.val().email,
                    specialty : child.val().specialty,
                    language : child.val().language,
                    title : child.val().title,
                    image : child.val().image,
                    background1: child.val().background1,
                    background2: child.val().background2,
                    background3: child.val().background3,
                    address1: child.val().address1,
                    address2: child.val().address2,
                    city: child.val().city,
                    state: child.val().state,
                });
            });
            this.setState({ arrData : items });
            console.log(this.state.arrData);
        });
    };

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DoctorDetail', { data: item } )}> 
            <ListItem style={{flex:1, height:100}}
                leftAvatar={{ rounded: true, source: { uri: item.image }}}
                title={ item.title + ' ' + item.firstname + ' ' + item.lastname }
                subtitle= { item.specialty }
                subtitleStyle= {{fontSize: 20}}
                titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}
                chevronColor="black"
                chevron
            />
        </TouchableOpacity>
    )

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
                            <Text style={styles.headertext}>Select a doctor</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex:1 }}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.arrData}
                        renderItem={this.renderItem}
                    />
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
})