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