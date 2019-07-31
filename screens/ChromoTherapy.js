import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import * as Music from '../assets/music/rain.mp3' 
import * as Animatable from 'react-native-animatable';
import styles from './ChromoTherapy.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Audio } from 'expo-av';
import AudioPlayer from './AudioPlayer'
class ChromoTherapy extends Component {
    animation = {
        0: {
            backgroundColor: `#ff9f43`
        },
        0.1: {
            backgroundColor: `#f368e0`
        },
        0.2: {
            backgroundColor: `#00d2d3`
        },
        0.3: {
            backgroundColor: `#2e86de`
        },
        0.4: {
            backgroundColor: `#0abde3`
        },
        0.5: {
            backgroundColor: `#1dd1a1`
        },
        0.6: {
            backgroundColor: `#ff6b6b`
        },
        0.7: {
            backgroundColor: `#c8d6e5`
        },
        0.8: {
            backgroundColor: `#10ac84`
        },
        0.9: {
            backgroundColor: `#54a0ff`
        },
        1: {
            backgroundColor: `#00d2d3`
        },
    }
    componentDidMount() {
    }
    
    render() {
        return (
            <Animatable.View animation={this.animation} easing="ease-in-out" iterationCount={Infinity} direction="alternate" duration={50000} style={styles.container}>
                
                <AudioPlayer></AudioPlayer>
                <TouchableHighlight
                        style={styles.button}
                        onPress={Actions.lounchSession}
                        underlayColor='#99d9f4'
                    >
                        <Text style={styles.buttonText}>Go back</Text>
                    </TouchableHighlight>
            </Animatable.View>
        );
    }
}

function mapStateToProps(state) {
    return {
        //message: state.message.message
    }
}
export default connect(mapStateToProps)(ChromoTherapy)