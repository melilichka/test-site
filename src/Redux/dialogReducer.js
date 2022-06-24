import avatarIcon from '../assets/images/rainbow.jpeg';

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Rinat Sharip', avatar: avatarIcon, },
    { id: 2, name: 'Zulfia Vaf', avatar: avatarIcon, },
    { id: 3, name: 'Rafis Rais', avatar: '', },
    { id: 4, name: 'Roza Khusain', avatar: avatarIcon, },
    { id: 5, name: 'Alia Shakur', avatar: avatarIcon, },
    { id: 6, name: 'Galina Akim', avatar: '', },
    { id: 7, name: 'Agnia Nikol', avatar: avatarIcon, },
  ],
  messages: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'How are you doing?' },
    { id: 3, message: 'Im good' },
    { id: 4, message: 'And you?' },
  ],
}

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_NEW_MESSAGE: 
    return {
      ...state,
      messages: [...state.messages, {id: 6, message: action.newMessageBody }],
    }

    default: 
      return state;
  }
}


export const addNewMessage = (newMessageBody) => ({ type: ADD_NEW_MESSAGE, newMessageBody });

export default dialogReducer;

