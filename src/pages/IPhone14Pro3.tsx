import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro3.module.css";

const IPhone14Pro3: FunctionComponent = () => {
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
    <div className={styles.iPhone14Pro3}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle-1.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-76.svg" />
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-116.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-215.svg" />
      </button>
      <iframe
        className={styles.rectangleIframe}
        src={`https://sketchfab.com/models/3a504c1f75e0492ab2d55b8c1cf5789d/embed?autospin=1&autostart=1&ui_theme=dark>`}
      />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <i className={styles.ferrariMumbai}>Ferrari Mumbai</i>
      <i className={styles.scuderia}>Scuderia</i>
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
        <i className={styles.ferrari}>Ferrari</i>
        <i className={styles.italia}>458 Italia</i>
      </div>
      <div className={styles.frameDiv3}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector89.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector90.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector91.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector92.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector93.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro3;
