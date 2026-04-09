import styles from "./Features.module.css";

const FEATURES = [
  {
    icon: "⚡",
    variant: "green",
    title: "Widest Range in Chengalpattu",
    desc: "500+ battery types and motor pump models in stock. If we don't have it, we source it within 24 hours.",
  },
  {
    icon: "🔧",
    variant: "red",
    title: "Free Fitting & Installation",
    desc: "Every purchase includes free installation at our shop or at your doorstep. No hidden charges, ever.",
  },
  {
    icon: "🏆",
    variant: "green",
    title: "All Top Brands Stocked",
    desc: "Exide, Amaron, Luminous, Okaya, Microtek, SF Sonic — all genuine, all warranted, all under one roof.",
  },
  {
    icon: "🚗",
    variant: "red",
    title: "Home Delivery Available",
    desc: "We deliver across Chengalpattu and nearby areas. Same-day delivery on most orders — call to confirm.",
  },
  {
    icon: "💰",
    variant: "green",
    title: "Best Battery Exchange Rate",
    desc: "Highest old battery exchange rates guaranteed. We match or beat any competitor — no questions asked.",
  },
  {
    icon: "📞",
    variant: "red",
    title: "Expert Advice, Always Free",
    desc: "Not sure what fits your vehicle or inverter? Call anytime — honest, expert guidance, completely free.",
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="reveal">
        <p className="section-label">Why Choose Us</p>
        <h2 className="section-title">The K2D2 Advantage</h2>
      </div>
      <div className={styles.grid}>
        {FEATURES.map((f, i) => (
          <FeatureItem key={f.title} index={i} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureItem({ icon, variant, title, desc, index }) {
  const stepNum = String(index + 1).padStart(2, "0");
  return (
    <div className={`${styles.item} ${variant === "red" ? styles.itemRed : styles.itemGreen} reveal`}>
      <span className={styles.stepNum} aria-hidden="true">{stepNum}</span>
      <div className={`${styles.icon} ${variant === "red" ? styles.iconRed : styles.iconGreen}`}>
        {icon}
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}
