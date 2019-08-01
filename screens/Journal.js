import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './Components.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getMessages } from '../actions/message'
import Swiper from 'react-native-animated-swiper'
import Moment from 'moment';
import Logo from './Logo'

import { LinearGradient } from 'expo-linear-gradient';
class Journal extends Component {
    componentDidMount() {
        this.props.getMessages()
    }
    render() {
        Moment.locale('en')
        const Slide = ({ text, date }) => (
            <View style={styles.slide}>
                <LinearGradient
            colors={['#575FCF', '#0FBCF9']}
            style={{ padding: 15, alignItems: 'center', width: '100%', height: '100%', flex: 1 }}>
                <Logo></Logo>
                <Text style={styles.title}>{Moment(date).format('d MMM')}</Text>
                <Text style={styles.title}>{text}</Text>
                <TouchableHighlight
                        style={styles.button}
                        onPress={Actions.lounchSession}
                        underlayColor='#99d9f4'
                    >
                        <Text style={styles.buttonText}>Go to sleep</Text>
                    </TouchableHighlight>
            </LinearGradient>
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