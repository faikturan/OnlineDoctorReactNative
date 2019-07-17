import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Category extends Component {
  render() {
    return (
        <View style={{ height:250, width:250,
            marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
            <View style={{ flex: 1 }}>
                <Image source={this.props.imageUri} 
                style={{ flex: 1, width: null, height: null,
                    resizeMode: 'cover' }}
                />
            </View>
        </View>
    );
  }
}
export default Category;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  