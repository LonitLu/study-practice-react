import MyPosts from "./MyPosts/MyPosts";
// import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </>
  );
};

Profile.propTypes = {
  posts: PropTypes.array,
  state: PropTypes.object,
  addPost: PropTypes.func,
};

export default Profile;
