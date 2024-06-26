import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi. how are you?", likesCount: 12 },
        { id: 2, message: "Hi you, It'styles my first post", likesCount: 8 },
        { id: 3, message: "It'styles my first post", likesCount: 6 },
        { id: 4, message: "Yo Victor, Hi. how are you?", likesCount: 22 },
      ],
      newPostText: "test text",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Victor" },
        { id: 5, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi you" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo Victor" },
        { id: 5, message: "Hi Valera" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state new");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
