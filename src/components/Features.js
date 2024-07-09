import Item1 from "./Item1";
import Item from "./Item";
import PropTypes from "prop-types";
import styles from "./Features.module.css";

const Features = ({ className = "" }) => {
  return (
    <section className={[styles.features, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.featuresContainer}>
        <div className={styles.featuresContent}>
          <div className={styles.featuresHeader}>
            <h1 className={styles.attractiveFeatures}>Attractive Features</h1>
            <div className={styles.windafulMakesPlaying}>
              Windaful makes playing the UK's best raffles easy and fun.
            </div>
          </div>
        </div>
        <img
          className={styles.bitcoin1Icon}
          loading="lazy"
          alt=""
          src="/bitcoin1@2x.png"
        />
      </div>
      <div className={styles.featuresList}>
        <div className={styles.items}>
          <Item1
            icons="/icons.svg"
            weeklyTrading="Weekly Trading"
            contest="Contest"
          />
          <Item
            icons="/icons-1.svg"
            competitionJackpots="Less Commission On Trade"
          />
          <Item
            icons="/icons-2.svg"
            competitionJackpots="Safe And Secure Trading platform"
          />
          <Item1
            icons="/icons-3.svg"
            weeklyTrading="Instant Withdraw"
            contest="Process"
          />
          <Item icons="/icons-4.svg" competitionJackpots="Monthly Commition" />
          <Item1
            icons="/icons-5.svg"
            weeklyTrading="24/7 Support"
            contest="Team"
          />
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
