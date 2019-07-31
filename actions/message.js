import superagent from 'superagent';
export const GET_MESSAGES = 'GET_MESSAGES'

function getAllMessages(messages) {
    return {
        type: GET_MESSAGES,
        payload: {messages}
    }
}

export function getMessages() {
    //const url = `https://goo-night-server.herokuapp.com/posts`
    return async function (dispatch) {
        try {
        const response = await superagent.get('https://goo-night-server.herokuapp.com/messages')
        const messages = response.body
        dispatch(getAllMessages(messages))
        }
        catch(error) {
            console.log(error)
        }
    }
}

export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (message) => (dispatch) => {
    dispatch({
        type: ADD_MESSAGE,
        payload: message
    })
}

export const SEND_MESSAGE = 'SEND_MESSAGE'

function sentMessageSuccess (data) {
    console.log(data)
    return {
        type: SEND_MESSAGE,
        payload: { message: ''}
    }
}

export const sendMessage = (comment, message) => (dispatch) => {
    const data = {
        date: new Date(),
        message: message,
        grateful: comment.comment
    }
    superagent
        .post(`https://goo-night-server.herokuapp.com/messages`)
        .send(data)
        .then(response => {
            dispatch(sentMessageSuccess(response.body))
        })
        .catch(error => {
            console.log(error)
        })
}
