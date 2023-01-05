import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro30.module.css";

const IPhone14Pro30: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconChevronLeftClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onMessageClick = useCallback(() => {
    navigate("/iphone-14-pro-27");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-27");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onIconMenuClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro30}>
      <div className={styles.contactParent}>
        <i className={styles.contact}>Contact</i>
        <iframe
          className={styles.frameChild}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8725726299776!2d-117.1865021233411!3d33.53069854508768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca10fcaa9ebdd%3A0xb063240283d8314c!2sSheepey%20Race!5e0!3m2!1sen!2sin!4v1672489791207!5m2!1sen!2sin"
        />
        <div className={styles.frameItem} />
        <button
          className={styles.iconChevronLeft}
          onClick={onIconChevronLeftClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector69.svg" />
        </button>
        <i className={styles.mobile2341409875674}>Mobile:234-1409875674</i>
        <i className={styles.available700hrsTo}>Available: 700hrs to 1900hrs</i>
        <button className={styles.rectangleParent} onClick={onFrameButtonClick}>
          <div className={styles.frameInner} />
          <button className={styles.message} onClick={onMessageClick}>
            Message
          </button>
        </button>
      </div>
      <div className={styles.iphone14Pro30Inner}>
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector70.svg" />
          </button>
          <button className={styles.iconCommentSquare}>
            <img className={styles.vectorIcon} alt="" src="../vector71.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon3} alt="" src="../vector72.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector73.svg" />
            <img className={styles.vectorIcon5} alt="" src="../vector74.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro30;
