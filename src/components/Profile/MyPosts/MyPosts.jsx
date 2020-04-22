import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => {
        return <Post message={p.message} likeCounts={p.likesCount} />
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    };

    return (
        <div class={s.wrap}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} placeholder='Write your post...' />
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );

}

export default MyPosts;