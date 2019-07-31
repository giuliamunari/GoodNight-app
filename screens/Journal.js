import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import * as Music from '../assets/music/rain.mp3' 
import * as Animatable from 'react-native-animatable';
import styles from './Components.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Audio } from 'expo-av';
import AudioPlayer from './AudioPlayer'
import {getMessages} from '../actions/message'

class Journal extends Component {
    
    componentDidMount() {
        this.props.getMessages()
    }
    
    render() {
      
        return (
            <View styles={styles.container}>
                <Text>Journal</Text>
                {!this.props.messages && <Text>Loading...</Text>}
                {this.props.messages && this.props.messages.map(message =>  <Text key={message.id}>{message.message}</Text>)}
            </View>
        );
    }
}
const mapStateToProps = (state ) => {
    console.log(state.messages.messages, 'STATE')
    return {
        messages: state.messages.messages
    }
}

export default connect(mapStateToProps, {getMessages})(Journal)