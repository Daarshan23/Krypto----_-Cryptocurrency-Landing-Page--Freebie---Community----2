import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Seconds.module.css";

const Seconds = ({ className = "", prop, days, propWidth }) => {
  const secondsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.seconds, className].join(" ")} style={secondsStyle}>
      <div className={styles.day}>
        <div className={styles.secondsLabelContainer}>
          <div className={styles.secondsSpacing}>{prop}</div>
        </div>
        <div className={styles.days}>{days}</div>
      </div>
    </div>
  );
};

Seconds.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  days: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default Seconds;
