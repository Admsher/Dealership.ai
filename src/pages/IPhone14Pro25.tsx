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

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-20");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-19");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/iphone-14-pro-21");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/iphone-14-pro-17");
  }, [navigate]);

  const onRectangleButton4Click = useCallback(() => {
    navigate("/iphone-14-pro-18");
  }, [navigate]);

  const onRectangleButton5Click = useCallback(() => {
    navigate("/iphone-14-pro-1");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/iphone-14-pro-41");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro25}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
            <img className={styles.frameChild} alt="" src="../ellipse-1.svg" />
            <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
            <img className={styles.frameItem} alt="" src="../ellipse-2.svg" />
          </button>
          <i className={styles.everyday}>Everyday</i>
          <img className={styles.frameInner} alt="" src="../rectangle-2.svg" />
          <button
            className={styles.filtersWrapper}
            onClick={onFrameButton1Click}
          >
            <i className={styles.filters}>Filters</i>
          </button>
          <i className={styles.feelLikeBuying}>
            {" "}
            Feel like buying groceries/Attending meetings in a sexy ride
          </i>
        </div>
        <div className={styles.frameWrapper}>
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
            <button
              className={styles.frameChild4}
              onClick={onRectangleButton4Click}
            />
            <button
              className={styles.frameChild5}
              onClick={onRectangleButton5Click}
            />
            <img
              className={styles.screenshot190Icon}
              alt=""
              src="../screenshot-190@2x.png"
            />
            <img
              className={styles.screenshot191Icon}
              alt=""
              src="../screenshot-191@2x.png"
            />
            <img
              className={styles.screenshot180Icon}
              alt=""
              src="../screenshot-180@2x.png"
            />
            <img
              className={styles.screenshot186Icon}
              alt=""
              src="../screenshot-186@2x.png"
            />
            <img
              className={styles.screenshot181Icon}
              alt=""
              src="../screenshot-181@2x.png"
            />
            <img
              className={styles.screenshot182Icon}
              alt=""
              src="../screenshot-182@2x.png"
            />
            <i className={styles.bmw}>BMW</i>
            <i className={styles.toyota}>Toyota</i>
            <i className={styles.mercedes}>Mercedes</i>
            <i className={styles.honda}>Honda</i>
            <i className={styles.tesla}>Tesla</i>
            <i className={styles.nissan}>Nissan</i>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.iconHomeParent}>
            <button className={styles.iconHome} onClick={onIconHomeClick}>
              <img className={styles.vectorIcon} alt="" src="../vector1.svg" />
            </button>
            <button
              className={styles.iconCommentSquare}
              onClick={onIconCommentSquareClick}
            >
              <img className={styles.vectorIcon} alt="" src="../vector2.svg" />
            </button>
            <button className={styles.iconMenu} onClick={onIconMenuClick}>
              <img className={styles.vectorIcon2} alt="" src="../vector3.svg" />
              <img className={styles.vectorIcon3} alt="" src="../vector4.svg" />
              <img className={styles.vectorIcon4} alt="" src="../vector5.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro25;
