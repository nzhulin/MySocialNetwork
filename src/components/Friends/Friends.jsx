import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.friendsBar}>
            <div><img src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg" alt="" /></div>{props.name}
        </div>
    )
}

export default Friends;