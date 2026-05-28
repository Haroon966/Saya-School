"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { volunteerAnnouncement } from "@/lib/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-pale)]";

export function VolunteerAnnouncementBar() {
  const pathname = usePathname();

  if (pathname === "/volunteer") {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Volunteer program announcement"
      className="border-b border-[var(--green-pale)]/20 bg-[var(--green-deep)] text-white"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 py-2.5 text-center sm:justify-between sm:px-8 sm:text-left">
        <p className="text-sm leading-snug text-white/90 sm:max-w-2xl">
          <span className="font-medium text-[var(--green-pale)]">Volunteer with SAYA — </span>
          {volunteerAnnouncement.message}
        </p>
        <Link
          href={volunteerAnnouncement.href}
          className={`inline-flex min-h-9 shrink-0 items-center justify-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold !text-[#0f1410] transition hover:bg-[var(--green-pale)] ${focusRing}`}
        >
          {volunteerAnnouncement.cta} →
        </Link>
      </div>
    </div>
  );
}
