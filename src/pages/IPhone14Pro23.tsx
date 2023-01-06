import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro23.module.css";

const IPhone14Pro23: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-30");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
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
    <div className={styles.iphone14Pro23}>
      <div className={styles.frameParent}>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-13.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-23.svg" />
        </button>
        <iframe
          className={styles.frameInner}
          src={`https://sketchfab.com/models/43f6f6ba0c6a4c6c8163f627b45b3a3f/embed?autospin=1&autostart=1>`}
        />
        <div className={styles.astonMartinParent}>
          <i className={styles.astonMartin}>Aston Martin</i>
          <i className={styles.vanquish}>Vanquish</i>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.v10Parent}>
          <i className={styles.v10}>V10</i>
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.v12}>V12</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
          <i className={styles.crRs}>2.12 Cr Rs</i>
          <i className={styles.crRs1}>1.74Cr Rs</i>
        </div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-7.svg" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild2} />
        <i className={styles.astonMartinIndia}>Aston Martin India</i>
        <i className={styles.amr}>AMR</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <div className={styles.rectangleContainer}>
          <button
            className={styles.rectangleButton}
            onClick={onRectangleButtonClick}
          />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </div>
        <div className={styles.frameDiv}>
          <button
            className={styles.rectangleButton}
            onClick={onRectangleButton1Click}
          />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameChild4} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector16.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector17.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector18.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector19.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector20.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro23;
