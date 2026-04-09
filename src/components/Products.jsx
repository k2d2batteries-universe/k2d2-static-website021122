import Image from "next/image";
import styles from "./Products.module.css";

const PRODUCTS = [
  {
    id: "car",
    tag: "Automotive",
    tagVariant: "green",
    name: "Car & Bike Batteries",
    desc: "Exide, Amaron, SF Sonic — all sizes. Guaranteed fitment for every vehicle model.",
    specs: [{ v: "All Brands", l: "Available" }, { v: "Free", l: "Fitment" }],
    img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "inverter",
    tag: "Home & UPS",
    tagVariant: "red",
    name: "Inverter & UPS Batteries",
    desc: "Tubular, flat plate, VRLA — all capacities. Home delivery & installation included.",
    specs: [{ v: "100Ah+", l: "Capacities" }, { v: "3–5yr", l: "Warranty" }],
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "motor",
    tag: "Motor Pumps",
    tagVariant: "green",
    name: "Water Motor Pumps",
    desc: "Submersible, monoblock, centrifugal. Agriculture, domestic & industrial — all HP ratings.",
    specs: [{ v: "0.5–10HP", l: "Range" }, { v: "All Types", l: "Available" }],
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "solar",
    tag: "Solar",
    tagVariant: "green",
    name: "Solar Batteries",
    desc: "Deep cycle batteries for solar storage. High retention, long cycle life for off-grid systems.",
    specs: [{ v: "Deep Cycle", l: "Type" }, { v: "5yr+", l: "Life" }],
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "ev",
    tag: "E-Vehicle",
    tagVariant: "red",
    name: "E-Bike & E-Rickshaw",
    desc: "Lithium & lead-acid packs for electric two-wheelers, three-wheelers, and light EVs.",
    specs: [{ v: "Li-Ion", l: "Available" }, { v: "Quick", l: "Swap" }],
    img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "industrial",
    tag: "Industrial",
    tagVariant: "green",
    name: "Industrial & VRLA",
    desc: "SMF, VRLA, flooded cell for telecom towers, hospitals, data centers & heavy equipment.",
    specs: [{ v: "VRLA/SMF", l: "Type" }, { v: "Bulk", l: "Orders OK" }],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
  },
];

export default function Products() {
  return (
    <section className={styles.section} id="products">
      <div className={`${styles.header} reveal`}>
        <div>
          <p className="section-label">Our Stock</p>
          <h2 className="section-title">What We Carry</h2>
        </div>
        <a href="tel:+917200025072" className="btn-outline">
          📞 Call to Check Stock
        </a>
      </div>

      <div className={styles.grid}>
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ tag, tagVariant, name, desc, specs, img }) {
  return (
    <article className={`${styles.card} reveal`}>
      <div className={styles.imgWrap}>
        <Image src={img} alt={name} fill sizes="(max-width:768px) 100vw, 33vw" className={styles.img} />
        <div className={styles.gloss} />
      </div>
      <div className={styles.body}>
        <span className={`${styles.tag} ${tagVariant === "red" ? styles.tagRed : styles.tagGreen}`}>
          {tag}
        </span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.specs}>
          {specs.map((s) => (
            <div key={s.l} className={styles.spec}>
              <span className={styles.specVal}>{s.v}</span>
              <span className={styles.specLbl}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
