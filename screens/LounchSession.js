import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import styles from './Components.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
class LounchSession extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>welcome</Text>
                <Text>Great! it is time to sleep we chose sounds for you tonight.</Text>
                <Text>Before you start remember to set your phone in airplain mode</Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={Actions.chromoTherapy}
                    underlayColor='#99d9f4'
                >
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={Actions.journal}
                    underlayColor='#99d9f4'
                >
                    <Text style={styles.buttonText}>Check your journal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        //message: state.message.message
    }
}
export default connect(mapStateToProps)(LounchSession)