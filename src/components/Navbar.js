import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.navbarCards}>
        <a className={styles.krypto}>{`Krypto `}</a>
      </div>
      <div className={styles.navbarLinks}>
        <div className={styles.linksContainer}>
          <a className={styles.howItWorks}>How it works</a>
          <a className={styles.cryptos}>Cryptos</a>
          <a className={styles.features}>Features</a>
          <a className={styles.testimonial}>Testimonial</a>
          <a className={styles.university}>University</a>
        </div>
      </div>
      <select className={styles.signUpButton}>
        <option value="option_1"></option>
      </select>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
