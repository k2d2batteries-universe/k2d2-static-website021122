import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const PRODUCTS = [
  "Car Batteries", "Bike Batteries", "Inverter Batteries",
  "Solar Batteries", "Motor Pumps", "Industrial VRLA",
];

const SERVICES = [
  "Free Battery Test", "Battery Exchange", "Home Delivery",
  "Installation", "Bulk Orders", "Emergency Service",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="#home" className={styles.logoWrap}>
            <Image src="/logo.png" alt="K2D2" width={44} height={44} className={styles.logoImg} />
            <div className={styles.logoText}>
              <span className={styles.logoName}>
                K<span className={styles.green}>2</span>D<span className={styles.red}>2</span>
              </span>
              <span className={styles.tagline}>Batteries &amp; Motor Pumps</span>
            </div>
          </Link>
          <p className={styles.about}>
            Your trusted source for all kinds of batteries and motor pumps in
            Chengalpattu. Genuine products, best prices, expert service.
          </p>
          <div className={styles.social}>
            <a href="tel:+917200025072" className={styles.socialBtn}>📞 Call</a>
            <a href="mailto:k2d2.batteries@gmail.com" className={styles.socialBtn}>✉ Email</a>
            <a href="https://wa.me/917200025072" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Products */}
        <FooterCol title="Products" items={PRODUCTS.map((l) => ({ label: l, href: "#products" }))} />

        {/* Services */}
        <FooterCol title="Services" items={SERVICES.map((l) => ({ label: l, href: "#features" }))} />

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.contactList}>
            <li><a href="tel:+917200025072">📞 +91 72000 25072</a></li>
            <li><a href="mailto:k2d2.batteries@gmail.com">✉ k2d2.batteries@gmail.com</a></li>
            <li>
              <a href="https://maps.google.com/?q=K2D2+Batteries+Chengalpattu" target="_blank" rel="noopener noreferrer">
                📍 Chengalpattu — 603308, Tamil Nadu
              </a>
            </li>
            <li>
              <a href="https://wa.me/917200025072" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 K2D2 Batteries &amp; Motor Pumps · Chengalpattu 603308 · All rights reserved.</p>
        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div className={styles.col}>
      <h4 className={styles.colTitle}>{title}</h4>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
