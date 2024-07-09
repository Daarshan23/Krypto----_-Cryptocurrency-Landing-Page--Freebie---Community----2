import Navbar from "../components/Navbar";
import FrameComponent from "../components/FrameComponent";
import HowToTrade from "../components/HowToTrade";
import AvailableCryptos from "../components/AvailableCryptos";
import Features from "../components/Features";
import Portfolio from "../components/Portfolio";
import University from "../components/University";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <section className={styles.background}>
        <div className={styles.marketAnalysis}>
          <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
          <div className={styles.bg} />
          <div className={styles.bg1} />
        </div>
        <Navbar />
        <FrameComponent />
      </section>
      <HowToTrade />
      <AvailableCryptos />
      <Features />
      <section className={styles.cta}>
        <img className={styles.bgIcon1} alt="" src="/bg-4@2x.png" />
        <h1 className={styles.mostAdvancedCrypto}>
          Most advanced crypto trading platfrom ever!
        </h1>
        <div className={styles.imageContainerCTA}>
          <div className={styles.cTAImages}>
            <img
              className={styles.image5Icon}
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
            <img
              className={styles.image6Icon}
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
        </div>
      </section>
      <Portfolio />
      <University />
      <Footer />
      <img
        className={styles.etherium2Icon}
        loading="lazy"
        alt=""
        src="/etherium2@2x.png"
      />
      <img
        className={styles.bitcoin1Icon}
        loading="lazy"
        alt=""
        src="/bitcoin1@2x.png"
      />
      <img
        className={styles.etherium2Icon1}
        loading="lazy"
        alt=""
        src="/etherium2@2x.png"
      />
    </div>
  );
};

export default LandingPage;
