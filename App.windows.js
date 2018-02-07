/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import QuestionScreenOne from "./windows/POC/app/components/QuestionScreen/QuestionScreenOne";
import {StackNavigator} from "react-navigation";
import { FormLabel, FormInput, FormValidationMessage, Button, Avatar, CheckBox } from 'react-native-elements'

import {
    View,
    Text, StyleSheet
} from 'react-native';
import QuestionScreenTwo from "./windows/POC/app/components/QuestionScreen/QuestionScreenTwo";
import QuestionScreenThree from "./windows/POC/app/components/QuestionScreen/QuestionScreenThree";
import QuestionScreenFour from "./windows/POC/app/components/QuestionScreen/QuestionScreenFour";

class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: "",
            email: ''
        }
    }
    static navigationOptions = {
        title: "Sign In",
    }
    someFunction(e){
        this.setState({
            email: e.target.value
        })
    }
    render() {
        console.log("NAVIGATTIONS")
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>


                <View style={styles.formContainer}>
                  {/*  <Avatar
                        containerStyle={styles.Avatar}
                        large
                        title="ZE"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />*/}
                    <View style={styles.width}>
                    <Text style={styles.welcome}>Welcome Back, LOGIN</Text>

                    <FormLabel labelStyle={styles.formlabels}>Email</FormLabel>

                    <FormInput inputStyle={styles.forminputs} onChangeText={() => this.someFunction}/>

                    <FormLabel labelStyle={styles.formlabels}>Password</FormLabel>
                    <FormInput inputStyle={styles.forminputs}/>

                    <CheckBox
                        containerStyle = {styles.checkbox}
                        textStyle={styles.checktext}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        title='Remember me'
                        checked={this.state.checked}
                    />
                    <Button
                        borderRadius={20}
                        fontSize={18}
                        fontWeight = {'700'}
                        buttonStyle={styles.loginBtn}
                        title='Login'
                        onPress={() => navigate("QuestionScreenOne", {screen: "Screen Two"})}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#141414',
        alignItems: 'center',

    },
    formContainer: {
      backgroundColor: 'white',
        flex: 1,
        maxWidth: 600,
        justifyContent: 'center',
    },
    width: {
      width: 400
    },
    Avatar:{
      backgroundColor:"pink",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

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
        marginBottom:12
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
        fontSize: 12,
        fontWeight: '500'
    },
    loginBtn: {
        backgroundColor: '#1FB6FF',
    }
});

const AppNavigator =
    StackNavigator({
            Index: { screen: SignInForm },
            QuestionScreenOne: { screen: QuestionScreenOne },
            QuestionScreenTwo: { screen: QuestionScreenTwo },
            QuestionScreenThree: { screen: QuestionScreenThree },
            QuestionScreenFour: { screen: QuestionScreenFour },
        },
        {
            initialRouteName: 'Index',
            headerMode: 'none'
        }
    )

export default () => <AppNavigator />;


