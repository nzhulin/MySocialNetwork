import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from '../../common/preloader/preloader';


const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div><img className={s.profileImg} src='https://pbs.twimg.com/profile_banners/408908823/1482024844/1500x500'></img>
            </div>
            <div class={s.ava}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                ava
        </div>
        </div >

    );

}

export default Profileinfo;