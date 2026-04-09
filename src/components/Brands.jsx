import styles from "./Brands.module.css";

const BRANDS = [
  { name: "Exide",    note: "Automotive & Industrial", accent: "green" },
  { name: "Amaron",  note: "Automotive & Inverter",   accent: "amber" },
  { name: "Luminous", note: "Inverter & Solar",       accent: "green" },
  { name: "Okaya",   note: "Inverter & E-Vehicle",    accent: "amber" },
  { name: "Microtek", note: "UPS & Inverter",         accent: "green" },
  { name: "SF Sonic", note: "Automotive",             accent: "amber" },
];

// Tripled for seamless infinite marquee
const MARQUEE = [...BRANDS, ...BRANDS, ...BRANDS];

export default function Brands() {
  return (
    <section className={styles.section} id="brands" aria-label="Brands we stock">
      <div className={`${styles.header} reveal`}>
        <div>
          <p className="section-label">Official Stockist</p>
          <h2 className="section-title">Brands We Carry</h2>
        </div>
        <span className={styles.tagline}>All genuine — all warranted</span>
      </div>

      <div className={styles.track} aria-hidden="true">
        <div className={styles.marquee}>
          {MARQUEE.map((b, i) => (
            <BrandCard key={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ name, note, accent }) {
  return (
    <div className={`${styles.card} ${accent === "amber" ? styles.cardAmber : styles.cardGreen}`}>
      <span className={styles.brandName}>{name}</span>
      <span className={styles.brandNote}>{note}</span>
      <span className={styles.pill}>Genuine Stock</span>
    </div>
  );
}
