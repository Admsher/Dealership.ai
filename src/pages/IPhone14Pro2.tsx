import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro2.module.css";

const IPhone14Pro2: FunctionComponent = () => {
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
    <div className={styles.iphone14Pro2}>
      <div className={styles.audiParent}>
        <i className={styles.audi}>Audi</i>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-117.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-216.svg" />
        </button>
        <iframe
          className={styles.frameInner}
          src={`https://sketchfab.com/models/807c3c1580ee4ad58903548093a49511/embed?autospin=1&autostart=1>`}
        />
        <div className={styles.r8ETronWrapper}>
          <i className={styles.r8ETron}>R8 e-Tron</i>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-77.svg" />
        <div className={styles.crRsParent}>
          <i className={styles.crRs}>1.74Cr Rs</i>
          <i className={styles.crRs1}>2.12 Cr Rs</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.v12}>V12</i>
          <i className={styles.v8}>V8</i>
        </div>
      </div>
      <div className={styles.audiMumbaiParent}>
        <i className={styles.audiMumbai}>Audi Mumbai</i>
        <i className={styles.sheepey}>Sheepey</i>
        <i className={styles.lectro}>Lectro</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <button
          className={styles.rectangleContainer}
          onClick={onFrameButton2Click}
        >
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <button className={styles.frameButton} onClick={onFrameButton3Click}>
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild5} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector101.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector102.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector103.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector104.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector105.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro2;
