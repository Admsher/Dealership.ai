import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro11.module.css";

const IPhone14Pro11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconHomeButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='rectangleTextarea']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onIconMenuButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iPhone14Pro11}>
      <textarea
        className={styles.rectangleTextarea}
        data-scroll-to="rectangleTextarea"
      />
      <i className={styles.locationAsMentioned}>
        <p className={styles.locationP}>
          <span>Location:</span>
        </p>
        <p className={styles.asMentionedP}>
          <span>(as mentioned)</span>
        </p>
      </i>
      <i className={styles.profile}>Profile</i>
      <i className={styles.nameI}>Name:</i>
      <div className={styles.frameDiv}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector73.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector74.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector75.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector76.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector77.svg" />
        </button>
      </div>
      <div className={styles.frameDiv1}>
        <textarea className={styles.rectangleTextarea1} />
      </div>
      <div className={styles.frameDiv2}>
        <textarea className={styles.rectangleTextarea2} />
      </div>
    </div>
  );
};

export default IPhone14Pro11;
