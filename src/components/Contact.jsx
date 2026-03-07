import styles from "./Contact.module.css";

const HOURS = [
  { day: "Monday – Saturday", time: "8:00 AM – 8:00 PM", color: "green" },
  { day: "Sunday",             time: "9:00 AM – 5:00 PM",  color: "white" },
  { day: "Emergency / Breakdown", time: "Call Anytime",    color: "red"   },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className="reveal">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Visit or Call Us</h2>
      </div>

      <div className={styles.grid}>
        {/* Left col */}
        <div className={`${styles.infoCol} reveal`}>
          <ContactItem icon="📞" variant="green" label="Phone / WhatsApp">
            <a href="tel:+917200025072" className={styles.valueGreen}>
              +91 72000 25072
            </a>
            <span className={styles.hint}>Tap to call or WhatsApp directly</span>
          </ContactItem>

          <ContactItem icon="✉" variant="red" label="Email Address">
            <a href="mailto:k2d2.batteries@gmail.com" className={styles.valueGreen}>
              k2d2.batteries@gmail.com
            </a>
            <span className={styles.hint}>We reply within a few hours</span>
          </ContactItem>

          <ContactItem icon="📍" variant="green" label="Store Address">
            <a
              href="https://maps.google.com/?q=K2D2+Batteries+Chengalpattu+603308"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.valueGreen}
            >
              Chengalpattu — 603 308
            </a>
            <span className={styles.hint}>Tamil Nadu, India · Tap for directions</span>
          </ContactItem>

          <div className={styles.hours}>
            <h4 className={styles.hoursTitle}>🕐 Store Hours</h4>
            {HOURS.map((h) => (
              <div key={h.day} className={styles.hoursRow}>
                <span className={styles.day}>{h.day}</span>
                <span className={`${styles.time} ${styles[`time_${h.color}`]}`}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right col: QR + Map */}
        <div className={`${styles.mapCol} reveal`}>
          {/* QR */}
          <div className={styles.qrBox}>
            <h4 className={styles.qrTitle}>🔍 Find Us on Google</h4>
            <p className={styles.qrSub}>
              Scan to view our Google Business Profile, read reviews, and get
              directions to our store.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={styles.qrFrame}>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=https%3A%2F%2Fmaps.google.com%2F%3Fq%3DK2D2%2BBatteries%2BMotor%2BPumps%2BChengalpattu%2B603308&color=000000&bgcolor=ffffff&margin=6"
                alt="Google Maps QR Code"
                width={170}
                height={170}
                loading="lazy"
              />
            </div>
            <span className={styles.qrBrand}>K2D2 Batteries &amp; Motor Pumps</span>
            <div className={styles.qrActions}>
              <a
                href="https://maps.google.com/?q=K2D2+Batteries+Motor+Pumps+Chengalpattu+603308"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
                style={{ fontSize: "0.76rem", padding: "10px 18px" }}
              >
                📍 Open in Google Maps
              </a>
              <a
                href="tel:+917200025072"
                className="btn-red"
                style={{ fontSize: "0.76rem", padding: "10px 18px" }}
              >
                📞 Call Us
              </a>
            </div>
          </div>

          {/* OpenStreetMap — no API key needed */}
          <div className={styles.mapBox}>
            <div className={styles.mapHeader}>
              <span>📍 Our Location</span>
              <a
                href="https://www.openstreetmap.org/?mlat=12.6921&mlon=79.9616&zoom=16"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Full Map ↗
              </a>
            </div>
            <iframe
              className={styles.osmFrame}
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.9516%2C12.6821%2C79.9716%2C12.7021&layer=mapnik&marker=12.6921%2C79.9616"
              title="K2D2 Location — Chengalpattu"
              loading="lazy"
              allowFullScreen
            />
            <div className={styles.mapFooter}>
              <span>Chengalpattu, Tamil Nadu 603308</span>
              <a
                href="https://maps.google.com/?q=K2D2+Batteries+Chengalpattu+603308"
                target="_blank"
                rel="noopener noreferrer"
              >
                → Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, variant, label, children }) {
  return (
    <div className={styles.contactItem}>
      <div className={`${styles.contactIcon} ${variant === "red" ? styles.iconRed : styles.iconGreen}`}>
        {icon}
      </div>
      <div>
        <p className={styles.contactLabel}>{label}</p>
        {children}
      </div>
    </div>
  );
}
