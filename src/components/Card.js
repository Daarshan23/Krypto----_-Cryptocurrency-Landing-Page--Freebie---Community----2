import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "", bg, howToTradeBitcoin }) => {
  return (
    <div className={[styles.card1, className].join(" ")}>
      <img className={styles.bgIcon} loading="lazy" alt="" src={bg} />
      <div className={styles.div}>
        <div className={styles.howToTrade}>{howToTradeBitcoin}</div>
        <div className={styles.euTellusQuamContainer}>
          <p
            className={styles.euTellusQuam}
          >{`Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et `}</p>
          <p className={styles.ornareRisus}>ornare risus.</p>
        </div>
        <div className={styles.learnMore}>Learn more</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  bg: PropTypes.string,
  howToTradeBitcoin: PropTypes.string,
};

export default Card;
