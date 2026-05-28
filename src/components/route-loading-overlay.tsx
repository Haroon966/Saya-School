"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { withBasePath } from "@/lib/with-base-path";

export function RouteLoadingOverlay() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const isFirstPathEvent = useRef(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    clearTimer();
    timerRef.current = setTimeout(() => setIsVisible(false), 3000);

    return () => clearTimer();
  }, []);

  useEffect(() => {
    if (isFirstPathEvent.current) {
      isFirstPathEvent.current = false;
      return;
    }

    setIsVisible(true);
    clearTimer();
    timerRef.current = setTimeout(() => setIsVisible(false), 1500);

    return () => clearTimer();
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 z-[120] transition-opacity duration-300 ${
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)] px-5 py-16 sm:px-8"
        aria-label="Loading"
        aria-live="polite"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[var(--green-mid)]/15 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--green-pale)]/20 blur-3xl" />
        </div>

        <article className="saya-loader relative w-full max-w-xl p-8 text-center backdrop-blur-sm sm:p-10">
          <Image
            src={withBasePath("/logo.jpg")}
            alt="SAYA School logo"
            width={80}
            height={80}
            priority
            className="mx-auto h-20 w-20 object-cover"
          />
          <h2 className="mt-3 font-sans text-4xl font-medium leading-tight text-[var(--ink)] sm:text-5xl">
            Loading...
          </h2>

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
