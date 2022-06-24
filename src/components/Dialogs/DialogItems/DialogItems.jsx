import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';
import noAvatar from '../../../assets/images/noavatar.png';


const DialogItems = (props) => {
  let path = '/dialogs/' + props.id;
  let avatarPath = props.avatar ? props.avatar : noAvatar;
  return (
      <div className={style.dialog}>
          <NavLink to = {path} activeClassName = 'activeLink' >
            <img src={avatarPath} alt=''/>
            {props.name}
          </NavLink>
      </div>
  );
}

export default DialogItems;