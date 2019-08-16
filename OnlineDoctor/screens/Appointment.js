import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/AntDesign';
import Iconnn from 'react-native-vector-icons/FontAwesome';
import FirebaseConfig from './FirebaseConfig';
import firebase from 'firebase';
import { Card, CardItem, Left, Thumbnail, Title, Subtitle, Right } from 'native-base';

const { width, height } = Dimensions.get('window')

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
};

const rootRef = firebase.database().ref();

class Appointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUpcomingListVisible : true,
      isPastListVisible : false,
      arrData : [],
      user_email : '',
      user_firstname : '',
      user_lastname : '',
      username: '',
    }
  }

  upcomingListHideAndShow = () => {
    this.setState(previousState => ({ 
      isUpcomingListVisible: true,
      isPastListVisible: false,
    }));
    var query = rootRef.child('Appointment/'+ this.state.username.toLowerCase());
    query.once('value', (snapshot) => {
      var items = [];
      snapshot.forEach((child) => {
        items.push({
          date : child.val().date,
          patient_firstname : child.val().patient_firstname,
          patient_lastname : child.val().patient_lastname,
          provider_firstname : child.val().provider_firstname,
          provider_lastname : child.val().provider_lastname,
          status : child.val().status,
          timeslot : child.val().timeslot,
          image : child.val().image,
        });
      });
      this.setState({ arrData : items });
    });
  };

  pastListHideAndShow = () => {
    this.setState(previousState => ({ 
      isPastListVisible: true, 
      isUpcomingListVisible: false,
    }))
  };

  componentDidMount() {
    var email =firebase.auth().currentUser.email;
    this.setState({ user_email : email });
    var query = rootRef.child('AccountProfile').orderByChild('email').equalTo(email);
    query.once('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.setState({
          user_firstname : child.val().firstname,
          user_lastname : child.val().lastname,
          username : child.val().firstname + child.val().lastname,
        });
      });
    }).catch((error) => {
      console.log(error);
    });
    var day = new Date().getDate();
    if(day < 10){
      day = '0' + day;
    }
    var month = new Date().getMonth() + 1;
    if(month < 10){
      month = '0' + month;
    }
    var year = new Date().getFullYear();
    var date = year + '-' + month + '-' + day;
  };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('AppointmentDetail', { data: item } )}> 
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{uri : item.image}}
                style={{ width:100, height:80, borderRadius:10, marginRight:5}}
              />
              <View style={{ alignItems:'flex-start', top: -10}}>
                <Title style={{padding :5, paddingTop : 15}}>{item.date}</Title>
                <Title style={{padding :5}}>{item.timeslot}</Title>
                <Title style={{padding :5}}>{item.provider_firstname} {item.provider_lastname}</Title>
                <Subtitle style={{padding :5}}>{item.status}</Subtitle>
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
        <View style={styles.Container}>
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
          { this.state.isUpcomingListVisible ? 
            <View style={ styles.ListViewContainer } hide={this.state.isUpcomingListVisible}>
              <FlatList
                  keyExtractor={this.keyExtractor}
                  data={this.state.arrData}
                  renderItem={this.renderItem}
              />
            </View>
            : null 
          }
          { this.state.isPastListVisible ? 
            <View style={ styles.ListViewContainer } hide={this.state.isUpcomingListVisible}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.arrData}
                renderItem={this.renderItem}
              />
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
      flexDirection: 'row',
      height: 40,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    button: {
      width: '50%'
    },
    ListViewContainer: {
      flex:1, 
      width: width, 
      padding:20
    }
  });
  