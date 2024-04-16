import styles from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import PropTypes from "prop-types";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Posts key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={styles.post__blok}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

MyPosts.propTypes = {
  posts: PropTypes.string,
};

export default MyPosts;
