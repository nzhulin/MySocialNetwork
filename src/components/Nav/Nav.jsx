import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';


const Nav = (props) => {
    // let getFriends = props.state.friends.map(d => {
    //     return <Friends name={d.name} id={d.id} />
    // })
    return (
        < nav className={s.nav} >
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item} >
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
                {/* <div className={s.friendsItem}>{getFriends}</div>
                <div className={s.friendsItem}>{getFriends}</div> */}
            </div>

        </nav >
    )
}

export default Nav;