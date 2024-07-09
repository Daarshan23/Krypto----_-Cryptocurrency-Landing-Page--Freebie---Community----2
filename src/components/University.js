import { Button } from "@mui/material";
import Card from "./Card";
import PropTypes from "prop-types";
import styles from "./University.module.css";

const University = ({ className = "" }) => {
  return (
    <section className={[styles.university, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.universityInner}>
        <div className={styles.cryptoMarketAnalysisParent}>
          <h1 className={styles.cryptoMarketAnalysis}>
            Crypto Market Analysis
          </h1>
          <div className={styles.tinciduntIdNibh}>
            Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
            sed vel.
          </div>
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          <div className={styles.navbarCardsRight}>
            <Card bg="/bg-5@2x.png" howToTradeBitcoin="How to trade Bitcoin" />
            <Card bg="/bg-6@2x.png" howToTradeBitcoin="Reduce your loosing" />
          </div>
          <div className={styles.navbarCardsRight1}>
            <Card
              bg="/bg-7@2x.png"
              howToTradeBitcoin="Gain the best exchange"
            />
            <Card
              bg="/bg-8@2x.png"
              howToTradeBitcoin="Win 50-50 trading strategy"
            />
          </div>
        </div>
      </div>
      <div className={styles.enrollParent}>
        <Button
          className={styles.enroll}
          disableElevation
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "16",
            background: "rgba(22, 14, 51, 0.5)",
            border: "#ef443b solid 2px",
            borderRadius: "40px",
            "&:hover": { background: "rgba(22, 14, 51, 0.5)" },
            width: 280,
            height: 55,
          }}
        >
          Enroll crypto University
        </Button>
        <div className={styles.monero1Wrapper}>
          <img
            className={styles.monero1Icon}
            loading="lazy"
            alt=""
            src="/monero1-3@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

University.propTypes = {
  className: PropTypes.string,
};

export default University;
