import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onGetStartedTextClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
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
    <div className={styles.frameDiv}>
      <div className={styles.iPhone14Pro6}>
        <div className={styles.rectangleDiv} />
        <i className={styles.youAreInTheRightPlace} data-animate-on-scroll>
          <p className={styles.blankLineP}>&nbsp;</p>
          <p className={styles.youAreIn}>You are in the right place.</p>
        </i>
        <div
          className={styles.frameDiv1}
          onClick={onFrameContainerClick}
          data-animate-on-scroll
        >
          <div
            className={styles.rectangleDiv1}
            onClick={onRectangle1Click}
            data-animate-on-scroll
          />
          <i className={styles.getStartedI} onClick={onGetStartedTextClick}>
            Get Started
          </i>
        </div>
        <i className={styles.wantToKnowAboutTheHottest} data-animate-on-scroll>
          Want to know about the hottest deals on exotics/daily drivers for a
          bang for buck?
        </i>
      </div>
      <img
        className={styles.image1Icon}
        alt=""
        src="../image-1@2x.png"
        data-animate-on-scroll
      />
    </div>
  );
};

export default FrameComponent;
