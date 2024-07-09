import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Card2.module.css";

const Card2 = ({ className = "", bg, bitcoin, k }) => {
  return (
    <div className={[styles.card1, className].join(" ")}>
      <div className={styles.image}>
        <img className={styles.bgIcon} loading="lazy" alt="" src={bg} />
        <div className={styles.bg} />
      </div>
      <div className={styles.component}>
        <div className={styles.bg1} />
        <div className={styles.sliderDetails}>
          <div className={styles.cryptoInfo}>
            <div className={styles.bitcoin}>{bitcoin}</div>
            <div className={styles.tinciduntIdNibh}>
              Tincidunt id nibh orci nibh justo. Purus et turpis nulla
              elementum, sed vel.
            </div>
          </div>
        </div>
        <Button
          className={styles.button}
          disableElevation
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "16",
            background: "#ef443b",
            borderRadius: "40px",
            "&:hover": { background: "#ef443b" },
            width: 142,
            height: 55,
          }}
        >
          Trade now
        </Button>
        <b className={styles.k}>{k}</b>
      </div>
    </div>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  bg: PropTypes.string,
  bitcoin: PropTypes.string,
  k: PropTypes.string,
};

export default Card2;
