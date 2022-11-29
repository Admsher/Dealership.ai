import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  const navigate = useNavigate();

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
    <div className={styles.frameDiv}>
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
      <i className={styles.volkswagonI}>Volkswagon</i>
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
        src="../screenshot-1821@2x.png"
      />
      <img
        className={styles.screenshot181Icon}
        alt=""
        src="../screenshot-1811@2x.png"
      />
      <img
        className={styles.screenshot186Icon}
        alt=""
        src="../screenshot-1861@2x.png"
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
        src="../screenshot-1901@2x.png"
      />
    </div>
  );
};

export default FrameComponent1;
