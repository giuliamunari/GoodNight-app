import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import t from 'tcomb-form-native';
import Comment, { formOptions } from '../models/Comment';
import styles from './Components.styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { sendMessage } from '../actions/message'
import Logo from './Logo'
import { LinearGradient } from 'expo-linear-gradient';

class AddComment extends Component {
    state = { newComment: null }

    componentDidMount() {
        this.refs.form.getComponent('comment').refs.input.focus();
    }

    clearForm = () => this.setState({ newComment: null });

    onChange = (newComment) => this.setState({ newComment });

    onSubmit = () => {
        const { form } = this.refs;
        const newComment = form.getValue();
        if (!newComment) return;
        this.clearForm()
        this.props.sendMessage(newComment, this.props.message)
        Actions.lounchSession()
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
                    <Text style={styles.title}>Now write something you are grateful about
It can be anything.</Text>
<Text style={styles.title}> </Text>
                    <Form
                        ref="form"
                        type={Comment}
                        options={formOptions}
                        value={this.state.newComment}
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
function mapStateToProps(state) {
    return {
        message: state.messages.message
    }
}
export default connect(mapStateToProps, {sendMessage})(AddComment)