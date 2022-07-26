
import style from './Navbar.module.css';
import NavItem from './NavItem/NavItem';


const Navbar = (props) => {

    return (
        <>
            <nav className={style.nav}>
                <NavItem isExact = {true} navPath='/profile' navClass={style.profileStyle} navName='Profile' />
                <NavItem isExact = {false} navPath='/dialogs' navClass={style.dialogStyle} navName='Messages' />
                <NavItem isExact = {false} navPath='/users' navClass={style.usersStyle} navName='Users' />
            </nav>
            <div className={style.copyright}>
                © Created by Liliia Sharipova as a learning practice of React.js
            </div>
        </>
    );
}
export default Navbar;