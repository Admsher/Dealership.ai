import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro10.module.css";

const IPhone14Pro10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-43");
  }, [navigate]);

  const onAftermarketButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-42");
  }, [navigate]);

  const onIconChevronLeftClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onEverydayButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-41");
  }, [navigate]);

  return (
    <div className={styles.iPhone14Pro10}>
      <div className={styles.rectangleDiv} />
      <i className={styles.selectFilters}>Select Filters</i>
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButtonClick}
      />
      <button className={styles.rectangleButton1} />
      <i className={styles.exotics}>
        <p className={styles.exoticsP}>Exotics</p>
      </i>
      <div className={styles.rectangleDiv1} />
      <button
        className={styles.aftermarketButton}
        onClick={onAftermarketButtonClick}
      >
        <p className={styles.exoticsP}>Aftermarket</p>
      </button>
      <button
        className={styles.iconChevronLeft}
        onClick={onIconChevronLeftClick}
      >
        <img className={styles.vectorIcon} alt="" src="../vector78.svg" />
      </button>
      <button className={styles.everydayButton} onClick={onEverydayButtonClick}>
        Everyday
      </button>
    </div>
  );
};

export default IPhone14Pro10;
