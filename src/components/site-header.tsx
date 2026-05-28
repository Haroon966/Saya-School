"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/lib/site";
import { withBasePath } from "@/lib/with-base-path";
import { VolunteerAnnouncementBar } from "@/components/volunteer-announcement-bar";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopNavItems = navigationLinks.filter(
    (item) => item.label !== "Donate" && item.label !== "Home",
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <VolunteerAnnouncementBar />
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "border-b bg-[rgba(253,255,254,0.95)] backdrop-blur-md" : "bg-transparent"
        }`}
        style={{ borderColor: "var(--border)" }}
      >
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={withBasePath("/logo.jpg")}
            alt="SAYA School logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="font-display text-xl font-medium text-[var(--green-deep)]">
            SAYA <span className="ml-1 text-base opacity-65">سایہ</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-6 text-sm text-[var(--ink-muted)] xl:gap-8">
            {desktopNavItems.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[var(--green-deep)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/donate"
          className="ml-3 hidden whitespace-nowrap rounded-full bg-[var(--green-deep)] px-5 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--green-mid)] md:inline-block"
        >
          Donate →
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden"
          style={{ borderColor: "var(--border)" }}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-[var(--ink)] transition ${
                isOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[10px] h-0.5 w-4 bg-[var(--ink)] transition ${
                isOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      </div>

      {isOpen ? (
        <div className="border-t bg-[var(--bg)] px-5 py-6 lg:hidden" style={{ borderColor: "var(--border)" }}>
          <ul className="space-y-4 text-lg text-[var(--ink)]">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
