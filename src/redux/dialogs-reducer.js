const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Hi,how are you' },
        { id: 2, message: 'My name is Uyuvbs' },
        { id: 3, message: 'I like a cofee' },
        { id: 4, message: 'I like a tea' },
    ],
    dialogs: [
        { id: 1, name: 'Nikolay' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Alex' },
        { id: 5, name: 'Sveta' },
        { id: 6, name: 'Oleg' },
        { id: 7, name: 'Max' },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            }
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessageBody: action.body,
            }

        default:
            return state;
    }


}

export const addMessageActionCreater = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageBodyCreater = (body) => {
    return {
        type: UPDATE_MESSAGE,
        body: body
    }

}

export default dialogsReducer;