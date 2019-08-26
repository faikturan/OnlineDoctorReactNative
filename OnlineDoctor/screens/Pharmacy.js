import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Platform, Image, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Card, CardItem, Left, Thumbnail, Title, Subtitle, Right } from 'native-base';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

class Pharmacy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat : 0,
      long : 0,
      error : null,
      places: null,
      arrData : [],
      selected : 0
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
        var items = [];
        res.results.map(( element, i ) => {
          arrayMarkers.push(
            <Marker
              key={i}
              coordinate={{
                latitude: element.geometry.location.lat,
                longitude: element.geometry.location.lng
              }}
              onPress={() => this.setState({ selected : i })}
            >
              <Callout>
                <Card>
                  <Left>
                    <View style={{ alignItems:'flex-start'}}>
                      <Title style={{padding :5}}>{element.name}</Title>
                      {/* <Title style={{padding :5}}>{element.opening_hours}</Title> */}
                    </View>
                  </Left>
                </Card>
              </Callout>
            </Marker>
          );
          items.push({
            latitude: element.geometry.location.lat,
            longitude: element.geometry.location.lng,
            name: element.name,
            rating: element.rating,
            image : 'data:image/png;base64,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'
          });
        })
        this.setState({ places: arrayMarkers });
        this.setState({ arrData : items });
      })
  }

  getUrlWithParameters(lat, long, radius, type, API){
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&type=${type}`;
    const key = `&key=${API}`;
    return `${url}${location}${typeData}${key}`;
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.setState({ selected : this.keyExtractor.index })}> 
      <Card>
        <CardItem>
          <Left>
          <Thumbnail
            source={{uri : item.image}}
            style={{ width:100, height:80, borderRadius:10, marginRight:5}}
          />
          <View style={{ alignItems:'flex-start'}}>
              <Title style={{padding :5}}>{item.name}</Title>
              <View style={styles.rating}>
                <Icon name="star" color="#FFBA5A" size={12} />
                <Text style={{ marginLeft: 4, color: '#FFBA5A' }}>{item.rating}</Text>
              </View>
          </View>
          </Left>
        </CardItem>
      </Card>
    </TouchableOpacity>
  )

  
  render() {
    return (
      <View style={{ flex : 1 }}>
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
        <View style={ styles.ListViewContainer }>
          <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.arrData}
              renderItem={this.renderItem}
          />
        </View>
      </View>
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
      flex:0.7
    },
    ListViewContainer: {
      flex:0.3, 
      width: width, 
      padding:20
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 14,
    },
  });
  