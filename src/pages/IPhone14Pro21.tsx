import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro21.module.css";

const IPhone14Pro21: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
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
    <div className={styles.iphone14Pro21}>
      <div className={styles.toyotaParent}>
        <i className={styles.toyota}>Toyota</i>
        <i className={styles.mk4}>Mk-4</i>
        <iframe
          className={styles.frameChild}
          src={`https://sketchfab.com/models/d94f09c0e33e486aa467358a2f6fc795/embed?autospin=1&autostart=1&ui_theme=dark>`}
        />
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameItem} alt="" src="../ellipse-15.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameInner} alt="" src="../ellipse-25.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-71.svg" />
        <div className={styles.frameChild1} />
        <div className={styles.specsAndPriceParent}>
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <button className={styles.rectangleGroup}>
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <i className={styles.bmw}>BMW</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild3} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector26.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector27.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector28.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector29.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector30.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro21;
