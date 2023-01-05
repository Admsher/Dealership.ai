import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro29.module.css";

const IPhone14Pro29: FunctionComponent = () => {
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
    <div className={styles.iphone14Pro29}>
      <div className={styles.alfaRomeoParent}>
        <i className={styles.alfaRomeo}>Alfa Romeo</i>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-113.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-212.svg" />
        </button>
        <i className={styles.v6Ti}>155 V6 Ti</i>
        <iframe
          className={styles.frameInner}
          src={`https://sketchfab.com/models/9ddd7288e623478685443145e0705cdf/embed?autospin=1&autostart=1>`}
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <i className={styles.v10}>V10</i>
        <i className={styles.specsAndPrice}>Specs and Price</i>
        <i className={styles.v12}>V12</i>
        <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
        <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-93.svg" />
        <i className={styles.crRs}>2.12 Cr Rs</i>
        <i className={styles.crRs1}>1.74Cr Rs</i>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild2} />
        <i className={styles.alfaRomeo1}>Alfa Romeo</i>
        <i className={styles.royaltyExotics}>Royalty Exotics</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild3} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameChild3} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameChild5} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector81.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector82.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector83.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector84.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector85.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro29;
