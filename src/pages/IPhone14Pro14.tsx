import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro14.module.css";

const IPhone14Pro14: FunctionComponent = () => {
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
    <div className={styles.iphone14Pro14}>
      <div className={styles.iphone14Pro14Child} />
      <div className={styles.iphone14Pro14Item} />
      <i className={styles.alfaRomeo}>Alfa Romeo</i>
      <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
        <img className={styles.frameChild} alt="" src="../ellipse-119.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user18.svg" />
        <img className={styles.frameItem} alt="" src="../ellipse-218.svg" />
      </button>
      <i className={styles.v6Ti}>155 V6 Ti</i>
      <iframe
        className={styles.iphone14Pro14Inner}
        src={`https://sketchfab.com/models/9ddd7288e623478685443145e0705cdf/embed?autospin=1&autostart=1>`}
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.iphone14Pro14Child1} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-95.svg" />
      <i className={styles.romeoItalia}>Romeo Italia</i>
      <i className={styles.specsAndPrice}>Specs and Price</i>
      <i className={styles.v6Ti1}>155 V6 Ti</i>
      <i className={styles.crRs}>2.12 Cr Rs</i>
      <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
      <i className={styles.dealersNearYou}>Dealers Near You</i>
      <div className={styles.iphone14Pro14Child2} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameInner} />
        <i className={styles.contact}>
          <p className={styles.contact1}>Contact</p>
        </i>
      </div>
      <div className={styles.iconHomeParent}>
        <button className={styles.iconHome} onClick={onIconHomeClick}>
          <img className={styles.vectorIcon} alt="" src="../vector112.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector113.svg" />
        </button>
        <button className={styles.iconMenu} onClick={onIconMenuClick}>
          <img className={styles.vectorIcon2} alt="" src="../vector114.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector115.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector116.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro14;
