import PropTypes from "prop-types";
import styles from "./Days.module.css";

const Days = ({ className = "" }) => {
  return (
    <div className={[styles.days, className].join(" ")}>
      <div className={styles.day}>
        <div className={styles.dayPlaceholder}>02</div>
        <div className={styles.daysLabelContainer}>
          <div className={styles.days1}>Days</div>
        </div>
      </div>
    </div>
  );
};

Days.propTypes = {
  className: PropTypes.string,
};

export default Days;
