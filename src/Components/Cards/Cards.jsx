import React from "react";
import styles from "../Cards/Cards.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { useGlobalContext } from "../../Context";
import Loading from "../Loading/Loading";
import Buttons from "../Button/Button";

const Cards = ({ data, pageSize }) => {
  const { remove, loading } = useGlobalContext();

  if (data.length > 0) {
    return (
      <div className="d-flex flex-row justify-content-evenly flex-wrap ">
        {data.slice(0, pageSize).map((Itm) => {
          const { id, title, category, picture, likes, dislikes } = Itm;
          return (
            <div
              className={`card ${styles.card}`}
              style={{ width: "18rem" }}
              key={id}
            >
              <button
                className={styles.DeleteSection}
                onClick={() => remove(id)}
              >
                <span className={styles.DeleteBtn}>
                  <BsFillTrashFill />
                </span>
              </button>

              <img
                src={picture ? picture : "no picture"}
                className={`card-img-top ${styles.image}`}
                alt={title}
              ></img>

              <div className="card-body">
                <div className={styles.CardsTitles}>
                  <h5 className={`card-title ${styles.cardTitle}`}>
                    {title ? title : "no title"}
                  </h5>
                  <h5 className={styles.cardCategory}>
                    {category ? category : "no category"}
                  </h5>
                </div>
                <div className={styles.CardLowerSection}>
                  <div className="watchBtn">
                    <button
                      type="button"
                      className={`btn btn-success ${styles.watchBtn}`}
                    >
                      Watch
                    </button>
                  </div>

                  <div className={styles.ratingSection}>
                    <Buttons likes={likes} dislikes={dislikes} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (loading) {
    return <Loading />;
  } else {
    return (
      <h3 className={styles.noMoviesMsg}>Sorry, no Movies to display :(</h3>
    );
  }
};

export default Cards;
