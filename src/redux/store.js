// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import friendReducer from "./friend-reducer";


// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hi,how are you', likesCount: 12 },
//                 { id: 2, message: 'Its my first post', likesCount: 15 },
//                 { id: 3, message: 'Hi,how are you', likesCount: 12 },
//                 { id: 4, message: 'Its my first post', likesCount: 15 },
//                 { id: 5, message: 'Hi,how are you', likesCount: 12 },
//                 { id: 6, message: 'Its my first post', likesCount: 15 },
//                 { id: 7, message: 'Hi,how are you', likesCount: 12 },
//                 { id: 8, message: 'Its my first post', likesCount: 15 },
//             ],
//             newPostText: ''

//         },
//         dialogsPage: {
//             messages: [
//                 { id: 1, message: 'Hi,how are you' },
//                 { id: 2, message: 'My name is Uyuvbs' },
//                 { id: 3, message: 'I like a cofee' },
//                 { id: 4, message: 'I like a tea' },
//             ],
//             dialogs: [
//                 { id: 1, name: 'Nikolay' },
//                 { id: 2, name: 'Andrey' },
//                 { id: 3, name: 'Viktor' },
//                 { id: 4, name: 'Alex' },
//                 { id: 5, name: 'Sveta' },
//                 { id: 6, name: 'Oleg' },
//                 { id: 7, name: 'Max' },
//             ],
//             newMessageBody: ''
//         },
//         allFriends: {
//             friends: [
//                 { id: 1, name: 'Nikolay' },
//                 { id: 2, name: 'Andrey' },
//                 { id: 3, name: 'Oleg' },
//             ],
//         }
//     },
//     _callSubsriber() {
//         console.log('state changed')
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubsriber = observer
//     },


//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.allFriends = friendReducer(this._state.allFriends, action)
//         this._callSubsriber(this._state)
//     }
// }




// window.store = store;
// export default store;