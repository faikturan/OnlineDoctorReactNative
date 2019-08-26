import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconnn from 'react-native-vector-icons/FontAwesome';
import { Card, CardItem, Left, Thumbnail, Title, Subtitle, Right } from 'native-base';
import FirebaseConfig from '../FirebaseConfig';
import firebase from 'firebase';

const { width } = Dimensions.get('window');

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
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
        });
    };

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DoctorDetail', { data: item } )}> 
            <Card>
                <CardItem>
                    <Left>
                    <Thumbnail
                        source={{uri : item.image}}
                        style={{ width:100, height:80, borderRadius:10, marginRight:5}}
                    />
                    <View style={{ alignItems:'flex-start'}}>
                        <Title style={{padding :5}}>{item.firstname} {item.lastname}</Title>
                        <Title style={{padding :5, paddingTop : 15}}>{item.specialty}</Title>
                        <Title style={{padding :5}}>{item.provider}</Title>
                        <Subtitle style={{padding :5}}>{item.language}</Subtitle>
                    </View>
                    </Left>
                    <Right>
                    <Iconnn name="chevron-right" size={20} style={styles.moreIcon} />
                    </Right>
                </CardItem>
            </Card>
        </TouchableOpacity>
    )

    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={ styles.ListViewContainer }>
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
        width : width
    },
    ListViewContainer: {
        flex:1, 
        width: width, 
        padding:20
    }
})