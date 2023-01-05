import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro5.module.css";

const IPhone14Pro5: FunctionComponent = () => {
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
    <div className={styles.iphone14Pro5}>
      <div className={styles.lamborginiParent}>
        <i className={styles.lamborgini}>Lamborgini</i>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-114.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-213.svg" />
        </button>
        <i className={styles.huracan}>Huracan</i>
        <div className={styles.vectorParent}>
          <iframe
            className={styles.frameInner}
            src={`https://sketchfab.com/models/c1da06c7bc9a4cbd87d336094f060609/embed?autospin=1&autostart=1>`}
          />
          <a
            className={styles.iconsaxboldyoutube}
            href="https://www.youtube.com/watch?v=DvKSQXsDHcI"
            data-animate-on-scroll
          >
            <img className={styles.vectorIcon} alt="" src="../vector46.svg" />
          </a>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-94.svg" />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild1} />
          <i className={styles.crRs}>1.74Cr Rs</i>
          <i className={styles.crRs1}>2.12 Cr Rs</i>
          <i className={styles.inclusiveOfTaxes}>Inclusive of Taxes</i>
          <i className={styles.inclusiveOfTaxes1}>Inclusive of Taxes</i>
          <i className={styles.specsAndPrice}>Specs and Price</i>
          <i className={styles.v12}>V12</i>
          <i className={styles.v8}>V8</i>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild2} />
        <i className={styles.automobiliLamborgini}>Automobili Lamborgini</i>
        <i className={styles.royaltyExotics}>Royalty Exotics</i>
        <i className={styles.dealersNearYou}>Dealers Near You</i>
        <button className={styles.frameButton} onClick={onFrameButton1Click}>
          <div className={styles.frameChild3} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
        <button
          className={styles.rectangleParent1}
          onClick={onFrameButton2Click}
        >
          <div className={styles.frameChild3} />
          <i className={styles.contact}>
            <p className={styles.contact1}>Contact</p>
          </i>
        </button>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild5} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon1} alt="" src="../vector87.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon1} alt="" src="../vector88.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon3} alt="" src="../vector89.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector90.svg" />
            <img className={styles.vectorIcon5} alt="" src="../vector91.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro5;
