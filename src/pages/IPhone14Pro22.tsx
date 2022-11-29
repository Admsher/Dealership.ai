import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro22.module.css";

const IPhone14Pro22: FunctionComponent = () => {
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
    <div className={styles.iPhone14Pro22}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <i className={styles.formula1I}>Formula 1</i>
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-14.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-24.svg" />
      </button>
      <i className={styles.lM2568I}>LM 2568</i>
      <iframe
        className={styles.rectangleIframe}
        src={`https://sketchfab.com/models/ed9da2a486164942a4a092bd223efcfa/embed?autospin=1&autostart=1&ui_theme=dark>`}
      />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-9.svg" />
      <i className={styles.racers111I}>Racers11.1</i>
      <i className={styles.specsAndPrice}>Specs and Price</i>
      <i className={styles.v6NosInjected}>V6 Nos Injected</i>
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
          <img className={styles.vectorIcon} alt="" src="../vector21.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector22.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector23.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector24.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector25.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro22;
