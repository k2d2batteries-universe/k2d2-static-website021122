import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Left: text content */}
      <div className={styles.left}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          Chengalpattu&apos;s #1 Battery Store
        </span>

        <h1 className={styles.title}>
          ALL KINDS<br />
          OF <span className={styles.green}>BATTERIES</span><br />
          &amp; MOTOR<br />
          <span className={styles.red}>PUMPS</span>
        </h1>

        <p className={styles.sub}>
          From automotive to industrial, inverter to UPS — K2D2 stocks every
          battery you need. Trusted by thousands across Chengalpattu for
          quality and fast service.
        </p>

        <div className={styles.actions}>
          <a href="tel:+917200025072" className="btn-green">
            📞 +91 72000 25072
          </a>
          <a href="mailto:k2d2.batteries@gmail.com" className="btn-red">
            ✉ Email Us
          </a>
          <a href="#products" className="btn-outline">
            View Products
          </a>
        </div>

        <div className={styles.stats}>
          <Stat value="500+" label="Battery Types" />
          <Stat value="10yr+" label="Experience" />
          <Stat value="24hr" label="Fast Service" />
        </div>
      </div>

      {/* Right: logo visual */}
      <div className={styles.visual}>
        <Image
          src="/logo.png"
          alt="K2D2 Batteries & Motor Pumps"
          width={400}
          height={400}
          className={styles.logoBig}
          priority
        />
        <FloatCard
          side="left"
          accent="green"
          label="In Stock Today"
          value="500+ Items"
        />
        <FloatCard
          side="right"
          accent="red"
          label="Delivery"
          value="Same Day"
        />
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

function FloatCard({ side, accent, label, value }) {
  return (
    <div className={`${styles.floatCard} ${styles[side]} ${styles[`accent_${accent}`]}`}>
      <span className={styles.fcLabel}>{label}</span>
      <span className={`${styles.fcVal} ${styles[`fcVal_${accent}`]}`}>{value}</span>
    </div>
  );
}
