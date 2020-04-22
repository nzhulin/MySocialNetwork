const ADD_POST = 'ADD-POST'
const UPDATE_TEXT = 'UPDATE-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, message: 'Hi,how are you', likesCount: 12 },
        { id: 2, message: 'Its my first post', likesCount: 15 },
        { id: 3, message: 'Hi,how are you', likesCount: 12 },
        { id: 4, message: 'Its my first post', likesCount: 15 },
        { id: 5, message: 'Hi,how are you', likesCount: 12 },
        { id: 6, message: 'Its my first post', likesCount: 15 },
        { id: 7, message: 'Hi,how are you', likesCount: 12 },
        { id: 8, message: 'Its my first post', likesCount: 15 },
    ],
    newPostText: '',
    profile: null,
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 5, message: state.newPostText, likesCount: 0 }]
            }
        case UPDATE_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeActionCreater = (text) => {
    return {
        type: UPDATE_TEXT,
        newText: text
    }

}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }

}

export default profileReducer;