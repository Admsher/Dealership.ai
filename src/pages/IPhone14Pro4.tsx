import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro4.module.css";

const IPhone14Pro4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-10");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-3");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-1");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/iphone-14-pro-2");
  }, [navigate]);

  const onIconHomeButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iPhone14Pro4}>
      <div className={styles.rectangleDiv} />
      <button className={styles.frameButton} onClick={onFrameButtonClick}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-115.svg" />
        <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-214.svg" />
      </button>
      <i className={styles.welcomeI}>Welcome</i>
      <img className={styles.rectangleIcon} alt="" src="../rectangle-23.svg" />
      <i className={styles.locationChurchGate}>Location: ChurchGate</i>
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <i className={styles.trending}> Trending</i>
      <button className={styles.frameButton1} onClick={onFrameButton1Click}>
        <i className={styles.filters}>Filters</i>
      </button>
      <div className={styles.frameDiv}>
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
        <i className={styles.nissan}>Nissan</i>
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
          className={styles.screenshot191Icon}
          alt=""
          src="../screenshot-1911@2x.png"
        />
      </div>
      <div className={styles.frameDiv1}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector84.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector85.svg" />
        </button>
        <button
          className={styles.iconMenuButton}
          onClick={onIconMenuButtonClick}
        >
          <img className={styles.vectorIcon2} alt="" src="../vector86.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector87.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector88.svg" />
        </button>
      </div>
    </div>
  );
};

export default IPhone14Pro4;
