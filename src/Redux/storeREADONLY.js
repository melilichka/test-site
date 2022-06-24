import dialogReducer from "./dialogReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Rinat Sharip', avatar: 'luffyAvatar.png', },
        { id: 2, name: 'Zulfia Vaf', avatar: 'avatar1.png', },
        { id: 3, name: 'Rafis Rais', avatar: '', },
        { id: 4, name: 'Roza Khusain', avatar: 'avatar2.png', },
        { id: 5, name: 'Alia Shakur', avatar: 'avatar1.png', },
        { id: 6, name: 'Galina Akim', avatar: '', },
        { id: 7, name: 'Agnia Nikol', avatar: 'avatar1.png', },
      ],
      messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'Im good' },
        { id: 4, message: 'What about the meeting?' },
        { id: 5, message: 'See you!' },
      ],
      newMessageText: '',
    },
    profilePage: {
      posts: [
        { id: 1, avatar: 'luffyAvatar.png', likesCount: 14, message: 'It\'s my first post', },
        { id: 2, avatar: 'avatar1.png', likesCount: 10, message: 'What a wonderful world!', },
        { id: 3, avatar: 'avatar2.png', likesCount: 30, message: 'What day is today?', },
      ],
      newPostText: '',
    },
    navbar: {
      friends: [
        { id: 8, name: 'Mia', avatar: 'luffyAvatar.png', },
        { id: 9, name: 'Kaya', avatar: 'avatar1.png', },
        { id: 10, name: 'Zizi', avatar: 'avatar2.png', },
      ]
    },
  },
  _renderEntireTree() { },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderEntireTree = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._renderEntireTree();
  }
}
export default store;