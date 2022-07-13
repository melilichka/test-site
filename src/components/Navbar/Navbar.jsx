
import style from './Navbar.module.css';
import NavItem from './NavItem/NavItem';


const Navbar = (props) => {

    return (
        <>
            <nav className={style.nav}>
                <NavItem navPath='/profile' navClass={style.profileStyle} navName='Profile' />
                <NavItem navPath='/dialogs' navClass={style.dialogStyle} navName='Messages' />
                <NavItem navPath='/users' navClass={style.usersStyle} navName='Users' />
            </nav>
            <div className={style.copyright}>
                © Created by Liliia Sharipova as a learning practice of React.js
            </div>
        </>
    );
}
export default Navbar;