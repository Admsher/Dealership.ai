import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro2.module.css";

const IPhone14Pro2: FunctionComponent = () => {
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
    <div className={styles.iPhone14Pro2}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle-12.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-77.svg" />
      <i className={styles.audi}>Audi</i>
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-117.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-216.svg" />
      </button>
      <iframe
        className={styles.rectangleIframe}
        src={`https://sketchfab.com/models/807c3c1580ee4ad58903548093a49511/embed?autospin=1&autostart=1>`}
      />
      <div className={styles.rectangleDiv1} />
      <i className={styles.audiMumbai}>Audi Mumbai</i>
      <i className={styles.sheepeyI}>Sheepey</i>
      <i className={styles.lectroI}>Lectro</i>
      <i className={styles.v8I}>V8</i>
      <i className={styles.specsAndPrice}>Specs and Price</i>
      <i className={styles.v12I}>V12</i>
      <i className={styles.crRsI}>2.12 Cr Rs</i>
      <i className={styles.crRsI1}>1.74Cr Rs</i>
      <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
      <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
      <i className={styles.dealersNearYou}>Dealers Near You</i>
      <div className={styles.rectangleDiv2} />
      <div className={styles.frameDiv}>
        <div className={styles.rectangleDiv3} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv1}>
        <div className={styles.rectangleDiv3} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.rectangleDiv3} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv3}>
        <i className={styles.r8ETronI}>R8 e-Tron</i>
      </div>
      <div className={styles.frameDiv4}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector94.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector95.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector96.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector97.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector98.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro2;
