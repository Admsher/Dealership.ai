import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro13.module.css";

const IPhone14Pro13: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconHomeButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  return (
    <div className={styles.iPhone14Pro13}>
      <div className={styles.rectangleDiv} />
      <i className={styles.aboutI}>About</i>
      <div className={styles.frameDiv}>
        <button
          className={styles.iconHomeButton}
          onClick={onIconHomeButtonClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector66.svg" />
        </button>
        <button
          className={styles.iconCommentSquare}
          onClick={onIconCommentSquareClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector67.svg" />
        </button>
        <img className={styles.iconMenu} alt="" src="../-icon-menu.svg" />
      </div>
      <i className={styles.carsDealershipOnlineCompany}>
        <p className={styles.carsDealershipOnline}>
          Cars Dealership Online Company is a part of the cars dealership group,
          one of the leading groups in India which have been involved in the
          automotive industry for over 60 years. Cars Dealership Online Company
          is a pioneer in the industry and is renowned for its innovative
          designs and the best quality cars. The company supplies cars at some
          of the most competitive prices in the market and ensures that
          customers get great service along with their purchases. Car Dealership
          has a network of showrooms across India and other countries, including
          France, UAE, Singapore, Australia and Canada.
        </p>
        <p
          className={styles.carsDealershipOnline}
        >{`The business now owns and runs 100 Sales & Service stores throughout south India through its car retail outlets. The group has automotive brands including Rolls Royce, BMW, MINI, BMW Motorrad, Honda, Hyundai, ISUZU, VW, Renault, and Bharat Benz. KUN KIA is a business that puts its clients first and strives to fulfill their needs for mobility.`}</p>
      </i>
    </div>
  );
};

export default IPhone14Pro13;
