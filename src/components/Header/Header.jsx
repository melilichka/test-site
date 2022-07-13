import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import logo from '../../assets/images/logo.svg';

const Header = (props) => {

    // if (!props.authProfile) {
    //     return <Preloader />
    // }

    // let smallPhoto = props.authProfile.photos.small;

    return (
        <header className={style.header}>
            <NavLink to={'/profile'} activeClassName='activeLink'>
                <img src={logo} alt='' />
            </NavLink>


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
                            : <NavLink to={'/login'}>Login</NavLink>
                    }
                </span>
            </div>
        </header>
    );
}

export default Header;