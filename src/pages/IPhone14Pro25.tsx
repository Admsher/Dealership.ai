import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro25.module.css";

const IPhone14Pro25: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-11");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-10");
  }, [navigate]);

  const onIconHomeButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-41");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-1");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-18");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/iphone-14-pro-17");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/iphone-14-pro-21");
  }, [navigate]);

  const onRectangleButton4Click = useCallback(() => {
    navigate("/iphone-14-pro-19");
  }, [navigate]);

  const onRectangleButton5Click = useCallback(() => {
    navigate("/iphone-14-pro-20");
  }, [navigate]);

  return (
    <div className={styles.iPhone14Pro25}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.rectangleDiv} />
          <button className={styles.frameButton} onClick={onFrameButtonClick}>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
            <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
            <img
              className={styles.ellipseIcon1}
              alt=""
              src="../ellipse-2.svg"
            />
          </button>
          <i className={styles.everydayI}>Everyday</i>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-2.svg"
          />
          <div className={styles.rectangleDiv1} />
          <i className={styles.feelLikeBuyingGroceriesAtt}>
            {" "}
            Feel like buying groceries/Attending meetings in a sexy ride
          </i>
          <button className={styles.frameButton1} onClick={onFrameButton1Click}>
            <i className={styles.filters}>Filters</i>
          </button>
          <div className={styles.frameDiv2}>
            <button
              className={styles.iconHomeButton}
              onClick={onIconHomeButtonClick}
            >
              <img className={styles.vectorIcon} alt="" src="../vector1.svg" />
            </button>
            <button
              className={styles.iconCommentSquare}
              onClick={onIconCommentSquareClick}
            >
              <img className={styles.vectorIcon} alt="" src="../vector2.svg" />
            </button>
            <button
              className={styles.iconMenuButton}
              onClick={onIconMenuButtonClick}
            >
              <img className={styles.vectorIcon2} alt="" src="../vector3.svg" />
              <img className={styles.vectorIcon3} alt="" src="../vector4.svg" />
              <img className={styles.vectorIcon4} alt="" src="../vector5.svg" />
            </button>
          </div>
          <div className={styles.frameDiv3}>
            <button
              className={styles.rectangleButton}
              onClick={onRectangleButtonClick}
            />
            <i className={styles.nissan}>Nissan</i>
            <button
              className={styles.rectangleButton1}
              onClick={onRectangleButton1Click}
            />
            <button
              className={styles.rectangleButton2}
              onClick={onRectangleButton2Click}
            />
            <i className={styles.teslaI}>Tesla</i>
            <i className={styles.hondaI}>Honda</i>
            <button
              className={styles.rectangleButton3}
              onClick={onRectangleButton3Click}
            />
            <button
              className={styles.rectangleButton4}
              onClick={onRectangleButton4Click}
            />
            <i className={styles.mercedesI}>Mercedes</i>
            <i className={styles.toyotaI}>Toyota</i>
            <button
              className={styles.rectangleButton5}
              onClick={onRectangleButton5Click}
            />
            <i className={styles.bMWI}>BMW</i>
            <img
              className={styles.screenshot182Icon}
              alt=""
              src="../screenshot-182@2x.png"
            />
            <img
              className={styles.screenshot181Icon}
              alt=""
              src="../screenshot-181@2x.png"
            />
            <img
              className={styles.screenshot186Icon}
              alt=""
              src="../screenshot-186@2x.png"
            />
            <img
              className={styles.screenshot180Icon}
              alt=""
              src="../screenshot-180@2x.png"
            />
            <img
              className={styles.screenshot191Icon}
              alt=""
              src="../screenshot-191@2x.png"
            />
            <img
              className={styles.screenshot190Icon}
              alt=""
              src="../screenshot-190@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro25;
