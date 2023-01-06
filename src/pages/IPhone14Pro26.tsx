import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro26.module.css";

const IPhone14Pro26: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
  }, [navigate]);

  const onFiltersClick = useCallback(() => {
    navigate("/iphone-14-pro-10");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-15");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/iphone-14-pro-16");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/iphone-14-pro-22");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/iphone-14-pro-42");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro26}>
      <div className={styles.frameParent}>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-11.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-21.svg" />
        </button>
        <i className={styles.aftermarket}>Aftermarket</i>
        <i className={styles.forSeriousCar}>
          For serious car collectors/drivers with a nut loose.
        </i>
        <div className={styles.vectorParent}>
          <img className={styles.frameInner} alt="" src="../rectangle-3.svg" />
          <button className={styles.filters} onClick={onFiltersClick}>
            Filters
          </button>
        </div>
      </div>
      <div className={styles.iphone14Pro26Inner}>
        <div className={styles.rectangleParent}>
          <button
            className={styles.rectangleButton}
            onClick={onRectangleButtonClick}
          />
          <button className={styles.frameChild1} />
          <button
            className={styles.frameChild2}
            onClick={onRectangleButton2Click}
          />
          <button
            className={styles.frameChild3}
            onClick={onRectangleButton3Click}
          />
          <i className={styles.alfaRomeo}>Alfa Romeo</i>
          <i className={styles.audi}>Audi</i>
          <i className={styles.nissan}>Nissan</i>
          <i className={styles.lm2568}>LM2568</i>
          <img
            className={styles.screenshot176Icon}
            alt=""
            src="../screenshot-176@2x.png"
          />
          <img
            className={styles.screenshot177Icon}
            alt=""
            src="../screenshot-177@2x.png"
          />
          <img
            className={styles.screenshot179Icon}
            alt=""
            src="../screenshot-179@2x.png"
          />
          <img
            className={styles.screenshot183Icon}
            alt=""
            src="../screenshot-183@2x.png"
          />
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector6.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector7.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector8.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector9.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector10.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro26;
