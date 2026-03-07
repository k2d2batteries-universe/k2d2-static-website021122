"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — client-only component.
 * Observes all `.reveal` elements and adds `.visible` when they enter the viewport.
 * Placed at the end of the page so it runs after all server-rendered markup is hydrated.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add("visible"),
              i * 80
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // No UI — side-effect only
}
