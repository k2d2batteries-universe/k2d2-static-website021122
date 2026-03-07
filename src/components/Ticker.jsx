// components/Ticker.jsx
import styles from "./Ticker.module.css";

const ITEMS = [
  "Car Batteries", "Inverter Batteries", "UPS Batteries",
  "Motor Pumps", "Solar Batteries", "Bike Batteries",
  "Industrial Batteries", "E-Vehicle Batteries",
];

export default function Ticker() {
  // Duplicate for seamless scroll
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {all.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
