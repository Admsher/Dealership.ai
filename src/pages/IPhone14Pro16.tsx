import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro16.module.css";

const IPhone14Pro16: FunctionComponent = () => {
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
    <div className={styles.iPhone14Pro16}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <i className={styles.nissan}>Nissan</i>
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-110.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-210.svg" />
      </button>
      <i className={styles.gTRGT3I}>GTR GT3</i>
      <iframe
        className={styles.rectangleIframe}
        src={`https://sketchfab.com/models/12eb5aa466d64490943c6c5d5e60c660/embed?autospin=1&autostart=1>`}
      />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-91.svg" />
      <i className={styles.koshbinGarages}>Koshbin Garages</i>
      <i className={styles.specsAndPrice}>Specs and Price</i>
      <i className={styles.v6Ti}>155 V6 Ti</i>
      <i className={styles.crRsI}>2.12 Cr Rs</i>
      <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
      <i className={styles.dealersNearYou}>Dealers Near You</i>
      <div className={styles.rectangleDiv4} />
      <div className={styles.frameDiv}>
        <div className={styles.rectangleDiv5} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv1}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector51.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector52.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector53.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector54.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector55.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro16;
