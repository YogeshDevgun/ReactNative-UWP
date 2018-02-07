import React, { Component } from 'react';

import {
    StyleSheet,

    View,
    Picker
} from 'react-native';
import { CheckBox, Card, Button, Slider, Text, FormInput  } from 'react-native-elements'
import QuestionScreenFour from "./QuestionScreenFour";

export default class QuestionScreenThree extends Component<{}> {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props){
        super(props)
        this.state = {
            checked: '',
            value: 0
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
                    <Card title="When did you purchase your home?" titleStyle={styles.formlabels}>
                        <FormInput inputStyle={styles.forminputs}/>
                    </Card>
                    <Card title="How old is your house?" titleStyle={styles.formlabels}>
                        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                            <Slider
                                minimumValue={0}
                                maximumValue = {70}
                                value={this.state.value}
                                onValueChange={(value) => this.setState({value})} />
                            <Text>Value: {this.state.value}</Text>
                        </View>
                    </Card>
                    <Button
                        borderRadius={20}
                        buttonStyle={styles.loginBtn}
                        fontSize={14}
                        fontWeight = {'500'}
                        title='Next'
                        onPress={() => navigate("QuestionScreenFour", {screen: "Screen Four"})}/>
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
        paddingTop: 10,
        borderBottomWidth:0.5
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