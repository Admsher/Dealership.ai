import { FunctionComponent, useCallback } from "react";
import { Switch } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro11.module.css";

const IPhone14Pro11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconHomeClick = useCallback(() => {
    navigate("/iphone-14-pro-4");
  }, [navigate]);

  const onIconMenuClick = useCallback(() => {
    navigate("/iphone-14-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro11}>
      <div className={styles.locationAsMentionedParent}>
        <i className={styles.locationAsMentionedContainer}>
          <p className={styles.location}>
            <span>Location:</span>
          </p>
          <p className={styles.asMentioned}>
            <span>(as mentioned)</span>
          </p>
        </i>
        <i className={styles.profile}>Profile</i>
        <i className={styles.name}>Name:</i>
        <textarea className={styles.frameChild} />
        <textarea className={styles.frameItem} />
        <i className={styles.notifications}>Notifications</i>
        <div className={styles.switchdefaultWrapper}>
          <Switch
            className={styles.switchdefault}
            size="md"
            colorScheme="cyan"
            defaultChecked
          />
        </div>
      </div>
      <div className={styles.iphone14Pro11Inner}>
        <div className={styles.iconHomeParent}>
          <button className={styles.iconHome} onClick={onIconHomeClick}>
            <img className={styles.vectorIcon} alt="" src="../vector75.svg" />
          </button>
          <button className={styles.iconCommentSquare}>
            <img className={styles.vectorIcon} alt="" src="../vector76.svg" />
          </button>
          <button className={styles.iconMenu} onClick={onIconMenuClick}>
            <img className={styles.vectorIcon2} alt="" src="../vector77.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector78.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector79.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone14Pro11;
