import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
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
                updateAuthStatus={props.updateAuthStatus} 
                routerUserId = { props.match.params.userId}/>

            <MyPostsContainer routerUserId = { props.match.params.userId} />
        </div>
    );
}

export default Profile;