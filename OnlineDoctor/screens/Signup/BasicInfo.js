import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Left, Right, Body, Segment, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FirebaseConfig from '../FirebaseConfig';
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
            genderSelected : 1
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
                        <Item>
                            <Segment>
                                <Button 
                                    first active={this.state.genderSelected === 1} 
                                    style={styles.segmentButton}
                                    onPress={() => this.setState({ genderSelected: 1 })}
                                >
                                    <Text>Male</Text>
                                </Button>
                                <Button 
                                    active={this.state.genderSelected === 2} 
                                    style={styles.segmentButton}
                                    onPress={() => this.setState({ genderSelected: 2 })}
                                >
                                    <Text>Female</Text>
                                </Button>
                                <Button 
                                    last active={this.state.genderSelected === 3} 
                                    style={styles.segmentButton}
                                    onPress={() => this.setState({ genderSelected: 3 })}
                                >
                                    <Text>Others</Text>
                                </Button>
                            </Segment>
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
    segmentButton: {
      paddingLeft: 0,
      paddingRight: 0,
      width: WIDTH/3,
      alignItems: 'center',
      justifyContent: 'center',
    }
})