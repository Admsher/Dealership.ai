import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro19.module.css";

const IPhone14Pro19: FunctionComponent = () => {
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
    <div className={styles.iphone14Pro19}>
      <div className={styles.mercedesParent}>
        <i className={styles.mercedes}>Mercedes</i>
        <i className={styles.gWagon}>G Wagon</i>
        <iframe
          className={styles.frameChild}
          src={`https://sketchfab.com/models/40570e04d85642c886b0ff64ca9b44dd/embed?autospin=1&autostart=1>`}
        />
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameItem} alt="" src="../ellipse-17.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user7.svg" />
          <img className={styles.frameInner} alt="" src="../ellipse-27.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-73.svg" />
        <div className={styles.frameChild1} />
        <div className={styles.w12Parent}>
          <i className={styles.w12}>W12</i>
          <i className={styles.crRs}>2.12 Cr Rs</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.specsAndPrice}>Specs and Price</i>
        </div>
      </div>
      <div className={styles.frameParent}>
        <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <i className={styles.mercedes1}>Mercedes</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
      </div>
      <div className={styles.iphone14Pro19Inner}>
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector34.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector35.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector36.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector37.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector38.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro19;
