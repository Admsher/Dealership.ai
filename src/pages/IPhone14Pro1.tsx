import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro1.module.css";

const IPhone14Pro1: FunctionComponent = () => {
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
    <div className={styles.iPhone14Pro1}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-78.svg" />
      <i className={styles.nissan}>Nissan</i>
      <i className={styles.gTRR34I}>GTR R-34</i>
      <iframe
        className={styles.rectangleIframe}
        src={`https://sketchfab.com/models/3469dd54aeeb438e899bbc119297bf92/embed?autospin=1&autostart=1&ui_theme=dark>`}
      />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.frameDiv}>
        <div className={styles.rectangleDiv4} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv1}>
        <img className={styles.rectangleIcon} alt="" src="../rectangle-7.svg" />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.rectangleDiv4} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <i className={styles.nismoGarages}>Nismo Garages</i>
      <i className={styles.sheepeyI}>Sheepey</i>
      <i className={styles.jDMCalling}>JDM Calling</i>
      <i className={styles.cylTwinTurboRWD}>6 cyl. Twin Turbo RWD</i>
      <i className={styles.specsAndPrice}>Specs and Price</i>
      <i className={styles.cylTwinTurbo4WD}>6 cyl. Twin Turbo 4WD</i>
      <i className={styles.crRsI}>2.12 Cr Rs</i>
      <i className={styles.crRsI1}>1.74Cr Rs</i>
      <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
      <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
      <i className={styles.dealersNearYou}>Dealers Near You</i>
      <div className={styles.rectangleDiv6} />
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-118.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-217.svg" />
      </button>
      <div className={styles.frameDiv3}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector99.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector100.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector101.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector102.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector103.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro1;
