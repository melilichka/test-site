import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div>
            <ProfileInfo
                userProfile={props.userProfile}
                status={props.status}
                updateAuthStatus={props.updateAuthStatus} />

            <MyPostsContainer />
        </div>
    );
}

export default Profile;