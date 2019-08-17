import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListItem } from 'react-native-elements';
import FirebaseConfig from '../../FirebaseConfig';
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
        width : width
    }
})