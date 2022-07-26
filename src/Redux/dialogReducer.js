import avatarIcon from '../assets/images/rainbow.jpeg';

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

let initialState = {
  dialogs: [
    {
      id: 1, name: 'Rinat Sharip', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'I saw you today...' },
        { id: 4, message: 'You looked really good!!!' },
      ],
    },
    {
      id: 2, name: 'Zulfia Vaf', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hey!' },
        { id: 2, message: 'Do you want to meet?' },
        { id: 3, message: 'I will be available at 12 pm' },
        { id: 4, message: 'See you soon' },
      ],
    },
    {
      id: 3, name: 'Rafis Rais', avatar: '', messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'It\'s rain' },
        { id: 3, message: 'I will take my umbrella' },
        { id: 4, message: 'I\'ll wait you at the corner' },
      ],
    },
    {
      id: 4, name: 'Roza Khusain', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'I have been learning Reactjs' },
        { id: 4, message: 'Would you like to join?' },
      ],
    },
    {
      id: 5, name: 'Alia Shakur', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'I didn\'t see you a long time' },
        { id: 3, message: 'Let\'s meet in the cafe.' },
        { id: 4, message: 'What do you think about it?' },
      ],
    },
    {
      id: 6, name: 'Galina Akim', avatar: '', messages: [
        { id: 1, message: 'Hi, my dear friend!' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'where are you live now?' },
        { id: 4, message: 'how many days ago did you move?' },
      ],
    },
    {
      id: 7, name: 'Agnia Nikol', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'I can not find my umbrella((' },
        { id: 3, message: 'Maybe I left it at you last weekend...' },
        { id: 4, message: 'Could you please look for?' },
      ],
    },
  ],

}

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_NEW_MESSAGE:
      return {
        ...state,
        dialogs: state.dialogs.map(dialog => {
          if (dialog.id == action.selectedDialogId) {
            let newMessageId = 1;
            if (dialog.messages.length > 0) {
              newMessageId = dialog.messages.slice(-1)[0].id + 1;
            }
            return {
              ...dialog,
              messages: [...dialog.messages, {id: newMessageId, message: action.newMessageBody }],
            }
          }
          return dialog;
        }),
      }

    default:
      return state;
  }
}


export const addNewMessage = (selectedDialogId, newMessageBody) => ({ type: ADD_NEW_MESSAGE, selectedDialogId, newMessageBody });

export default dialogReducer;

