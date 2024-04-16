import MyPosts from "./MyPosts/MyPosts";
// import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  let posts = [
    { id: 1, message: "Hi. how are you?", likesCount: 12 },
    { id: 2, message: "Hi you, It'styles my first post", likesCount: 8 },
    { id: 3, message: "It'styles my first post", likesCount: 6 },
    { id: 4, message: "Yo Victor, Hi. how are you?", likesCount: 22 },
  ];

  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </>
  );
};

export default Profile;
