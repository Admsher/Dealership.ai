import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro27.module.css";

const IPhone14Pro27: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconChevronLeftClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
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
    <div className={styles.iPhone14Pro27}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <img
        className={styles.image1Icon}
        alt=""
        src="../image-11@2x.png"
        data-animate-on-scroll
      />
      <textarea className={styles.rectangleTextarea} />
      <img className={styles.rectangleIcon} alt="" src="../rectangle-27.svg" />
      <i className={styles.fFFCollection}>FFF Collection</i>
      <div className={styles.rectangleDiv2} />
      <button
        className={styles.iconChevronLeft}
        onClick={onIconChevronLeftClick}
      >
        <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      </button>
      <div className={styles.rectangleDiv3} />
      <i className={styles.helloIWasWonderingIfYou}>
        <p className={styles.helloIWas}>
          Hello. I was wondering if you still have the car listed with you . Im
          interested to put up an offer
        </p>
      </i>
      <div className={styles.rectangleDiv4} />
      <i className={styles.sorryWeJustSoldTheRideB}>
        Sorry we just sold the ride, but we can be in contact for further deals
        if you would like.
      </i>
    </div>
  );
};

export default IPhone14Pro27;
