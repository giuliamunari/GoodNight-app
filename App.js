import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './store'
import { Provider } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux';
import AddJournal from './screens/AddJournal';
import AddComment from './screens/AddComment';
import LounchSession from './screens/LounchSession';
import ChromoTherapy from './screens/ChromoTherapy';
import Journal from './screens/Journal';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="addJournal" component={AddJournal} title="Step 1" initial={true} />
                        <Scene key="addComment" component={AddComment} title="Step 2" />
                        <Scene key="lounchSession" component={LounchSession} title="Start" />
                        <Scene key="chromoTherapy" component={ChromoTherapy} title="Good night" />
                        <Scene key="journal" component={Journal} title="Journal"  />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}

