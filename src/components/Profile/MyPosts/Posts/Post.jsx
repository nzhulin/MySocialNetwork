import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416334-stock-illustration-avatar-business-man-vector-graphic.jpg" alt="" />
            {props.message}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    );

}

export default Post;