import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import footerStyle from '../Footer/Footer.module.css';


const Navbar = () => {
    
    return (
        <nav className={ `${style.nav} ${footerStyle.nav}`}>
            <div className={ `${style.item} ${footerStyle.item}`}>
                <NavLink to='/profile' activeClassName='activeLink'>Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active} ${footerStyle.nav}`}>
                <NavLink to='/dialogs' activeClassName='activeLink'>Messages</NavLink>
            </div>
            <div className={`${style.item} ${footerStyle.item}`}>
                <NavLink to='/users' activeClassName='activeLink'>Users</NavLink>
            </div>
            <div className={`${style.item} ${footerStyle.item}`}>
                <NavLink to='/news' activeClassName='activeLink'>News</NavLink>
            </div>
        
            <div className={`${style.item} ${footerStyle.item}`}>
                <NavLink to='/settings' activeClassName='activeLink'>Settings</NavLink>
            </div>
           
        </nav>
    );
}
export default Navbar;