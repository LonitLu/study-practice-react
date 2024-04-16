import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.img}
          src="https://invigor.by/assets/images/resources/198/2338-a.jpg"
          alt=""
        />
      </div>
      <div className={styles.description__blok}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
