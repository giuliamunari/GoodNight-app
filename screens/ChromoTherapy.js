import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Animated, StyleSheet } from 'react-native';
import styles from './ChromoTherapy.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
class ChromoTherapy extends Component {
    constructor(props) {
        super(props);
        // Intialize to default value
        this.state = {
            backgroundColor: new Animated.Value(0)
        };
    }
    componentDidMount() {
        this.setState({ backgroundColor: new Animated.Value(0) }, () => {
            Animated.timing(this.state.backgroundColor, {
                toValue: 100,
                duration: 5000
            }).start();
        });
    }

    render() {
        return (
            <Animated.View
                style={[
                    styles.container,
                    // Interpolation mapping from numbers to strings (colors)
                    {
                        backgroundColor: this.state.backgroundColor.interpolate({
                            inputRange: [0, 100],
                            outputRange: ["#00aaFF", "#808080"]
                        })
                    }
                ]}
            >
                <Text
                    onPress={Actions.lounchSession}
                    style={styles.paragraph}
                >
                    Stop
            </Text>
            </Animated.View>
        );
    }
}


function mapStateToProps(state) {
    return {
        //message: state.message.message
    }
}
export default connect(mapStateToProps)(ChromoTherapy)