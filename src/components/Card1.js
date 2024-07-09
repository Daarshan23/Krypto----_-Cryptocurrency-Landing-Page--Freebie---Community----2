import PropTypes from "prop-types";
import styles from "./Card1.module.css";

const Card1 = ({ className = "", ellipse6, cameronWilliamson, fXTrader }) => {
  return (
    <div className={[styles.card1, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.testimonialContent}>
        <img
          className={styles.icoutlineFormatQuoteIcon}
          loading="lazy"
          alt=""
          src="/icoutlineformatquote.svg"
        />
      </div>
      <div className={styles.tinciduntIdNibh}>
        Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed
        vel.
      </div>
      <div className={styles.testimonialProfiles}>
        <div className={styles.profile}>
          <div className={styles.profileDetails}>
            <img className={styles.profilePicturesIcon} alt="" src={ellipse6} />
          </div>
          <div className={styles.cameronWilliamsonParent}>
            <div className={styles.cameronWilliamson}>{cameronWilliamson}</div>
            <div className={styles.fxTraderWrapper}>
              <div className={styles.fxTrader}>{fXTrader}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  ellipse6: PropTypes.string,
  cameronWilliamson: PropTypes.string,
  fXTrader: PropTypes.string,
};

export default Card1;
