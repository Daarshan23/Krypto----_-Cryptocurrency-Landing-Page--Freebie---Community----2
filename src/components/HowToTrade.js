import Step from "./Step";
import PropTypes from "prop-types";
import styles from "./HowToTrade.module.css";

const HowToTrade = ({ className = "" }) => {
  return (
    <section className={[styles.howToTrade, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.tradingContainer}>
        <div className={styles.tradingContent}>
          <h1 className={styles.howToTrade1}>How to Trade With Krypto</h1>
          <div className={styles.tinciduntIdNibh}>
            Tincidunt id nibh orci nibh just nulla elementum, sed vel.
          </div>
        </div>
      </div>
      <div className={styles.videoParent}>
        <img
          className={styles.videoIcon}
          loading="lazy"
          alt=""
          src="/video.svg"
        />
        <div className={styles.stepsContentWrapper}>
          <div className={styles.stepsContent}>
            <h1 className={styles.stepsToTrade}>Steps to trade</h1>
            <div className={styles.steps}>
              <Step prop="01" createAnAccount="Create an account" />
              <Step prop="02" createAnAccount="Download platfrom" />
              <Step prop="03" createAnAccount="Select crypto" />
              <Step prop="04" createAnAccount="Start trading" />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.etherium2Icon}
        loading="lazy"
        alt=""
        src="/etherium2@2x.png"
      />
    </section>
  );
};

HowToTrade.propTypes = {
  className: PropTypes.string,
};

export default HowToTrade;
