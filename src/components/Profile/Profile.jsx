import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
