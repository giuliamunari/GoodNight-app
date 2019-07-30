import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import t from 'tcomb-form-native';
import Message, { formOptions } from '../models/Message';
import styles from './Components.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

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
        this.clearForm()
        Actions.signUp()
        
    }

    render() {
        const Form = t.form.Form;
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.container}>
                    <Text style={styles.title}>welcome</Text>
                    <Form
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
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        //message: state.message.message
    }
}
export default connect(mapStateToProps)(AddJournal)