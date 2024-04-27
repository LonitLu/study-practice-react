import React from "react";
import styles from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import PropTypes from "prop-types";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Posts key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    alert(text);
  };

  return (
    <div className={styles.post__blok}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

MyPosts.propTypes = {
  posts: PropTypes.array,
};

export default MyPosts;
