import style from './Post.module.css';
import noAvatar from '../../../../assets/images/noavatar.png';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={props.avatar ? props.avatar : noAvatar} alt=''/>
            <p>{props.message}</p>
            {/* <div><span>{props.likesCount} Like</span></div> */}
        </div>
    );
}

export default Post;