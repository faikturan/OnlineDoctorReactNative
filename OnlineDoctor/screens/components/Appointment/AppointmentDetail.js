import React, { Component } from 'react';
import { View, Text, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FirebaseConfig from '../../FirebaseConfig';
import firebase from 'firebase';

const { width, height } = Dimensions.get('window')

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
};

const rootRef = firebase.database().ref();

class AppointmentDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ height: this.startHeaderHeight }}>
                    <View style={ styles.header}>
                        <Icon 
                        name="ios-arrow-back" 
                        size={25}
                        onPress ={() => this.props.navigation.navigate('Appointment')}
                        />
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.headertext}>
                                Appointment Detail
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}


export default AppointmentDetail;

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
      marginHorizontal: 10, 
      justifyContent: 'space-between',
      alignItems: 'center', 
      elevation: 1, 
      marginTop: Platform.OS == 'android' ? 30 : null
    },
    homeText: {
        fontSize: 22, 
        fontWeight: '500', 
        width: '35%', 
        justifyContent: 'space-between'
    },
    headertext: {
        fontSize: 22, 
        fontWeight: '500', 
        textAlign:'center'
    },
});