import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro3.module.css";

const IPhone14Pro3: FunctionComponent = () => {
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
    <div className={styles.iphone14Pro3}>
      <div className={styles.frameParent}>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-116.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-215.svg" />
        </button>
        <div className={styles.ferrariParent}>
          <i className={styles.ferrari}>Ferrari</i>
          <i className={styles.italia}>458 Italia</i>
        </div>
        <div className={styles.rectangleParent}>
          <iframe
            className={styles.frameInner}
            src={`https://sketchfab.com/models/3a504c1f75e0492ab2d55b8c1cf5789d/embed?autospin=1&autostart=1&ui_theme=dark>`}
          />
          <a
            className={styles.iconsaxboldyoutube}
            href="https://www.youtube.com/watch?v=k9Br6f_BCVc"
            data-animate-on-scroll
          >
            <img className={styles.vectorIcon} alt="" src="../vector46.svg" />
          </a>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-76.svg" />
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild1} />
          <i className={styles.v10}>V10</i>
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.v12}>V12</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
          <i className={styles.crRs}>1.74Cr Rs</i>
          <i className={styles.crRs1}>2.12 Cr Rs</i>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild2} />
        <i className={styles.ferrariMumbai}>Ferrari Mumbai</i>
        <i className={styles.scuderia}>Scuderia</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <div className={styles.frameGroup}>
          <textarea className={styles.frameTextarea} />
          <iframe
            className={styles.frameIframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.9075535202633!2d-117.18868315540445!3d33.529789124625694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca10fcaa9ebdd%3A0xb063240283d8314c!2sSheepey%20Race!5e0!3m2!1sen!2sin!4v1672331549369!5m2!1sen!2sin"
          />
          <i className={styles.contact}>Contact</i>
        </div>
        <div className={styles.frameChild3} />
        <button className={styles.frameButton} onClick={onFrameButton1Click}>
          <div className={styles.frameChild4} />
          <i className={styles.contact1}>
            <p className={styles.contact2}>Contact</p>
          </i>
        </button>
        <button
          className={styles.rectangleParent1}
          onClick={onFrameButton2Click}
        >
          <div className={styles.frameChild4} />
          <i className={styles.contact1}>
            <p className={styles.contact2}>Contact</p>
          </i>
        </button>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.frameChild6} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon1} alt="" src="../vector98.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon1} alt="" src="../vector99.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon3} alt="" src="../vector100.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector101.svg" />
            <img className={styles.vectorIcon5} alt="" src="../vector102.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro3;
