import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const city = props.profile.user.city;
  const street = props.profile.user.street;
  const email = props.profile.user.email;
  const phone = props.profile.user.phone;
  const fullName =
    props.profile.user.first_name + " " + props.profile.user.last_name;

  return (
    <div>
      <div>
        <img
          className={styles.img}
          src="https://invigor.by/assets/images/resources/198/2338-a.jpg"
          alt=""
        />
      </div>
      <div className={styles.description__blok}>
        <img src={props.profile.user.profile_picture} />
        <p>{fullName}</p>
        <p>City: {city}</p>
        <p>Street: {street}</p>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
