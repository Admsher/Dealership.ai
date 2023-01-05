import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro24.module.css";

const IPhone14Pro24: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-10");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-23");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-2");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/iphone-14-pro-5");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/iphone-14-pro-3");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/iphone-14-pro-43");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro24}>
      <div className={styles.frameParent}>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-12.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-22.svg" />
        </button>
        <i className={styles.exotics}>Exotics</i>
        <img className={styles.frameInner} alt="" src="../rectangle-21.svg" />
        <i className={styles.tasteTheLuxury}>
          Taste the luxury with speed at the same time
        </i>
        <button className={styles.filtersWrapper} onClick={onFrameButton1Click}>
          <i className={styles.filters}>Filters</i>
        </button>
      </div>
      <div className={styles.iphone14Pro24Inner}>
        <div className={styles.rectangleParent}>
          <button
            className={styles.rectangleButton}
            onClick={onRectangleButtonClick}
          />
          <button
            className={styles.frameChild1}
            onClick={onRectangleButton1Click}
          />
          <button
            className={styles.frameChild2}
            onClick={onRectangleButton2Click}
          />
          <button
            className={styles.frameChild3}
            onClick={onRectangleButton3Click}
          />
          <img
            className={styles.screenshot184Icon}
            alt=""
            src="../screenshot-184@2x.png"
          />
          <img
            className={styles.screenshot175Icon}
            alt=""
            src="../screenshot-175@2x.png"
          />
          <img
            className={styles.screenshot178Icon}
            alt=""
            src="../screenshot-178@2x.png"
          />
          <img
            className={styles.screenshot165Icon}
            alt=""
            src="../screenshot-165@2x.png"
          />
          <i className={styles.astonMartin}>Aston Martin</i>
          <i className={styles.lamborgini}>Lamborgini</i>
          <i className={styles.audi}>Audi</i>
          <i className={styles.ferrari}>Ferrari</i>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector11.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector12.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector13.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector14.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector15.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro24;
