import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Checkbox as AntCheckbox } from "antd";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro10.module.css";

const IPhone14Pro10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconChevronLeftClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/iphone-14-pro-43");
  }, [navigate]);

  const onEverydayClick = useCallback(() => {
    navigate("/iphone-14-pro-41");
  }, [navigate]);

  const onAftermarketClick = useCallback(() => {
    navigate("/iphone-14-pro-42");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro10}>
      <div className={styles.selectFiltersParent}>
        <i className={styles.selectFilters}>Select Filters</i>
        <button
          className={styles.iconChevronLeft}
          onClick={onIconChevronLeftClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector80.svg" />
        </button>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <button
            className={styles.frameItem}
            onClick={onRectangleButtonClick}
          />
          <i className={styles.exotics}>
            <p className={styles.exotics1}>Exotics</p>
          </i>
        </div>
        <div className={styles.rectangleGroup}>
          <button className={styles.frameInner} />
          <button className={styles.everyday} onClick={onEverydayClick}>
            Everyday
          </button>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <button className={styles.aftermarket} onClick={onAftermarketClick}>
            <p className={styles.exotics1}>Aftermarket</p>
          </button>
        </div>
        <i className={styles.vehicleType}>Vehicle Type</i>
      </div>
      <div className={styles.priceRangeParent}>
        <i className={styles.priceRange}>
          <p className={styles.exotics1}>Price Range</p>
        </i>
        <Slider
          className={styles.sliderdefault}
          width="324px"
          defaultValue={25}
          colorScheme="cyan"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
      <div className={styles.checkboxcheckedCheckboxLParent}>
        <AntCheckbox className={styles.checkboxcheckedCheckboxL} defaultChecked>
          AWD
        </AntCheckbox>
        <AntCheckbox
          className={styles.checkboxcheckedCheckboxL1}
          defaultChecked
        >
          FWD
        </AntCheckbox>
        <AntCheckbox
          className={styles.checkboxcheckedCheckboxL2}
          defaultChecked
        >
          RWD
        </AntCheckbox>
        <i className={styles.drive}>
          <p className={styles.exotics1}>Drive</p>
        </i>
      </div>
    </div>
  );
};

export default IPhone14Pro10;
