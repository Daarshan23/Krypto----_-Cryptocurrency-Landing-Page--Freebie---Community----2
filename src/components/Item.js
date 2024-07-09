import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({ className = "", icons, competitionJackpots }) => {
  return (
    <div className={[styles.item2, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.iconsWrapper}>
          <img className={styles.icons} loading="lazy" alt="" src={icons} />
        </div>
        <h2 className={styles.competitionJackpots}>{competitionJackpots}</h2>
      </div>
      <div className={styles.euTellusQuam}>
        Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare
        risus.
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.string,
  competitionJackpots: PropTypes.string,
};

export default Item;
