import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro12.module.css";

const IPhone14Pro12: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-27");
  }, [navigate]);

  const onIconHomeButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iPhone14Pro12}>
      <div className={styles.rectangleDiv} />
      <i className={styles.messagesI}>Messages</i>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleDiv1} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-10.svg" />
        <i className={styles.autimobiliThatsGreatWeW}>
          <span>
            <span>Autimobili..</span>
            <span className={styles.span}>:</span>
          </span>
          <span className={styles.thatsGreatWe}>
            That’s Great we will meet asap
          </span>
        </i>
        <button
          className={styles.rectangleButton}
          onClick={onRectangleButtonClick}
        />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-113.svg" />
        <i className={styles.fFFSorryWeJustSoldThe}>
          <span>
            <span>FFF..</span>
            <span className={styles.span}>:</span>
          </span>
          <span className={styles.thatsGreatWe}>
            {" "}
            Sorry we just sold the ride, but we can be in contact for further
            deals if you would like.
          </span>
        </i>
      </div>
      <div className={styles.frameDiv1}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector68.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector69.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector70.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector71.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector72.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro12;
