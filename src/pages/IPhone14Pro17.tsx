import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro17.module.css";

const IPhone14Pro17: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
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
    <div className={styles.iPhone14Pro17}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-75.svg" />
      <i className={styles.teslaI}>Tesla</i>
      <i className={styles.model3I}>Model 3</i>
      <iframe
        className={styles.rectangleIframe}
        src={`https://sketchfab.com/models/5ef9b845aaf44203b6d04e2c677e444f/embed?autospin=1&autostart=1&ui_theme=dark>`}
      />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <button className={styles.frameButton}>
        <div className={styles.rectangleDiv4} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </button>
      <i className={styles.teslaMumbai}>Tesla Mumbai</i>
      <i className={styles.specsAndPrice}>Specs and Price</i>
      <i className={styles.dualMotorI}>Dual Motor</i>
      <i className={styles.crRsI}>2.12 Cr Rs</i>
      <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
      <i className={styles.dealersNearYou}>Dealers Near You</i>
      <div className={styles.rectangleDiv5} />
      <button className={styles.frameButton1} onClick={onFrameButton1Click}>
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-19.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-29.svg" />
      </button>
      <div className={styles.frameDiv}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector46.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector47.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector48.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector49.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector50.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro17;
