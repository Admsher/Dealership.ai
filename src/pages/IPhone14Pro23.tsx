import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro23.module.css";

const IPhone14Pro23: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
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
    <div className={styles.iPhone14Pro23}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle-1.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-7.svg" />
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-13.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-23.svg" />
      </button>
      <iframe
        className={styles.rectangleIframe}
        src={`https://sketchfab.com/models/43f6f6ba0c6a4c6c8163f627b45b3a3f/embed?autospin=1&autostart=1>`}
      />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <i className={styles.astonMartinIndia}>Aston Martin India</i>
      <i className={styles.aMRI}>AMR</i>
      <i className={styles.v10I}>V10</i>
      <i className={styles.specsAndPrice}>Specs and Price</i>
      <i className={styles.v12I}>V12</i>
      <i className={styles.crRsI}>2.12 Cr Rs</i>
      <i className={styles.crRsI1}>1.74Cr Rs</i>
      <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
      <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
      <i className={styles.dealersNearYou}>Dealers Near You</i>
      <div className={styles.rectangleDiv3} />
      <div className={styles.frameDiv}>
        <div className={styles.rectangleDiv4} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv1}>
        <div className={styles.rectangleDiv4} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv2}>
        <i className={styles.astonMartin}>Aston Martin</i>
        <i className={styles.vanquish}>Vanquish</i>
      </div>
      <div className={styles.frameDiv3}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector16.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector17.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector18.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector19.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector20.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro23;
