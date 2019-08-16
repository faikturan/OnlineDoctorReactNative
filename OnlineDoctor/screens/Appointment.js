import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/AntDesign';
import FirebaseConfig from './FirebaseConfig';
import firebase from 'firebase';

const { width, height } = Dimensions.get('window')

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
};

class Appointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUpcomingListVisible : true,
      isPastListVisible : false,
    }
  }

  upcomingListHideAndShow = () => {
    this.setState(previousState => ({ 
      isUpcomingListVisible: !previousState.isUpcomingListVisible,
      isPastListVisible: !previousState.isPastListVisible,
    }))
  };

  pastListHideAndShow = () => {
    this.setState(previousState => ({ 
      isPastListVisible: !previousState.isPastListVisible, 
      isUpcomingListVisible: !previousState.isUpcomingListVisible,
    }))
  };

  componentWillMount() {
    var email =firebase.auth().currentUser.email;
  }


  render() {
    return (
      <SafeAreaView style={{ flex:1 }}>
        <View style={{ height: this.startHeaderHeight }}>
          <View style={ styles.header}>
              <Icon name="ios-chatboxes" size={25} />
              <Text style={styles.homeText}>
                  Appointment
              </Text>
              <Iconn 
                name="pluscircleo" 
                size={25} 
                onPress ={() => this.props.navigation.navigate('DoctorList')}
              />
          </View>
        </View>
        <View style={{ flex:1 }}>
          <View style={styles.buttonlayout}>
            <Button style={styles.button}
              title='Upcoming'
              onPress={this.upcomingListHideAndShow}
            />
            <Button style={styles.button}
              title='Past'
              onPress={this.pastListHideAndShow}
            />
          </View>
        </View>
        <View style={{ flex:1 }}>
          { this.state.isUpcomingListVisible ? 
            <View hide={this.state.isUpcomingListVisible}>
              <Text>
                Upcoming
              </Text>
            </View>
            : null 
          }
          { this.state.isPastListVisible ? 
          <View hide={this.state.isPastListVisible}>
            <Text>
              Past
            </Text>
          </View>
          : null
          }
          
        </View>
      </SafeAreaView>
    )
  }
}
export default Appointment;

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
    buttonlayout: {
      flexDirection: 'row'
    },
    button: {
      width: '50%'
    }
  });
  