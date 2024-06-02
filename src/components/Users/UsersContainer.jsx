import React from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleisFetching,
  unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleisFetching(true);
    axios
      .get(
        `https://api.slingacademy.com/v1/sample-data/users?limit=${
          this.props.pageSize
        }&offset=${this.props.currentPage - 1}`
      )
      .then((response) => {
        this.props.toggleisFetching(false);
        this.props.setUsers(response.data.users);
        this.props.setTotalUsersCount(response.data.total_users);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleisFetching(true);
    axios
      .get(
        `https://api.slingacademy.com/v1/sample-data/users?limit=${
          this.props.pageSize
        }&offset=${pageNumber * 5 - 5}`
      )
      .then((response) => {
        this.props.toggleisFetching(false);
        this.props.setUsers(response.data.users);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleisFetching: (isFetching) => {
//       dispatch(toggleisFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleisFetching,
})(UsersContainer);
