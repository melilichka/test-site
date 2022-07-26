// with hook
import React, { useState, useEffect } from 'react';
import style from '.././ProfileInfo.module.css';

const ProfileStatus = (props) => {
  
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateAuthStatus(status);
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div className={style.status}>
      {props.routerUserId && <span>{props.status}</span>}
      {!props.routerUserId && !editMode &&
        <div>
          <span onClick={activateEditMode}>{props.status || 'Set status'}</span>
        </div>}
      
      {!props.routerUserId && editMode &&
        <div>
          <input onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status} />
        </div>
      }
    </div>
  );
}
export default ProfileStatus;