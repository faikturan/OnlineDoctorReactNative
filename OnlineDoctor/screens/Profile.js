import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Iconn from 'react-native-vector-icons/Ionicons';

import ProfileItem from './components/Profile/ProfileItem';

const { height, width } = Dimensions.get('window');

class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 8/9, backgroundColor: '#92DFF3' }}>
              <View style={{ height: this.startHeaderHeight }}>
                  <View style={{ flexDirection: 'row', padding: 10, marginHorizontal: 20,
                    elevation: 1, marginTop: Platform.OS == 'android' ? 30 : null
                    }}>
                      <Iconn name="ios-chatboxes" size={24} />
                      <Text style={{ fontSize: 22, fontWeight: '500', paddingLeft: 100 }}>
                          Profile
                      </Text>
                  </View>
              </View>
              <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <ProfileItem width={width}
                  name="Account" 
                />
                <ProfileItem width={width}
                  name="Family Member" 
                />
                <ProfileItem width={width}
                  name="Call Histroy" 
                />
                <ProfileItem width={width}
                  name="Medication" 
                />
                <ProfileItem width={width}
                  name="Lab Report" 
                />
                <ProfileItem width={width}
                  name="Payment" 
                />
                <ProfileItem width={width}
                  name="Vaccination" 
                />
                <ProfileItem width={width}
                  name="Monitor" 
                />
                <ProfileItem width={width}
                  name="Referral" 
                />
              </View>
          </View>
          <View style={{ flex: 1/9, backgroundColor: 'white'}}>

          </View>
      </SafeAreaView>
    )
  }
}
export default Profile;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  