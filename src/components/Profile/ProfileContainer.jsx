import React from 'react';
import s from './Profile.module.css'
import * as axios from 'axios';
import { connect } from "react-redux";
import Profile from './Profile';
import { setUserProfile } from './../../redux/profile-reducer';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/7383`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render() {
        return (
            <div class={s.prof} >
                <Profile {...this.props} profile={this.props.profile} />
            </div >

        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};



export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);