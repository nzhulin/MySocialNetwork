import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendReducer from './friend-reducer';
import usersReduser from "./users-reducer";




let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    allFriends: friendReducer,
    usersPage: usersReduser
});



let store = createStore(reducers);

window.store = store;

export default store;