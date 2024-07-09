import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.footerContent}>
        <div className={styles.frameParent}>
          <div className={styles.kryptoInfoParent}>
            <div className={styles.kryptoInfo}>
              <b className={styles.krypto}>{`Krypto `}</b>
              <div className={styles.massaBlanditSemper}>
                Massa blandit semper varius faucibus. Suspendisse viverra
                venenatis placerat nam ut. Pellentesque sit id tempor turpis.
              </div>
            </div>
            <div className={styles.linksParent}>
              <div className={styles.links}>Links</div>
              <div className={styles.linkItems}>
                <div className={styles.howItWorks}>How it works</div>
                <div className={styles.cryptos}>Cryptos</div>
                <div className={styles.features}>Features</div>
                <div className={styles.testimonial}>Testimonial</div>
                <div className={styles.blogs}>Blogs</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.legalParent}>
              <div className={styles.legal}>Legal</div>
              <div className={styles.legalItems}>
                <div className={styles.termsOfUse}>Terms of use</div>
                <div className={styles.termsOfConditions}>
                  Terms of conditions
                </div>
                <div className={styles.privecyPolicy}>Privecy policy</div>
                <div className={styles.cookiePolicy}>Cookie policy</div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.newsletterParent}>
              <div className={styles.newsletter}>Newsletter</div>
              <div className={styles.newsletterContent}>
                <div className={styles.over25000People}>
                  Over 25000 people have subscribed
                </div>
                <div className={styles.inputFieldParent}>
                  <div className={styles.inputField}>
                    <div className={styles.bg1} />
                    <div className={styles.emailPrompt}>
                      <div className={styles.enterYourEmail}>
                        Enter your email
                      </div>
                    </div>
                    <button className={styles.button}>
                      <div className={styles.subscribe}>Subscribe</div>
                    </button>
                  </div>
                  <div className={styles.weDontSell}>
                    We don’t sell your email and spam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerEnd}>
        <div className={styles.lineWrapper}>
          <div className={styles.line} />
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.infoLinks}>
            <div className={styles.privacyTerms}>{`Privacy & Terms`}</div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
          <div className={styles.copyright2022XpenceWrapper}>
            <div className={styles.copyright2022}>Copyright @ 2022 xpence</div>
          </div>
          <div className={styles.socialIconsWrapper}>
            <div className={styles.socialIcons}>
              <img
                className={styles.foundationsocialYoutubeIcon}
                loading="lazy"
                alt=""
                src="/foundationsocialyoutube.svg"
              />
              <img
                className={styles.foundationsocialLinkedinIcon}
                loading="lazy"
                alt=""
                src="/foundationsociallinkedin.svg"
              />
              <img
                className={styles.foundationsocialFacebookIcon}
                loading="lazy"
                alt=""
                src="/foundationsocialfacebook.svg"
              />
              <img
                className={styles.foundationbitcoinCircleIcon}
                alt=""
                src="/foundationbitcoincircle.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
