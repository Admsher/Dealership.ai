import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro22.module.css";

const IPhone14Pro22: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-30");
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
    <div className={styles.iphone14Pro22}>
      <div className={styles.formula1Parent}>
        <i className={styles.formula1}>Formula 1</i>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-14.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-24.svg" />
        </button>
        <i className={styles.lm2568}>LM 2568</i>
        <iframe
          className={styles.frameInner}
          src={`https://sketchfab.com/models/ed9da2a486164942a4a092bd223efcfa/embed?autospin=1&autostart=1&ui_theme=dark>`}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameDiv} />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-9.svg" />
        <div className={styles.frameChild1} />
        <div className={styles.specsAndPriceParent}>
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.v6NosInjected}>V6 Nos Injected</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.crRs}>2.12 Cr Rs</i>
        </div>
      </div>
      <div className={styles.racers111Parent}>
        <i className={styles.racers111}>Racers11.1</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <div className={styles.frameChild3} />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild4} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector21.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon1} alt="" src="../vector22.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" />
            <img className={styles.vectorIcon3} alt="" />
            <img className={styles.vectorIcon4} alt="" src="../vector23.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro22;
