import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro20.module.css";

const IPhone14Pro20: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-30");
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
    <div className={styles.iphone14Pro20}>
      <div className={styles.bmwParent}>
        <i className={styles.bmw}>BMW</i>
        <i className={styles.m4}>M4</i>
        <iframe
          className={styles.frameChild}
          src={`https://sketchfab.com/models/d219777adc134b0dac7489c87c651984/embed?autospin=1&autostart=1>`}
        />
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameItem} alt="" src="../ellipse-16.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameInner} alt="" src="../ellipse-26.svg" />
        </button>
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.v8}>V8</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.crRs}>2.12 Cr Rs</i>
        </div>
        <div className={styles.frameChild1} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-72.svg" />
      </div>
      <div className={styles.bmwGroup}>
        <i className={styles.bmw1}>BMW</i>
        <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild3} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector31.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector32.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector33.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector34.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector35.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro20;
