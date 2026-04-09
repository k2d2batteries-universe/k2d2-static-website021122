"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Products",  href: "#products" },
  { label: "Why Us",    href: "#features" },
  { label: "Contact",   href: "#contact"  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} ref={navRef}>
      {/* Logo */}
      <Link href="#home" className={styles.logoWrap} onClick={close}>
        <Image
          src="/logo.png"
          alt="K2D2 Logo"
          width={50}
          height={50}
          className={styles.logoImg}
          priority
        />
        <div className={styles.logoText}>
          <span className={styles.logoName}>
            K<span className={styles.green}>2</span>D<span className={styles.red}>2</span>
          </span>
          <span className={styles.tagline}>Batteries &amp; Motor Pumps</span>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className={styles.desktopNav} aria-label="Main navigation">
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={styles.navLink}>
            {l.label}
          </Link>
        ))}
        <ThemeToggle />
        <a href="tel:+917200025072" className={styles.navCta}>
          📞 Call Now
        </a>
      </nav>

      {/* Mobile theme toggle + hamburger */}
      <div className={styles.mobileActions}>
        <ThemeToggle />
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={close}>
            {l.label}
          </Link>
        ))}
        <a
          href="tel:+917200025072"
          className={styles.mobileCta}
          onClick={close}
        >
          📞 Call Now — +91 72000 25072
        </a>
      </nav>
    </header>
  );
}
