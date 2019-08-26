import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Category from './Home/Category';

const { width } = Dimensions.get('window');

class Home extends Component {

    componentDidMount(){
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
                  <View style={ styles.header}>
                      <Icon name="ios-chatboxes" size={25} />
                      <View style={{ flex: 1, paddingRight: 10 }}>
                        <Text style={styles.headertext}>
                            Home
                        </Text>
                      </View>
                  </View>
              </View>
               {/* scrollEventThrottle: This controls how often the scroll event will 
               be fired while scrolling (as a time interval in ms). */}
              <ScrollView scrollEventThrottle={16}>
                  <View style={{ height: 250, marginTop: 50, width: width - 20 }}>
                      <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                          <Category imageUri={require('../assets/1.jpg')}/>
                          <Category imageUri={require('../assets/2.png')}/>
                          <Category imageUri={require('../assets/3.png')}/>
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
    header: {
        flexDirection: 'row', 
        padding: 10, 
        marginHorizontal: 10, 
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
  });
  