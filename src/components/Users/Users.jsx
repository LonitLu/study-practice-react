import axios from "axios";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import React from "react";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://api.slingacademy.com/v1/sample-data/users?limit=${this.props.pageSize}&offset=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.users);
      });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={
                    u.profile_picture != null ? u.profile_picture : userPhoto
                  }
                  className={styles.user__photo}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
                  this.props.setCurrentPage(p);
                }}
                key={p}
                className={
                  this.props.currentPage === p && styles.selected__page
                }
              >
                {p}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
