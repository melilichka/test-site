import React from 'react';
import style from './Users.module.css';
import constants from './../../constants';
import noAvatar from '../../assets/images/noavatar.png';
import { NavLink } from 'react-router-dom';



const Users = (props) => {

  let maxPageNumber = Math.ceil(props.usersTotalCount / props.userListPageSize);

  let pages = [];
  for (let i = props.userListCurrentPage - constants.userListCurrentPageShift;
    i <= props.userListCurrentPage + constants.userListCurrentPageShift;
    i++) {
    if (i > 0 && i <= maxPageNumber) {
      pages.push(i);
    }
  }


  return (
    <div className={style.users}>
      <div className={style.pageNumbers}>

        {(props.userListCurrentPage > 1)
          ? <span onClick={() => { props.onPageNumberClick(props.userListCurrentPage - 1) }}>Previous</span>
          : null
        }

        {pages.map(p => {
          return <span
            key={p}
            // className={props.userListCurrentPage === p && style.selected}
            className={`${style.page} ${props.userListCurrentPage === p ? style.selected : undefined}`}
            onClick={(event) => { props.onPageNumberClick(p) }}>
            {p}
          </span>
        })
        }

        {(props.userListCurrentPage < maxPageNumber)
          ? <span onClick={() => { props.onPageNumberClick(props.userListCurrentPage + 1) }}>Next</span>
          : null
        }
      </div>

      <div className={style.userList}>
        {props.users.map(u => {
          return <div className={style.item} key={u.id}>

            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small ? u.photos.small : noAvatar} alt='' />
            </NavLink>
            <div>
              <p>{u.name}</p>
              <p>{u.status}</p>

              {
                u.followed
                  ? <button disabled={props.disabledUserListFollowButton.some(id => id === u.id)}
                    onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                  : <button disabled={props.disabledUserListFollowButton.some(id => id === u.id)}
                    onClick={() => { props.follow(u.id) }}>Follow</button>
              }
            </div>
          </div>
        })}
      </div>
    </div>
  )
}


export default Users;