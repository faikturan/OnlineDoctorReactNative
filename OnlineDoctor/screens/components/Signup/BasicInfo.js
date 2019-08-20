import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Form, Item, Picker, Label, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


import FirebaseConfig from '../../FirebaseConfig';
import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';

if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
};

const { width: WIDTH } = Dimensions.get('window')

export default class BasicInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            phone:'',
            gender:'',
        }
    }

    onValueChange1(value: string) {
        this.setState({
            firstname: value
        });
    }

    onValueChange2(value: string) {
        this.setState({
            lastname: value
        });
    }

    onValueChange3(value: string) {
        this.setState({
            phone: value
        });
    }

    onValueChange4(value: string) {
        this.setState({
            gender: value
        });
    }

    componentDidMount(){

    }
    render() {
        return(
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>First Name</Label>
                            <Input 
                                onValueChange={this.onValueChange1.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Last Name</Label>
                            <Input
                             onValueChange={this.onValueChange2.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Phone Number</Label>
                            <Input
                             onValueChange={this.onValueChange3.bind(this)}
                            />
                        </Item>
                        <Item picker>
                            <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: WIDTH }}
                            placeholder="Gender"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.gender}
                            onValueChange={this.onValueChange4.bind(this)}
                            >
                            <Picker.Item label="Male" value="key0" />
                            <Picker.Item label="Female" value="key1" />
                            <Picker.Item label="Other" value="key2" />
                            </Picker>
                        </Item>
                    </Form>
                </Content>
            </Container>  
        )
    }
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})