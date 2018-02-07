/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import QuestionScreen from "./windows/POC/app/components/QuestionScreen/QuestionScreenOne";
import {StackNavigator} from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class SignInForm extends Component {
    static navigationOptions = {
        title: "Sign In"
    }

    render() {
        console.log("NAVIGATTIONS")
        const { navigate } = this.props.navigation;

        return (
            <View>
                <TextInput
                    placeholder={'Username or email'}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder={'Password'}
                />
                <Button
                    onPress={() => navigate("Question", {screen: "Screen Two"})}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const AppNavigator =
        StackNavigator(
            {
                Index: { screen: SignInForm },
                Question: { screen: QuestionScreen },
            },
            {
                initialRouteName: 'Index',
                headerMode: 'none'
            }
        )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
