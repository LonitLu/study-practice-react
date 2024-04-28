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
    },
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
