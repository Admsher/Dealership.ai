import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro26.module.css";

const IPhone14Pro26: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-10");
  }, [navigate]);

  const onIconHomeButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-42");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-14");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-16");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/iphone-14-pro-15");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/iphone-14-pro-22");
  }, [navigate]);

  return (
    <div className={styles.iPhone14Pro26}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.rectangleDiv} />
          <button className={styles.frameButton} onClick={onFrameButtonClick}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-11.svg"
            />
            <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
            <img
              className={styles.ellipseIcon1}
              alt=""
              src="../ellipse-21.svg"
            />
          </button>
          <i className={styles.aftermarketI}>Aftermarket</i>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-21.svg"
          />
          <div className={styles.rectangleDiv1} />
          <i className={styles.forSeriousCarCollectorsdri}>
            For serious car collectors/drivers with a nut loose.
          </i>
          <button className={styles.frameButton1} onClick={onFrameButton1Click}>
            <i className={styles.filters}>Filters</i>
          </button>
          <div className={styles.frameDiv2}>
            <button
              className={styles.iconHomeButton}
              onClick={onIconHomeButtonClick}
            >
              <img className={styles.vectorIcon} alt="" src="../vector6.svg" />
            </button>
            <button
              className={styles.iconCommentSquare}
              onClick={onIconCommentSquareClick}
            >
              <img className={styles.vectorIcon} alt="" src="../vector7.svg" />
            </button>
            <button
              className={styles.iconMenuButton}
              onClick={onIconMenuButtonClick}
            >
              <img className={styles.vectorIcon2} alt="" src="../vector8.svg" />
              <img className={styles.vectorIcon3} alt="" src="../vector9.svg" />
              <img
                className={styles.vectorIcon4}
                alt=""
                src="../vector10.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv3}>
        <button
          className={styles.rectangleButton}
          onClick={onRectangleButtonClick}
        />
        <i className={styles.alfaRomeoI}>Alfa Romeo</i>
        <button
          className={styles.rectangleButton1}
          onClick={onRectangleButton1Click}
        />
        <button
          className={styles.rectangleButton2}
          onClick={onRectangleButton2Click}
        />
        <i className={styles.audi}>Audi</i>
        <i className={styles.nissan}>Nissan</i>
        <button
          className={styles.rectangleButton3}
          onClick={onRectangleButton3Click}
        />
        <i className={styles.lM2568I}>LM2568</i>
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
  );
};

export default IPhone14Pro26;
