import React from "react";
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions =
    'Press Ctrl+R to reload,\n' +
    'Shift+F10 or shake for dev menu';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Home Solutions
                </Text>
                <Text style={styles.instructions}>
                    To get started, Sign In
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>


        );
    }
}

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
