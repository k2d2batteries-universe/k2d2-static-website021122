import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    text: "Best battery shop in Chengalpattu! Got my car battery replaced in 20 minutes. Great price and genuine Amaron warranty.",
    name: "Rajesh Kumar",
    role: "Car Owner, Chengalpattu",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
  },
  {
    text: "Bought an inverter battery and motor pump here. Home delivery was fast and installation was clean. Will always recommend K2D2!",
    name: "Selvam Murugan",
    role: "Home Owner, Chengalpattu",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&auto=format&fit=crop&q=80",
  },
  {
    text: "Very knowledgeable staff. They guided me to pick the right battery for my solar setup. Fair price, genuine product, fast service.",
    name: "Anand Krishnan",
    role: "Solar Customer, Chengalpattu",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles.headRow} reveal`}>
        <div>
          <p className="section-label">Customer Reviews</p>
          <h2 className="section-title">What People Say</h2>
        </div>
        <div className={styles.gBadge}>
          <span className={styles.gIcon}>G</span>
          <div>
            <span className={styles.gStars}>★★★★★</span>
            <span className={styles.gLabel}>Google Reviews</span>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        {REVIEWS.map((r) => (
          <article key={r.name} className={`${styles.card} reveal`}>
            <div className={styles.cardTop}>
            <div className={styles.stars}>★★★★★</div>
            <span className={styles.quoteChar}>&ldquo;</span>
          </div>
            <p className={styles.text}>{r.text}&rdquo;</p>
            <div className={styles.author}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.avatar} alt={r.name} className={styles.avatar} loading="lazy" />
              <div>
                <p className={styles.name}>{r.name}</p>
                <p className={styles.role}>{r.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
