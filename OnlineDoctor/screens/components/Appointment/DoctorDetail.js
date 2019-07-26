import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
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

export default class DoctorDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            title: '',
            mi : '',
            gender : '',
            title : '',
            background1 : '',
            background2 : '',
            background3 : '',
            email : '',
            language : '',
            specialty : '',
            address1 : '',
            address2 : '',
            city : '',
            state : '',
            zipcode : '',
            provider : '',
            images : '',
        };
    }

    // getData = () => {
    //     this.setState = {
    //         firstname : this.props.navigation.state.params.data.firstname,
    //         lastname : this.props.navigation.state.params.data.lastname,
    //         mi : this.props.navigation.state.params.data.mi,
    //         gender : this.props.navigation.state.params.data.gender,
    //         title : this.props.navigation.state.params.data.title,
    //         background1 : this.props.navigation.state.params.data.background1,
    //         background2 : this.props.navigation.state.params.data.background2,
    //         background3 : this.props.navigation.state.params.data.background3,
    //         email : this.props.navigation.state.params.data.email,
    //         language : this.props.navigation.state.params.data.language,
    //         specialty : this.props.navigation.state.params.data.specialty,
    //         address1 : this.props.navigation.state.params.data.address1,
    //         address2 : this.props.navigation.state.params.data.address2,
    //         city : this.props.navigation.state.params.data.city,
    //         state : this.props.navigation.state.params.data.state,
    //         zipcode : this.props.navigation.state.params.data.zipcode,
    //         provider : this.props.navigation.state.params.data.provider,
    //     };
    // }

    componentDidMount() {
        this.setState ({
            firstname : this.props.navigation.state.params.data.firstname,
            lastname : this.props.navigation.state.params.data.lastname,
            mi : this.props.navigation.state.params.data.mi,
            gender : this.props.navigation.state.params.data.gender,
            title : this.props.navigation.state.params.data.title,
            background1 : this.props.navigation.state.params.data.background1,
            background2 : this.props.navigation.state.params.data.background2,
            background3 : this.props.navigation.state.params.data.background3,
            email : this.props.navigation.state.params.data.email,
            language : this.props.navigation.state.params.data.language,
            specialty : this.props.navigation.state.params.data.specialty,
            address1 : this.props.navigation.state.params.data.address1,
            address2 : this.props.navigation.state.params.data.address2,
            city : this.props.navigation.state.params.data.city,
            state : this.props.navigation.state.params.data.state,
            zipcode : this.props.navigation.state.params.data.zipcode,
            provider : this.props.navigation.state.params.data.provider,
            images : this.props.navigation.state.params.data.image,
        });
        console.log(this.props.navigation.state.params.data);
    }

    render() {

        console.log(this.state.images);
        console.log(this.state.firstname);
        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ height: this.startHeaderHeight }}>
                    <View style={ styles.header}>
                        <Icon 
                        name="ios-arrow-back" 
                        size={25}
                        onPress ={() => this.props.navigation.navigate('DoctorList')}
                        />
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.headertext}>About {this.state.title} {this.state.firstname} {this.state.lastname}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex:1 }}>
                    <View style={styles.Container}>
                        <Image
                            source= {{ url: this.state.images }}
                        />
                        <Text style={styles.name}>
                            {this.state.title} {this.state.firstname} {this.state.lastname}
                        </Text>
                        <Text style={styles.specialty}>
                            Specialty : {this.state.specialty}
                        </Text>
                        <Text style={styles.language}>
                            (Language : {this.state.language})
                        </Text>
                    </View>
                    <View style={{ flex:1/2 }}>
                        <ScrollView scrollEventThrottle={16}>
                            <ScrollView vertical={true}
                            showsVerticalScrollIndicator={true}>
                                <View style={styles.gap}>

                                </View>
                                <View style={styles.backgound_container}>
                                    <Text style={styles.backgound_text}>
                                        BACKGOUND
                                    </Text>
                                </View>
                            </ScrollView>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
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
    Container : {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex : 1/2
    },
    image : {
        flex: 1, 
        width: null, 
        height: null,
        resizeMode: 'cover'
    },
    name : {
        fontSize: 22, 
        fontWeight: '500', 
        textAlign:'center',
        marginTop: 10,
        paddingTop: 10,
    },
    language :{
        fontSize: 18, 
        fontWeight: '300', 
        textAlign:'center',
        marginTop: 10,
        paddingTop: 10,
    },
    specialty : {
        fontSize: 18, 
        fontWeight: '300', 
        textAlign:'center',
        marginTop: 10,
        paddingTop: 10,
    },
    gap : {
        height : 10,
        backgroundColor : 'grey'
    },
    backgound_container : {
        height : 50,
        padding : 10,
        backgroundColor : 'white',
        borderBottomColor : 'grey'
    },
    backgound_text : {
        fontSize: 15, 
        fontWeight: '300', 
        paddingLeft : 10,
        paddingTop: 10,
        marginHorizontal: 10,
        color: 'black'
    }
})