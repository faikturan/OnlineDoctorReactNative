import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListItem } from 'react-native-elements';
import FirebaseConfig from '../FirebaseConfig';
import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
};

const { width } = Dimensions.get('window')

const rootRef = firebase.database().ref();
const accountRef = rootRef.child('Provider');
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
            timeslot : [],
        };
    }

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
        var array = [];
        array.push({
            fn : this.props.navigation.state.params.data.firstname,
            ln : this.props.navigation.state.params.data.lastname,
        });
        this.setState ({
            timeslot : array
        });
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MakeAppointment', { fn: this.state.firstname, ln: this.state.lastname } )}> 
            <ListItem
                title={ 'Check Availability' }
                titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: "center" }}
                chevronColor="black"
                chevron
            />
        </TouchableOpacity>
    )

    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
                <ScrollView scrollEventThrottle={16}>
                    <ScrollView vertical={true}
                        showsVerticalScrollIndicator={true}>
                        <View style={{ flex:1 }}>
                            <View style={styles.Container}>
                                <Image
                                    style={{width: 100, height: 100}}
                                    source= {{ uri: this.state.images }}
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
                            <View style={styles.gap}>
                            </View>
                            <View style={{ flex:1/2 }}>
                                <View style={styles.backgound_header_container}>
                                    <Text style={styles.backgound_header_text}>
                                        BACKGOUND
                                    </Text>
                                </View>
                                <View style={styles.backgound_container}>
                                    <Text style={styles.backgound_text}>
                                        {this.state.background1}
                                    </Text>
                                    <Text style={styles.backgound_text}>
                                        {this.state.background2}
                                    </Text>
                                    <Text style={styles.backgound_text}>
                                        {this.state.background3}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
                <View style={styles.bottomView}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.timeslot}
                        renderItem={this.renderItem}
                    />
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
        paddingBottom : 10,
    },
    gap : {
        height : 10,
        backgroundColor : 'grey'
    },
    backgound_header_container : {
        height : 50,
        padding : 10,
        backgroundColor : 'white',
        borderBottomColor : 'grey'
    },
    backgound_header_text : {
        fontSize: 15, 
        fontWeight: '300', 
        paddingLeft : 10,
        paddingTop: 10,
        marginHorizontal: 10,
        color: 'black'
    },
    backgound_container : {
        color : '#92DFF3',
        padding : 10,
    },
    backgound_text : {
        fontSize: 15, 
        fontWeight: '300', 
        paddingLeft : 10,
        paddingTop: 10,
        marginHorizontal: 10,
        color: 'black'
    },
    customBtnBG: {
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30
    },
    bottomView:{
        width: '100%', 
        height: 50, 
        backgroundColor: '#FFFFFF', 
        justifyContent: 'center', 
        position: 'absolute',
        bottom: 25
      },
})