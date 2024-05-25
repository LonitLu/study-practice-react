const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi. how are you?", likesCount: 12 },
    { id: 2, message: "Hi you, It'styles my first post", likesCount: 8 },
    { id: 3, message: "It'styles my first post", likesCount: 6 },
    { id: 4, message: "Yo Victor, Hi. how are you?", likesCount: 22 },
  ],
  newPostText: "test text",
};

const profileReducer = (state = initialState, action) => {
  let newPost;

  switch (action.type) {
    case ADD_POST:
      newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
