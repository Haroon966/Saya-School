"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const scrollRevealEase = "power2.out";

export function HomeAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".home-hero-eyebrow",
            ".home-hero-line",
            ".home-hero-body",
            ".home-hero-actions",
            ".home-hero-stat",
            ".home-hero-image",
            ".home-section-header",
            ".home-reveal-card",
            ".home-quote-inner",
            ".home-donate-copy",
            ".home-donate-tiers",
            ".home-contact-panel",
          ],
          { opacity: 1, y: 0, x: 0, scale: 1 },
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set([".home-hero-eyebrow", ".home-hero-line", ".home-hero-body", ".home-hero-actions"], {
          opacity: 0,
          y: 24,
        });
        gsap.set(".home-hero-stat", { opacity: 0, y: 16 });
        gsap.set(".home-hero-image", { scale: 1.03, transformOrigin: "center center" });

        gsap.set(".home-section-header", { opacity: 0, y: 24 });
        gsap.set(".home-reveal-card", { opacity: 0, y: 28 });
        gsap.set(".home-quote-inner", { opacity: 0, y: 24 });
        gsap.set(".home-donate-copy", { opacity: 0, x: -24 });
        gsap.set(".home-donate-tiers", { opacity: 0, x: 24 });
        gsap.set(".home-contact-panel", { opacity: 0, y: 32 });

        const heroTimeline = gsap.timeline({
          delay: 0.85,
          defaults: { ease: scrollRevealEase, duration: 0.7 },
        });

        heroTimeline
          .to(".home-hero-eyebrow", { opacity: 1, y: 0 })
          .to(".home-hero-line", { opacity: 1, y: 0, stagger: 0.12 }, "-=0.4")
          .to(".home-hero-body", { opacity: 1, y: 0 }, "-=0.35")
          .to(".home-hero-actions", { opacity: 1, y: 0 }, "-=0.4")
          .to(".home-hero-stat", { opacity: 1, y: 0, stagger: 0.08, duration: 0.55 }, "-=0.2");

        gsap.to(".home-hero-image", {
          scale: 1,
          duration: 1.2,
          ease: scrollRevealEase,
          delay: 0.85,
        });

        ScrollTrigger.batch(".home-section-header", {
          start: "top 88%",
          once: true,
          onEnter: (elements) =>
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.65,
              ease: scrollRevealEase,
            }),
        });

        ScrollTrigger.batch(".home-reveal-card", {
          start: "top 88%",
          once: true,
          onEnter: (elements) =>
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.65,
              ease: scrollRevealEase,
            }),
        });

        ScrollTrigger.batch(".home-quote-inner", {
          start: "top 88%",
          once: true,
          onEnter: (elements) =>
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: scrollRevealEase,
            }),
        });

        ScrollTrigger.batch(".home-donate-copy", {
          start: "top 85%",
          once: true,
          onEnter: (elements) =>
            gsap.to(elements, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: scrollRevealEase,
            }),
        });

        ScrollTrigger.batch(".home-donate-tiers", {
          start: "top 85%",
          once: true,
          onEnter: (elements) =>
            gsap.to(elements, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              delay: 0.15,
              ease: scrollRevealEase,
            }),
        });

        ScrollTrigger.batch(".home-contact-panel", {
          start: "top 88%",
          once: true,
          onEnter: (elements) =>
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: scrollRevealEase,
            }),
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return <div ref={containerRef}>{children}</div>;
}
