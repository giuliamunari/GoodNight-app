import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import t from 'tcomb-form-native';
import Person, { formOptions } from '../models/Person';
import styles from './SignUp.styles';

export default class SignUp extends Component {
    state = { newUser: null }

    componentDidMount() {
        this.refs.form.getComponent('name').refs.input.focus();
    }

    clearForm = () => this.setState({ newUser: null });

    onChange = (newUser) => this.setState({ newUser });

    onSubmit = () => {
        const { form } = this.refs;
        const newUser = form.getValue();
        if (!newUser) return;
        this.clearForm()
    }

    render() {
        const Form = t.form.Form;
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.container}>
                    <Text style={styles.title}>Sign up to start</Text>
                    <Form
                        ref="form"
                        type={Person}
                        options={formOptions}
                        value={this.state.newUser}
                        onChange={this.onChange} />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.onSubmit}
                        underlayColor='#99d9f4'
                    >
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
