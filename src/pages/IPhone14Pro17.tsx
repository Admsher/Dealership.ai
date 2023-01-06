import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro17.module.css";

const IPhone14Pro17: FunctionComponent = () => {
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

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.iphone14Pro17}>
      <div className={styles.teslaParent}>
        <i className={styles.tesla}>Tesla</i>
        <i className={styles.model3}>Model 3</i>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-19.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-29.svg" />
        </button>
        <div className={styles.vectorParent}>
          <iframe
            className={styles.frameInner}
            src={`https://sketchfab.com/models/5ef9b845aaf44203b6d04e2c677e444f/embed?autospin=1&autostart=1&ui_theme=dark>`}
          />
          <a
            className={styles.iconsaxboldyoutube}
            href="https://www.youtube.com/watch?v=Q4VGQPk2Dl8"
            data-animate-on-scroll
          >
            <img className={styles.vectorIcon} alt="" src="../vector44.svg" />
          </a>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-75.svg" />
        <div className={styles.frameChild1} />
        <div className={styles.specsAndPriceParent}>
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.dualMotor}>Dual Motor</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.crRs}>2.12 Cr Rs</i>
        </div>
      </div>
      <div className={styles.frameParent}>
        <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
          <div className={styles.frameChild2} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <i className={styles.teslaMumbai}>Tesla Mumbai</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild3} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon1} alt="" src="../vector45.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon1} alt="" src="../vector46.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon3} alt="" src="../vector47.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector48.svg" />
            <img className={styles.vectorIcon5} alt="" src="../vector49.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro17;
