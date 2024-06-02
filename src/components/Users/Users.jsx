import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  // let pagesCount = Math.ceil(
  //   props.totalUsersCount / props.pageSize
  // );
  // поставил 6 вместо pagesCount из-за большого количества страниц
  // надо найти способ как по другому можно выводить

  let pages = [];
  for (let i = 1; i <= 6; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={styles.pagination}>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(p);
              }}
              key={p}
              className={`${props.currentPage === p && styles.selected__page}`}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={
                    u.profile_picture != null ? u.profile_picture : userPhoto
                  }
                  className={styles.user__photo}
                />
              </NavLink>
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
              <div>
                {u.first_name} {u.last_name}
              </div>
              {/* <div>{u.last_name}</div> */}
            </span>
            <span>
              <div>{u.country}</div>
              <div>{u.city}</div>
            </span>
          </span>
        </div>
      ))}

      <div className={styles.pagination}>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(p);
              }}
              key={p}
              className={`${props.currentPage === p && styles.selected__page}`}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
