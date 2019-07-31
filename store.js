import reduxThunk from 'redux-thunk'
import reducer from './reducers'
import devToolsEnhancer from 'remote-redux-devtools';
import {createStore, applyMiddleware, compose} from 'redux'
const store = createStore(reducer, compose(
    applyMiddleware(reduxThunk),
    devToolsEnhancer()
  ));
export default store