import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro15.module.css";

const IPhone14Pro15: FunctionComponent = () => {
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
    <div className={styles.iPhone14Pro15}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <i className={styles.audi}>Audi</i>
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-111.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-211.svg" />
      </button>
      <i className={styles.r8LMV10}>R8 LM V10+</i>
      <iframe
        className={styles.rectangleIframe}
        src={`https://sketchfab.com/models/68e525eb6e3c4476b09da2c498afb81b/embed?autospin=1&autostart=1>`}
      />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-92.svg" />
      <i className={styles.fFFCollection}>FFF Collection</i>
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
          <img className={styles.vectorIcon} alt="" src="../vector56.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector57.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector58.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector59.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector60.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro15;
