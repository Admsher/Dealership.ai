import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro16.module.css";

const IPhone14Pro16: FunctionComponent = () => {
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
    <div className={styles.iphone14Pro16}>
      <div className={styles.nissanParent}>
        <i className={styles.nissan}>Nissan</i>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-110.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-210.svg" />
        </button>
        <i className={styles.gtrGt3}>GTR GT3</i>
        <iframe
          className={styles.frameInner}
          src={`https://sketchfab.com/models/12eb5aa466d64490943c6c5d5e60c660/embed?autospin=1&autostart=1>`}
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-91.svg" />
        <div className={styles.frameDiv} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild1} />
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.v6Ti}>155 V6 Ti</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.crRs}>2.12 Cr Rs</i>
        </div>
      </div>
      <div className={styles.koshbinGaragesParent}>
        <i className={styles.koshbinGarages}>Koshbin Garages</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <button
          className={styles.rectangleContainer}
          onClick={onFrameButton1Click}
        >
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameChild3} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector52.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector53.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector54.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector55.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector56.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro16;
