import Card2 from "./Card2";
import PropTypes from "prop-types";
import styles from "./AvailableCryptos.module.css";

const AvailableCryptos = ({ className = "" }) => {
  return (
    <section className={[styles.availableCryptos, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.availableCryptosContainer}>
        <div className={styles.availableCryptosContent}>
          <div className={styles.moneroAvailable}>
            <img className={styles.monero1Icon} alt="" src="/monero1@2x.png" />
          </div>
          <div className={styles.availableCryptosDescription}>
            <h1 className={styles.availableCreyptos}>Available Creyptos</h1>
            <div className={styles.tinciduntIdNibh}>
              Tincidunt id nibh orci nibh justo. Purus et turpis nulla
              elementum, sed vel.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cryptosSlider}>
        <div className={styles.sliderControls}>
          <img
            className={styles.leftIcon}
            loading="lazy"
            alt=""
            src="/left.svg"
          />
        </div>
        <div className={styles.sliders}>
          <Card2 bg="/bg-1@2x.png" bitcoin="Bitcoin" k="$43.7k" />
          <Card2 bg="/bg-2@2x.png" bitcoin="Litecoin" k="$158" />
          <Card2 bg="/bg-3@2x.png" bitcoin="Ethereum" k="$3k" />
        </div>
        <div className={styles.sliderControls1}>
          <img className={styles.rightIcon} alt="" src="/right.svg" />
        </div>
      </div>
      <img
        className={styles.litecoin3Icon}
        loading="lazy"
        alt=""
        src="/litecoin3@2x.png"
      />
    </section>
  );
};

AvailableCryptos.propTypes = {
  className: PropTypes.string,
};

export default AvailableCryptos;
