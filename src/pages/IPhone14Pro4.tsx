import { FunctionComponent, useCallback } from "react";
import {
  Stack,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
    navigate("/iphone-14-pro-2");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/iphone-14-pro-1");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/iphone-14-pro-3");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onIconCommentSquareClick = useCallback(() => {
    navigate("/iphone-14-pro-12");
  }, [navigate]);

  const onIconMenuClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro4}>
      <div className={styles.frameParent}>
        <button className={styles.ellipseParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="../ellipse-115.svg" />
          <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
          <img className={styles.frameItem} alt="" src="../ellipse-214.svg" />
        </button>
        <i className={styles.welcome}>Welcome</i>
        <img className={styles.frameInner} alt="" src="../rectangle-22.svg" />
        <i className={styles.location}>Location:</i>
        <button className={styles.filtersWrapper} onClick={onFrameButton1Click}>
          <i className={styles.filters}>Filters</i>
        </button>
        <Stack className={styles.dropdowndefault}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="black12"
            >
              Please Select
            </MenuButton>
            <MenuList>
              <MenuItem value="Churchgate">Churchgate</MenuItem>
              <MenuItem value="BKC">BKC</MenuItem>
              <MenuItem value="Powai">Powai</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </div>
      <div className={styles.trendingWrapper}>
        <i className={styles.trending}> Trending</i>
      </div>
      <div className={styles.iphone14Pro4Inner}>
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
          <i className={styles.ferrari}>Ferrari</i>
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
            src="../screenshot-191@2x.png"
          />
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector90.svg" />
          </button>
          <button
            className={styles.iconCommentSquare}
            onClick={onIconCommentSquareClick}
          >
            <img className={styles.vectorIcon} alt="" src="../vector91.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector92.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector93.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector94.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro4;
