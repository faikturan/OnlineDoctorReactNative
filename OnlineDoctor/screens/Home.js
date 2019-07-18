import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/Home/Category';


class Home extends Component {

    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

  render() {
    return (
        // SafeAreaView: SafeAreaView renders nested content and automatically 
        // applies paddings to reflect the portion of the view that is not 
        // covered by navigation bars, tab bars, toolbars, and other ancestor views.
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 2/3, backgroundColor: '#92DFF3' }}>
              <View style={{ height: this.startHeaderHeight }}>
                  <View style={{ flexDirection: 'row', padding: 10, marginHorizontal: 20,
                    elevation: 1, marginTop: Platform.OS == 'android' ? 30 : null
                    }}>
                      <Icon name="ios-chatboxes" size={24} />
                      <Text style={{ fontSize: 22, fontWeight: '500', paddingLeft: 100 }}>
                          Home
                      </Text>
                  </View>
              </View>
               {/* scrollEventThrottle: This controls how often the scroll event will 
               be fired while scrolling (as a time interval in ms). */}
              <ScrollView scrollEventThrottle={16}>
                  <View style={{ height: 250, marginTop: 50 }}>
                      <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                          <Category imageUri={require('../assets/home.jpg')}/>
                          <Category imageUri={require('../assets/restaurant.jpg')}/>
                          <Category imageUri={require('../assets/experiences.jpg')}/>
                      </ScrollView>
                  </View>
              </ScrollView>
          </View>
          <View style={{ flex: 1/3, backgroundColor: 'white'}}>

          </View>
      </SafeAreaView>
    )
  }
}
export default Home;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  