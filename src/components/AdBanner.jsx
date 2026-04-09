// components/AdBanner.jsx
import Image from "next/image";
import styles from "./AdBanner.module.css";

export default function AdBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Walk In or Call Anytime</p>
        <h2 className={styles.title}>
          OLD BATTERY?<br />
          GET A <span>FREE TEST</span><br />
          + TOP EXCHANGE VALUE
        </h2>
        <p className={styles.sub}>
          Bring in your old battery — we test it for free, offer the highest
          exchange value in Chengalpattu, and fit your new battery at no extra
          charge. No pressure, no hidden fees.
        </p>
        <div className={styles.actions}>
          <a href="tel:+917200025072" className="btn-green">📞 Call Now</a>
          <a href="mailto:k2d2.batteries@gmail.com" className="btn-outline">✉ Send Enquiry</a>
        </div>
      </div>
      <div className={styles.visual}>
        <Image src="/logo.png" alt="K2D2" width={260} height={260} className={styles.logo} />
      </div>
    </div>
  );
}
