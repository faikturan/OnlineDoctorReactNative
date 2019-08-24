import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Platform, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

class Pharmacy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat : 0,
      long : 0,
      error : null,
      places: null
    }
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setState({
          lat,
          long,
          error : null
        })
        this.getPlaces();
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
    );
  }

  getPlaces(){
    const url = this.getUrlWithParameters(this.state.lat, this.state.long, 4000, 'pharmacy', 'AIzaSyDxTBLrmNG5wFleo5sWk8PGK4uHrEIIvCs');
    console.log('123: ' + url);
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        const arrayMarkers = [];
        res.results.map(( element, i ) => {
          arrayMarkers.push(
            <Marker
              key={i}
              coordinate={{
                latitude: element.geometry.location.lat,
                longitude: element.geometry.location.lng
              }}
            >
              <Callout>
                <View>
                  <Text>
                    {element.name}
                  </Text>
                </View>
              </Callout>
            </Marker>
          )
        })
        this.setState({ places: arrayMarkers });
      })
  }

  getUrlWithParameters(lat, long, radius, type, API){
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&type=${type}`;
    const key = `&key=${API}`;
    return `${url}${location}${typeData}${key}`;
  }
  
  render() {
    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: this.state.lat,
          longitude: this.state.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {this.state.places}
      </MapView>
    );
  }
}
export default Pharmacy;

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      flex:1
    },
  });
  