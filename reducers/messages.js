import {GET_MESSAGES, ADD_MESSAGE} from '../actions/message'

const initialState = {}

export default function (state = initialState, action) {  
    switch (action.type) {    
        case ADD_MESSAGE :
            return {...state, ...action.payload}   
        case GET_MESSAGES :
            return {...state, ...action.payload}
        default:
            return state
    }
}
