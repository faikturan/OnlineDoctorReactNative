import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileItem extends Component {
  render() {
    return (
      <View style={{ width: this.props.width / 3 - 30, height: this.props.width / 2 - 30 }}>
        <View style= {{ flex: 1 }}>
          <Image
            style={{ flex: 1, width: null, height: null, resizeMode: 'cover'}}
            source={ require('../../../assets/person-icon.png')} />
        </View>
        <View style={{ flex:1, alignItems:'flex-start', paddingLeft: 10, justifyContent: 'space-evenly' }}>
          <Text style={{ fontSize: 14}}>
            {this.props.name}
          </Text>
        </View>
    </View>
    );
  }
}
export default ProfileItem;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  