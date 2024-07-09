import PropTypes from "prop-types";
import styles from "./Item1.module.css";

const Item1 = ({ className = "", icons, weeklyTrading, contest }) => {
  return (
    <div className={[styles.item1, className].join(" ")}>
      <div className={styles.featureContainers}>
        <div className={styles.featureContent}>
          <img className={styles.icons} loading="lazy" alt="" src={icons} />
        </div>
        <h2 className={styles.competitionJackpots}>
          <p className={styles.weeklyTrading}>{weeklyTrading}</p>
          <p className={styles.contest}>{contest}</p>
        </h2>
      </div>
      <div className={styles.euTellusQuam}>
        Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare
        risus.
      </div>
    </div>
  );
};

Item1.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.string,
  weeklyTrading: PropTypes.string,
  contest: PropTypes.string,
};

export default Item1;
