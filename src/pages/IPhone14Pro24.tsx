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

  const onIconHomeButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-43");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-3");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-5");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/iphone-14-pro-2");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/iphone-14-pro-23");
  }, [navigate]);

  return (
    <div className={styles.iPhone14Pro24}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.rectangleDiv} />
          <button className={styles.frameButton} onClick={onFrameButtonClick}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-12.svg"
            />
            <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
            <img
              className={styles.ellipseIcon1}
              alt=""
              src="../ellipse-22.svg"
            />
          </button>
          <i className={styles.exotics}>Exotics</i>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-22.svg"
          />
          <i className={styles.locationChurchGate}>Location: ChurchGate</i>
          <div className={styles.rectangleDiv1} />
          <i className={styles.tasteTheLuxuryWithSpeedAt}>
            {" "}
            Taste the luxury with speed at the same time
          </i>
          <button className={styles.frameButton1} onClick={onFrameButton1Click}>
            <i className={styles.filters}>Filters</i>
          </button>
          <div className={styles.frameDiv2}>
            <button
              className={styles.iconHomeButton}
              onClick={onIconHomeButtonClick}
            >
              <img className={styles.vectorIcon} alt="" src="../vector11.svg" />
            </button>
            <button
              className={styles.iconCommentSquare}
              onClick={onIconCommentSquareClick}
            >
              <img className={styles.vectorIcon} alt="" src="../vector12.svg" />
            </button>
            <button
              className={styles.iconMenuButton}
              onClick={onIconMenuButtonClick}
            >
              <img
                className={styles.vectorIcon2}
                alt=""
                src="../vector13.svg"
              />
              <img
                className={styles.vectorIcon3}
                alt=""
                src="../vector14.svg"
              />
              <img
                className={styles.vectorIcon4}
                alt=""
                src="../vector15.svg"
              />
            </button>
          </div>
          <div className={styles.frameDiv3}>
            <button
              className={styles.rectangleButton}
              onClick={onRectangleButtonClick}
            />
            <i className={styles.ferrari}>Ferrari</i>
            <button
              className={styles.rectangleButton1}
              onClick={onRectangleButton1Click}
            />
            <button
              className={styles.rectangleButton2}
              onClick={onRectangleButton2Click}
            />
            <i className={styles.audi}>Audi</i>
            <i className={styles.lamborgini}>Lamborgini</i>
            <button
              className={styles.rectangleButton3}
              onClick={onRectangleButton3Click}
            />
            <i className={styles.astonMartin}>Aston Martin</i>
            <img
              className={styles.screenshot165Icon}
              alt=""
              src="../screenshot-165@2x.png"
            />
            <img
              className={styles.screenshot178Icon}
              alt=""
              src="../screenshot-178@2x.png"
            />
            <img
              className={styles.screenshot175Icon}
              alt=""
              src="../screenshot-175@2x.png"
            />
            <img
              className={styles.screenshot184Icon}
              alt=""
              src="../screenshot-184@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro24;
