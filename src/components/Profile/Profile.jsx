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
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </>
  );
};

Profile.propTypes = {
  posts: PropTypes.array,
  profilePage: PropTypes.object,
  addPost: PropTypes.func,
  updateNewPostText: PropTypes.func,
};

export default Profile;
