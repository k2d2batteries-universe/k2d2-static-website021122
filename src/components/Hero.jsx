import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlowAmber} aria-hidden="true" />
      <div className={styles.bgGlowRed} aria-hidden="true" />

      {/* Left: text content */}
      <div className={styles.left}>
        <div className={styles.badgeRow}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Chengalpattu&apos;s #1 Battery Store
          </span>
          <span className={styles.estBadge}>Est. 2025</span>
        </div>

        <h1 className={styles.title}>
          ALL KINDS<br />
          OF <span className={styles.green}>BATTERIES</span><br />
          &amp; MOTOR<br />
          <span className={styles.red}>PUMPS</span>
        </h1>

        <p className={styles.sub}>
          From automotive to industrial, inverter to UPS — K2D2 stocks every
          battery you need. Trusted across Chengalpattu for genuine products,
          honest pricing, and fast service.
        </p>

        <div className={styles.actions}>
          <a href="tel:+917200025072" className="btn-green">
            📞 +91 72000 25072
          </a>
          <a href="mailto:k2d2.batteries@gmail.com" className="btn-red">
            ✉ Email Us
          </a>
          <a href="#products" className="btn-outline">
            View Products →
          </a>
        </div>

        <div className={styles.stats}>
          <Stat value="500+" label="Battery Types" />
          <Stat value="100+" label="Customers Served" />
          <Stat value="24hr" label="Fast Service" />
        </div>
      </div>

      {/* Right: 3D visual panel */}
      <div className={styles.visual}>
        <div className={styles.card3d}>
          <div className={styles.cardInner}>
            <Image
              src="/logo.png"
              alt="K2D2 Batteries & Motor Pumps"
              width={300}
              height={300}
              className={styles.logoBig}
              priority
            />
          </div>
          <div className={styles.cardGlow} />
          <div className={styles.cardReflect} aria-hidden="true" />
        </div>

        <div className={`${styles.chip} ${styles.chipLeft}`}>
          <span className={styles.chipDot} />
          <div>
            <span className={styles.chipLabel}>In Stock Today</span>
            <span className={styles.chipValue}>500+ Items</span>
          </div>
        </div>

        <div className={`${styles.chip} ${styles.chipRight}`}>
          <span className={`${styles.chipDot} ${styles.chipDotRed}`} />
          <div>
            <span className={styles.chipLabel}>Delivery</span>
            <span className={styles.chipValue}>Same Day</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className={styles.statItem}>
      <span className={styles.statVal}>{value}</span>
      <span className={styles.statLbl}>{label}</span>
    </div>
  );
}
