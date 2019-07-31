import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import * as Music from '../assets/music/rain.mp3'
import * as Animatable from 'react-native-animatable';
import styles from './Components.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Audio } from 'expo-av';
import AudioPlayer from './AudioPlayer'
import { getMessages } from '../actions/message'
import Swiper from 'react-native-animated-swiper'
import Moment from 'moment';

class Journal extends Component {
    componentDidMount() {
        this.props.getMessages()
    }
    render() {
        Moment.locale('en')
        const Slide = ({ text, date }) => (
            <View style={styles.slide}>
                <Text>{Moment(date).format('d MMM')}</Text>
                <Text style={styles.title}>{text}</Text>
            </View>
        );
        if (!this.props.messages) return <Slide text='Loading...' />
        else return (
            <Swiper
                dots
                dotsColor="rgba(255, 255, 255, 0.25)"
                dotsColorActive="rgba(255, 255, 255, 0.75)">
                {this.props.messages.map(message => <Slide key={message.id} text={message.message} date={message.date} />)}
            </Swiper>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages
    }
}
export default connect(mapStateToProps, { getMessages })(Journal)