import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Picker
} from 'react-native';

export default class QuestionScreenFour extends Component<{}> {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props){
        super(props)

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.containers}>
                <View style={styles.formContainer}>
                    <Text style={styles.lastmessagered}>  Thank you! </Text>
                    <Text style={styles.lastmessage}> We will look into your inputs and get back. {"\n"}{"\n"}{"\n"}{"\n"}</Text>


                    <Text style={styles.lastmessage}>Have a Good Day</Text>

                </View>
            </View>


        );
    }
}


const styles = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#141414',
        alignItems: 'center',


    },
    formContainer: {
        backgroundColor: 'white',
        flex: 1,
        width: 340,
        justifyContent: 'center',
        padding: 30
    },
    lastmessage: {
        fontSize:24,
        fontWeight: '700',
        textAlign: 'center',
        color: 'black'
    },
    lastmessagered:{
        fontSize:24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#1FBFF6'
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