import { Button } from "@mui/material";
import Days from "./Days";
import Seconds from "./Seconds";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.enrollContainerWrapper, className].join(" ")}>
      <div className={styles.enrollContainer}>
        <div className={styles.enrollHeader}>
          <div className={styles.bitcoinLogoContainer}>
            <img
              className={styles.bitcoin1Icon}
              loading="lazy"
              alt=""
              src="/bitcoin1@2x.png"
            />
          </div>
          <div className={styles.tradingDescriptionContainer}>
            <div className={styles.tradingDescriptionWrapper}>
              <h1 className={styles.nextGenerationCrypto}>
                Next Generation Crypto Trading
              </h1>
              <div className={styles.cryptoMarketStartsInWrapper}>
                <div className={styles.cryptoMarketStarts}>
                  Crypto Market Starts in
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.litecoin2Icon}
            loading="lazy"
            alt=""
            src="/litecoin2@2x.png"
          />
        </div>
        <div className={styles.counterContainer}>
          <div className={styles.counterWrapper}>
            <div className={styles.counter}>
              <div className={styles.miniCounter}>
                <div className={styles.bg} />
                <Days />
                <div className={styles.hoursPlaceholder}>
                  <div className={styles.hoursSpacing}>:</div>
                </div>
                <Seconds prop="12" days="Hours" propWidth="45px" />
                <div className={styles.minutesPlaceholder}>
                  <div className={styles.minutesSpacing}>:</div>
                </div>
                <Seconds prop="23" days="Minutes" propWidth="unset" />
                <div className={styles.secondsPlaceholder}>
                  <div className={styles.secondsSpacing}>:</div>
                </div>
                <Seconds prop="35" days="Seconds" />
              </div>
            </div>
            <div className={styles.downloadButtons}>
              <div className={styles.buttonsContainer}>
                <Button
                  className={styles.button1}
                  disableElevation
                  variant="contained"
                  sx={{
                    color: "#fff",
                    fontSize: "16",
                    background: "#ef443b",
                    borderRadius: "40px",
                    "&:hover": { background: "#ef443b" },
                    height: 55,
                  }}
                >
                  Download app
                </Button>
                <Button
                  className={styles.button2}
                  disableElevation
                  variant="contained"
                  sx={{
                    color: "#fff",
                    fontSize: "16",
                    background: "rgba(22, 14, 51, 0.5)",
                    border: "#ef443b solid 2px",
                    borderRadius: "40px",
                    "&:hover": { background: "rgba(22, 14, 51, 0.5)" },
                    height: 55,
                  }}
                >
                  Trade crypto
                </Button>
              </div>
            </div>
            <div className={styles.paymentMethods}>
              <div className={styles.weAccept}>We accept</div>
              <div className={styles.paymentLogos}>
                <div className={styles.paymentLogosContainer}>
                  <div className={styles.logosWrapper}>
                    <div className={styles.bitcoinLogoContainerParent}>
                      <div className={styles.bitcoinLogoContainer1}>
                        <input className={styles.bitcoin} type="radio" />
                        <div className={styles.bitcoin1}>Bitcoin</div>
                      </div>
                      <div className={styles.litecoinParent}>
                        <img
                          className={styles.litecoinIcon}
                          loading="lazy"
                          alt=""
                          src="/004litecoin.svg"
                        />
                        <div className={styles.litecoin}>Litecoin</div>
                      </div>
                      <div className={styles.chainlink1Parent}>
                        <input className={styles.chainlink1} type="radio" />
                        <div className={styles.chainlink}>Chainlink</div>
                      </div>
                      <div className={styles.siacoinsParent}>
                        <input className={styles.siacoins} type="radio" />
                        <div className={styles.siacoin}>Siacoin</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.monero1Icon}
                    loading="lazy"
                    alt=""
                    src="/monero1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
