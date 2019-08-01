import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import t from 'tcomb-form-native';
import Message, { formOptions } from '../models/Message';
import styles from './Components.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { addMessage } from '../actions/message'
import Logo from './Logo'

import { LinearGradient } from 'expo-linear-gradient';

class AddJournal extends Component {
    state = { newMessage: null }

    componentDidMount() {
        this.refs.form.getComponent('message').refs.input.focus();
    }

    clearForm = () => this.setState({ newMessage: null });

    onChange = (newMessage) => this.setState({ newMessage });

    onSubmit = () => {
        const { form } = this.refs;
        const newMessage = form.getValue();
        if (!newMessage) return;
        this.props.addMessage(newMessage)
        this.clearForm()
        Actions.addComment()
    }

    render() {
        const Form = t.form.Form;
        return (
           
            <View style={styles.container}>
                 <LinearGradient
          colors={['#575FCF', '#0FBCF9']}
          style={{ padding: 15, alignItems: 'center', width: '100%', height: '100%', flex: 1 }}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.container}>
                        <Logo></Logo>
                    <Form
                        style={{ color:'white' }}
                        ref="form"
                        type={Message}
                        options={formOptions}
                        value={this.state.newMessage}
                        onChange={this.onChange} />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.onSubmit}
                        underlayColor='#99d9f4'
                    >
                        <Text style={styles.buttonText}>Add your thoughts</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
                </LinearGradient>
            </View>
            
        );
    }
}

export default connect(null, {addMessage})(AddJournal)