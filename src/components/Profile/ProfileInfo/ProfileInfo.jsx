import React from 'react';
import style from './ProfileInfo.module.css';
import lookingForAJobIcon from '../../../assets/images/lookingForAJobIcon1.png';
import noAvatar from '../../../assets/images/noavatar.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

    let largePhoto = props.userProfile.photos.large;
    let isLookingForAJob = props.userProfile.lookingForAJob;
    let fullName = props.userProfile.fullName
    let aboutMe = props.userProfile.aboutMe;

    let contactList = [];
    let contacts = props.userProfile.contacts;
    for (let key in contacts) {
        if (contacts[key]) {
            contactList.push(contacts[key]);
        }
    }

    let contactsBlock;
    if (contactList.length) {
        contactsBlock = <div>
            <span>Contacts:</span>
            <div>{contactList.map((c, index) => <p key={index}>{c}</p>)}</div>
        </div>
    } else { contactsBlock = null }

    return (
        <div>

            <div className={style.profileBlock}>

                <div className={style.profileAvatar}>
                    <img src={largePhoto ? largePhoto : noAvatar} alt='' />
                    {isLookingForAJob ? <img src={lookingForAJobIcon} alt='' className={style.jobIcon} /> : null}
                </div>

                <div className={style.fullName}>{fullName}</div>

                <ProfileStatus
                    status={props.status}
                    updateAuthStatus={props.updateAuthStatus}
                    routerUserId={props.routerUserId} />

                <div className={style.info}>
                    {aboutMe ? <div><span>About me: </span><p>{aboutMe}</p></div> : null}
                    {contactsBlock}
                </div>

            </div>
        </div>
    );
}

export default ProfileInfo;