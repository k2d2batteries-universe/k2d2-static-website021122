import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    num: "01",
    title: "Call or Walk In",
    desc: "Reach us by phone, WhatsApp, or just walk into our Chengalpattu store. No appointment needed.",
    accent: "green",
  },
  {
    num: "02",
    title: "We Pick the Right One",
    desc: "Tell us your vehicle, inverter, or pump model. We recommend the exact battery or pump that fits — no guesswork.",
    accent: "red",
  },
  {
    num: "03",
    title: "Install & You're Done",
    desc: "We fit it on the spot or deliver to your door. Free installation, old battery exchange, same-day service.",
    accent: "green",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="reveal">
        <p className="section-label">Simple Process</p>
        <h2 className="section-title">How It Works</h2>
      </div>
      <div className={styles.steps}>
        {STEPS.map((s) => (
          <Step key={s.num} {...s} />
        ))}
      </div>
    </section>
  );
}

function Step({ num, title, desc, accent }) {
  return (
    <div className={`${styles.step} ${accent === "red" ? styles.stepRed : styles.stepGreen} reveal`}>
      <span className={styles.stepBgNum} aria-hidden="true">{num}</span>
      <div className={`${styles.numWrap} ${accent === "red" ? styles.numRed : styles.numGreen}`}>
        <span className={styles.num}>{num}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}
