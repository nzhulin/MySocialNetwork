import React from 'react';
import { addPostActionCreater, onPostChangeActionCreater } from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts"
import { connect } from "react-redux";



// const MyPostsContainer = () => {
//     return (<StoreContext.Consumer>
//         {(store) => {
//             let addPost = () => {
//                 store.dispatch(addPostActionCreater());
//             };

//             let onPostChange = (text) => {
//                 store.dispatch(onPostChangeActionCreater(text));
//             };
//             return <MyPosts newPostText={store.getState().newPostText}
//                 updateNewPost={onPostChange}
//                 addPost={addPost}
//                 posts={store.getState().profilePage.posts} />

//         }
//         }
//     </StoreContext.Consumer>)



let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        updateNewPost: (text) => {
            let action = onPostChangeActionCreater(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;