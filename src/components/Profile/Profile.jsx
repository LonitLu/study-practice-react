import MyPosts from "./MyPosts/MyPosts";
// import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </>
  );
};

Profile.propTypes = {
  posts: PropTypes.array,
  state: PropTypes.object,
};

export default Profile;
