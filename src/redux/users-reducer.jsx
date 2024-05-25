const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://avatars.mds.yandex.net/i?id=65143c59e9df102a346b674e873d25e01b5514d1-12753080-images-thumbs&n=13",
    //   followed: false,
    //   fullName: "Dmitri",
    //   status: "I am BOSS",
    //   location: { city: "Tyumen", country: "Russia" },
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://avatars.mds.yandex.net/i?id=65143c59e9df102a346b674e873d25e01b5514d1-12753080-images-thumbs&n=13",
    //   followed: true,
    //   fullName: "Dima",
    //   status: "No, I am BOSS",
    //   location: { city: "Omsk", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://avatars.mds.yandex.net/i?id=65143c59e9df102a346b674e873d25e01b5514d1-12753080-images-thumbs&n=13",
    //   followed: false,
    //   fullName: "Lonit",
    //   status: "I am big BOSS",
    //   location: { city: "Moscow", country: "Russia" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
