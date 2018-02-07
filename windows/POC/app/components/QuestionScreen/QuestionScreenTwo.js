import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Picker
} from 'react-native';
import { CheckBox, Card, Button } from 'react-native-elements'
import QuestionScreenFour from "./QuestionScreenFour";

export default class QuestionScreenTwo extends Component<{}> {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props){
        super(props)
        this.state = {
            checked: ''
        }

    }
    updateUser(){
        this.setState({ user: user })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.containers}>
                <View style={styles.formContainer}>
                    <Card title="Do you have pets or children in your home?" titleStyle={styles.formlabels}>
                        <CheckBox
                            containerStyle = {styles.checkbox}
                            textStyle={styles.checktext}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            title='Childrens'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            textStyle={styles.checktext}
                            containerStyle = {styles.checkbox}
                            title='Pets'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            textStyle={styles.checktext}
                            containerStyle = {styles.checkbox}
                            title='None'
                            checked={this.state.checked}
                        />
                        <Button
                            borderRadius={20}
                            buttonStyle={styles.loginBtn}
                            fontSize={14}
                            fontWeight = {'500'}
                            title='Next'
                            onPress={() => navigate("QuestionScreenThree", {screen: "Screen Three"})}/>
                    </Card>
                </View>
            </View>


        );
    }
}


const styles = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#484847',
        alignItems: 'center',

    },
    formContainer: {
        backgroundColor: 'white',
        flex: 1,
        width: 340,
        justifyContent: 'center',
    },
    makecenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 22,
        fontWeight: "700",
        textAlign: 'center',
        margin: 10,
        color: "black"
    },
    formlabels: {
        fontSize: 16,
        marginBottom:12,
        fontWeight: '700'
    },
    forminputs: {
        height: 40,
        marginLeft:5,
        paddingTop: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    checkbox: {
        borderWidth: 0,
        backgroundColor: '#ffffff',
        padding: 0,
        paddingLeft:9,
    },
    checktext: {
        fontSize: 14,
    },
    loginBtn: {
        backgroundColor: 'black',
        marginTop: 20
    }
});