import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import logo from '../../assets/images/logo2.jpeg';
// import Preloader from '../Common/Preloader/Preloader';
// import noAvatar from '../../assets/images/noavatar.png';

const Header = (props) => {

    // if (!props.authProfile) {
    //     return <Preloader />
    // }

    // let smallPhoto = props.authProfile.photos.small;
    
    return (
        <header className={style.header}>
            <img src= {logo} alt='' />

            <div className={style.loginBlock}>
                {/* {
                    props.authProfile
                        ? <img src={smallPhoto ? smallPhoto : noAvatar} alt='' />
                        : null
                } */}
                <span>
                    {
                        props.isAuth
                            ? <div>{props.login} <button type='button' onClick={props.authLogOut}>LogOut</button></div>
                            : <NavLink to={'/login'}>login</NavLink>
                    }
                </span>
            </div>
        </header>
    );
}

export default Header;