import PropTypes from "prop-types";
import styles from "./Step.module.css";

const Step = ({ className = "", prop, createAnAccount }) => {
  return (
    <div className={[styles.step1, className].join(" ")}>
      <div className={styles.stepContainers}>
        <div className={styles.stepBackgrounds}>
          <div className={styles.bg} />
          <div className={styles.stepContentHolders}>{prop}</div>
        </div>
        <div className={styles.stepTitlesContainer}>
          <div className={styles.createAnAccount}>{createAnAccount}</div>
        </div>
      </div>
    </div>
  );
};

Step.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  createAnAccount: PropTypes.string,
};

export default Step;
