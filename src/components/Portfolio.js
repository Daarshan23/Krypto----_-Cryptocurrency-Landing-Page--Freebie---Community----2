import Card1 from "./Card1";
import PropTypes from "prop-types";
import styles from "./Portfolio.module.css";

const Portfolio = ({ className = "" }) => {
  return (
    <section className={[styles.portfolio, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioContent}>
          <div className={styles.portfolioHeader}>
            <img className={styles.monero1Icon} alt="" src="/monero1@2x.png" />
            <div className={styles.portfolioTitle}>
              <h1 className={styles.millionUsersWorldwide}>
                30 Million Users Worldwide
              </h1>
            </div>
          </div>
          <div className={styles.tinciduntIdNibh}>
            Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
            sed vel.
          </div>
        </div>
      </div>
      <div className={styles.testimonialSlider}>
        <div className={styles.testimonialControls}>
          <img
            className={styles.leftIcon}
            loading="lazy"
            alt=""
            src="/left.svg"
          />
        </div>
        <div className={styles.cards}>
          <Card1
            ellipse6="/profile-pictures@2x.png"
            cameronWilliamson="Cameron Williamson"
            fXTrader="FX Trader"
          />
          <Card1
            ellipse6="/ellipse-6-1@2x.png"
            cameronWilliamson="Bessie Cooper"
            fXTrader="Stock Manager"
          />
          <Card1
            ellipse6="/ellipse-6-2@2x.png"
            cameronWilliamson="Albert Flores"
            fXTrader="Crypto Analyst"
          />
        </div>
        <div className={styles.testimonialControls1}>
          <img
            className={styles.rightIcon}
            loading="lazy"
            alt=""
            src="/right.svg"
          />
        </div>
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
};

export default Portfolio;
