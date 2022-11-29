import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro5.module.css";

const IPhone14Pro5: FunctionComponent = () => {
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
    <div className={styles.iPhone14Pro5}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <i className={styles.lamborgini}>Lamborgini</i>
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-114.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-213.svg" />
      </button>
      <i className={styles.huracanI}>Huracan</i>
      <iframe
        className={styles.rectangleIframe}
        src={`https://sketchfab.com/models/c1da06c7bc9a4cbd87d336094f060609/embed?autospin=1&autostart=1>`}
      />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-94.svg" />
      <i className={styles.automobiliLamborgini}>Automobili Lamborgini</i>
      <i className={styles.royaltyExotics}>Royalty Exotics</i>
      <i className={styles.v10I}>V10</i>
      <i className={styles.specsAndPrice}>Specs and Price</i>
      <i className={styles.v12I}>V12</i>
      <i className={styles.crRsI}>2.12 Cr Rs</i>
      <i className={styles.crRsI1}>1.74Cr Rs</i>
      <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
      <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
      <i className={styles.dealersNearYou}>Dealers Near You</i>
      <div className={styles.rectangleDiv4} />
      <div className={styles.frameDiv}>
        <div className={styles.rectangleDiv5} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv1}>
        <div className={styles.rectangleDiv5} />
        <i className={styles.contactI}>
          <p className={styles.contactP}>Contact</p>
        </i>
      </div>
      <div className={styles.frameDiv2}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector79.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector80.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector81.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector82.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector83.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro5;
