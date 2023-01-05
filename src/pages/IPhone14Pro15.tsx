import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro15.module.css";

const IPhone14Pro15: FunctionComponent = () => {
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
    <div className={styles.iphone14Pro15}>
      <div className={styles.audiParent}>
        <i className={styles.audi}>Audi</i>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-111.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-211.svg" />
        </button>
        <i className={styles.r8LmV10}>R8 LM V10+</i>
        <iframe
          className={styles.frameInner}
          src={`https://sketchfab.com/models/68e525eb6e3c4476b09da2c498afb81b/embed?autospin=1&autostart=1>`}
        />
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.specsAndPriceParent}>
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.v6Ti}>155 V6 Ti</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.crRs}>2.12 Cr Rs</i>
        </div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-92.svg" />
      </div>
      <div className={styles.fffCollectionParent}>
        <i className={styles.fffCollection}>FFF Collection</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild3} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector57.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector58.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector59.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector60.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector61.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro15;
