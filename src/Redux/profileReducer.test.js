import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, { addPost, deletePost } from "./profileReducer";


//1. start data

let state = {
  posts: [
    { id: 1, avatar: 'luffyAvatar.png', likesCount: 14, message: 'It\'s my first post', },
    { id: 2, avatar: 'avatar1.png', likesCount: 10, message: 'What a wonderful world!', },
    { id: 3, avatar: 'avatar2.png', likesCount: 30, message: 'What day is today?', },
  ]
};

it('new posts length should be incremented', () => {
  //1. start data for action creator
  let action = addPost(`Hello world!`);
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation 
  expect(newState.posts.length).toBe(4);
});

test('message of new post should be correct', () => {
  //1. start data for action creator
  let action = addPost(`Hello world!`);
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation 
  expect(newState.posts[3].message).toBe(`Hello world!`);
});

test('after deleting new posts length should be decremented', () => {
  let action = deletePost(2);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});