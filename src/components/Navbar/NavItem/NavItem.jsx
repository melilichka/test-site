import { NavLink } from 'react-router-dom';
import style from '../Navbar.module.css';


const NavItem = (props) => {
    return (
        <div className={style.item}>
            <NavLink to={props.navPath} className={props.navClass} activeClassName={style.activeLink}>
                <div>{props.navName}</div>
            </NavLink>
        </div>
    );
}
export default NavItem;