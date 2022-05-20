import * as React from "react";
import { useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { HiThumbDown } from "react-icons/hi";

import { BiDislike, BiLike } from "react-icons/bi";
import styles from "../Button/Button.module.css";

const Buttons = ({ likes, dislikes }) => {
  const [hasLiked, sethasLiked] = useState(false);
  const [hasDisliked, sethasDisliked] = useState(false);
  const [like, setlike] = useState(likes);
  const [disLike, setdisLike] = useState(dislikes);

  /**
   * If the number of likes is greater than 1000, return the first two digits of the number of likes,
   * otherwise return the number of likes.
   * @returns the value of the like parameter if it is greater than 1000. If it is not, it is returning
   * the value of the like parameter.
   */
  const formatLike = (like) => {
    return like > 1000 ? Number(String(like).slice(0, 2)) : like;
  };

  /**
   * If the user has not disliked the post, then toggle the like button. If the user has disliked the
   * post, then set the like button to true and the dislike button to false.
   */
  const handleLike = () => {
    if (!hasDisliked) {
      sethasLiked(!hasLiked);
    } else {
      sethasLiked(true);
      sethasDisliked(false);
    }
  };

  /**
   * If the user has not liked the post, then set the hasDisliked state to the opposite of its current
   * value. If the user has liked the post, then set the hasLiked state to false and the hasDisliked
   * state to true.
   */
  const handleDislike = () => {
    if (!hasLiked) {
      sethasDisliked(!hasDisliked);
    } else {
      sethasLiked(false);
      sethasDisliked(true);
    }
  };

  const classLikeButton = `{ ${hasLiked ? "liked" : ""} ${styles.likeButton} }`;
  const classDisLikeButton = `{ ${hasDisliked ? "disliked" : ""} ${
    styles.dislikeButton
  } }`;

  return (
    <div>
      <button className={classLikeButton} onClick={() => handleLike()}>
        {hasLiked ? (
          <AiTwotoneLike color="var(--clr-blue)" fontSize="2em" />
        ) : (
          <BiLike color="var(--clr-blue)" fontSize="2em" />
        )}
        <span className={styles.likesCounter}>
          {hasLiked ? formatLike(like) + 1 : formatLike(like)}
          {like >= 1000 ? "K" : ""}
        </span>
      </button>
      <button className={classDisLikeButton} onClick={() => handleDislike()}>
        {hasDisliked ? (
          <HiThumbDown color="var(--clr-blue)" fontSize="2em" />
        ) : (
          <BiDislike color="var(--clr-blue)" fontSize="2em" />
        )}
        <span className={styles.dislikesCounter}>
          {hasDisliked ? formatLike(disLike) + 1 : formatLike(disLike)}{" "}
          {disLike >= 1000 ? "K" : ""}
        </span>
      </button>
    </div>
  );
};

export default Buttons;
