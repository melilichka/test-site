import style from './Friends.module.css';

const Friends = (props) => {
  let friendsElement = props.friends.map(f => {
    return (
      <div key={f.id} id={f.id} className={style.item}>
        <img src={`/images/${f.avatar}`} alt=''/>
        {f.name}
      </div>
    );
  });
  return (
    <div className={style.friends} >
      <div className={style.friendsHeader}>Friends</div>
      <div className = {style.friendsBox}>
        {friendsElement}
      </div>
    </div>
  )
}

export default Friends;