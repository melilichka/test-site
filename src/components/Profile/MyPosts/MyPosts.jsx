import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength } from '../../Common/utils/validators';
import { Textarea } from '../../Common/FormControls/FormControls';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength300 = maxLength(300);

const AddNewPostForm = (props) => {
    return (
        <form className={style.postForm} onSubmit={props.handleSubmit}>
            <Field
                // onChange={onPostChange}
                // ref={newPost}
                // value={newPostText}
                component={Textarea}
                validate={[maxLength300]}
                name='newPostBody'
                placeholder='Enter your post...' />
            <button
                type='submit'
                // onClick={onAddPostClick}
            >Add post</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form:'addPost'})(AddNewPostForm);


const MyPosts = memo(props=> {
    
    
    let posts = props.profilePage.posts;
    // let newPostText = props.profilePage.newPostText;
    
    let postsElements = [...posts]
    .reverse()
    .map(p => {
        return (
            <Post
                id={p.id}
                avatar={p.avatar}
                likesCount={p.likesCount}
                message={p.message}
                key={p.id}
            />
        )
    });
    
    // let newPost = React.createRef();
    
    // let onPostChange = () => {
    //     let text = newPost.current.value;
    //     props.updateNewPostText(text);
    // }
    
    // let onAddPostClick = () => {
    //     props.addPost();
    // }
    
    const addPostSubmit = (values) => {
        if (values.newPostBody) {
            props.addPost(values.newPostBody);
            values.newPostBody = '';
        }
    }
    return (
        <div className={style.postBlock}>
            <h3>{props.routerUserId ? 'Posts': 'My posts'}</h3>
            {!props.routerUserId && <AddNewPostReduxForm onSubmit={addPostSubmit}/>}
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
});


   
   

export default MyPosts;