"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/with-base-path";

const FIRST_VISIT_MS = 500;

export function RouteLoadingOverlay() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const showMs = prefersReducedMotion ? 0 : FIRST_VISIT_MS;
    const fadeMs = prefersReducedMotion ? 0 : 300;

    timerRef.current = setTimeout(() => setPhase("fading"), showMs);

    const hideTimer = setTimeout(() => setPhase("hidden"), showMs + fadeMs);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[120] transition-opacity duration-300 ${
        phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)] px-5 py-16 sm:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[var(--green-mid)]/15 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />
        </div>
        <article className="saya-loader relative w-full max-w-xl p-8 text-center sm:p-10">
          <Image
            src={withBasePath("/logo.jpg")}
            alt=""
            width={80}
            height={80}
            priority
            className="mx-auto h-20 w-20 object-cover"
            aria-hidden
          />
          <p className="mt-3 font-sans text-2xl font-medium text-[var(--ink)]">SAYA School</p>
          <div className="mx-auto mt-8 flex w-full max-w-[240px] items-center justify-between">
            <span className="saya-loader-dot h-3 w-3 rounded-full bg-[var(--green-deep)]" />
            <span className="saya-loader-dot h-3 w-3 rounded-full bg-[var(--green-mid)]" />
            <span className="saya-loader-dot h-3 w-3 rounded-full bg-[var(--green-light)]" />
            <span className="saya-loader-dot h-3 w-3 rounded-full bg-[var(--gold)]" />
          </div>
        </article>
      </section>
    </div>
  );
}
