// import React from 'react';
import {connect} from 'react-redux';
import { 
    // updateNewPostTextCreator, 
    addPost } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}
const MyPostsContainer = connect(mapStateToProps, {
    // updateNewPostTextCreator,
    addPost})(MyPosts);

export default MyPostsContainer;