"use client";

import { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("k2d2-theme");
    const current = document.documentElement.getAttribute("data-theme");
    const dark = saved ? saved === "dark" : (current !== "light");
    setIsDark(dark);
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("k2d2-theme", theme);
  }

  if (!mounted) return <div className={styles.placeholder} />;

  return (
    <button
      className={styles.toggle}
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className={styles.icon}>{isDark ? "☀" : "🌙"}</span>
    </button>
  );
}
