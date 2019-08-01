import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import styles from './Components.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo'
import { LinearGradient } from 'expo-linear-gradient';
class LounchSession extends Component {

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#575FCF', '#0FBCF9']}
                    style={{ padding: 15, alignItems: 'center', width: '100%', height: '100%', flex: 1 }}>
                    <Logo></Logo>
                    <Text style={styles.title}>Great! it is time to sleep we chose sounds for you tonight.</Text>
                    <Text style={styles.title}>Before you start remember to set your phone in airplain mode</Text>
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
                </LinearGradient>
            </View>
        );
    }
}
export default connect()(LounchSession)