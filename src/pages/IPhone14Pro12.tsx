import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro12.module.css";

const IPhone14Pro12: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-27");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro12}>
      <div className={styles.messagesWrapper}>
        <i className={styles.messages}>Messages</i>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <button
            className={styles.frameChild}
            onClick={onRectangleButtonClick}
          />
          <img className={styles.frameItem} alt="" src="../ellipse-112.svg" />
          <i className={styles.fffSorryWeContainer}>
            <span>
              <span>FFF..</span>
              <span className={styles.span}>:</span>
            </span>
            <span className={styles.sorryWeJust}>
              {" "}
              Sorry we just sold the ride, but we can be in contact for further
              deals if you would like.
            </span>
          </i>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <img className={styles.ellipseIcon} alt="" src="../ellipse-10.svg" />
          <i className={styles.fffSorryWeContainer}>
            <span>
              <span>Autimobili..</span>
              <span className={styles.span}>:</span>
            </span>
            <span className={styles.sorryWeJust}>
              That’s Great we will meet asap
            </span>
          </i>
        </div>
      </div>
      <div className={styles.iphone14Pro12Inner}>
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector64.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector65.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector66.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector67.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector68.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro12;
