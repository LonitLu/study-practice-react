import MyPosts from "./MyPosts/MyPosts";
// import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </>
  );
};

Profile.propTypes = {
  posts: PropTypes.array,
  profilePage: PropTypes.object,
  dispatch: PropTypes.func,
};

export default Profile;
