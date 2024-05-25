import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://avatars.mds.yandex.net/i?id=65143c59e9df102a346b674e873d25e01b5514d1-12753080-images-thumbs&n=13",
        followed: false,
        fullName: "Dmitri",
        status: "I am BOSS",
        location: { city: "Tyumen", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://avatars.mds.yandex.net/i?id=65143c59e9df102a346b674e873d25e01b5514d1-12753080-images-thumbs&n=13",
        followed: true,
        fullName: "Dima",
        status: "No, I am BOSS",
        location: { city: "Omsk", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://avatars.mds.yandex.net/i?id=65143c59e9df102a346b674e873d25e01b5514d1-12753080-images-thumbs&n=13",
        followed: false,
        fullName: "Lonit",
        status: "I am big BOSS",
        location: { city: "Moscow", country: "Russia" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.user__photo} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
