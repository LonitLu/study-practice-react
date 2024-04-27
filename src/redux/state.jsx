let rerenderEntireThree = () => {
  console.log("state new");
};

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireThree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireThree(state);
};

export const subscribe = (observer) => {
  rerenderEntireThree = observer;
};

export default state;
