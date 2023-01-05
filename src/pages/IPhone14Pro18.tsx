import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro18.module.css";

const IPhone14Pro18: FunctionComponent = () => {
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
    <div className={styles.iphone14Pro18}>
      <div className={styles.hondaParent}>
        <i className={styles.honda}>Honda</i>
        <i className={styles.e}>E</i>
        <iframe
          className={styles.frameChild}
          src={`https://sketchfab.com/models/814cf3f8cfd64594b1c4f96e873c3cef/embed?autospin=1&autostart=1>`}
        />
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameItem} alt="" src="../ellipse-18.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameInner} alt="" src="../ellipse-28.svg" />
        </button>
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-74.svg" />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild1} />
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.cylinderDiesel}>4 cylinder diesel</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.crRs}>2.12 Cr Rs</i>
        </div>
      </div>
      <div className={styles.frameParent}>
        <button
          className={styles.rectangleContainer}
          onClick={onFrameButton1Click}
        >
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <i className={styles.hondaHallmark}>Honda Hallmark</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild3} />
          <div className={styles.iconHomeParent}>
            <button className={styles.iconHome} onClick={onIconHomeClick}>
              <img className={styles.vectorIcon} alt="" src="../vector41.svg" />
            </button>
            <button
              className={styles.iconCommentSquare}
              onClick={onIconCommentSquareClick}
            >
              <img className={styles.vectorIcon} alt="" src="../vector42.svg" />
            </button>
            <button className={styles.iconMenu} onClick={onIconMenuClick}>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="../vector43.svg"
              />
              <img
                className={styles.vectorIcon3}
                alt=""
                src="../vector44.svg"
              />
              <img
                className={styles.vectorIcon4}
                alt=""
                src="../vector45.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro18;
