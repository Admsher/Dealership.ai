import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro1.module.css";

const IPhone14Pro1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-30");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/iphone-14-pro-30");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
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
    <div className={styles.iphone14Pro1}>
      <div className={styles.nissanParent}>
        <i className={styles.nissan}>Nissan</i>
        <i className={styles.gtrR34}>GTR R-34</i>
        <iframe
          className={styles.frameChild}
          src={`https://sketchfab.com/models/3469dd54aeeb438e899bbc119297bf92/embed?autospin=1&autostart=1&ui_theme=dark>`}
        />
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameItem} alt="" src="../ellipse-118.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameInner} alt="" src="../ellipse-217.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-78.svg" />
        <div className={styles.frameChild1} />
        <div className={styles.cylTwinTurboRwdParent}>
          <i className={styles.cylTwinTurbo}>6 cyl. Twin Turbo RWD</i>
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.cylTwinTurbo1}>6 cyl. Twin Turbo 4WD</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
          <i className={styles.crRs}>2.12 Cr Rs</i>
          <i className={styles.crRs1}>1.74Cr Rs</i>
        </div>
      </div>
      <div className={styles.frameParent}>
        <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <button className={styles.vectorParent} onClick={onFrameButton2Click}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-7.svg"
          />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <button
          className={styles.rectangleContainer}
          onClick={onFrameButton3Click}
        >
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <i className={styles.nismoGarages}>Nismo Garages</i>
        <i className={styles.sheepey}>Sheepey</i>
        <i className={styles.jdmCalling}>JDM Calling</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild4} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector108.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector109.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector110.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector111.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector112.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro1;
