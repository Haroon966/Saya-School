import Link from "next/link";
import { navigationLinks, siteConfig, socialLinks } from "@/lib/site";
import { withBasePath } from "@/lib/with-base-path";

export function SiteFooter() {
  return (
    <footer className="relative bg-[var(--dm-bg)] px-5 pb-5 pt-24 text-[var(--dm-text)] sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[9.8rem] right-0 z-10 h-60 w-60 bg-contain bg-no-repeat bg-top-right sm:right-6"
        style={{ backgroundImage: `url(${withBasePath("/saya-tree-silhouette.png")})` }}
      />
      <div className="mx-auto w-full max-w-[1200px]">
        <section className="relative z-20 mb-14 rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-pale)]">
                Keep the mission growing
              </p>
              <h2 className="font-display mt-2 text-3xl font-normal text-white sm:text-4xl">
                Stand with SAYA School
              </h2>
            </div>
            <Link
              href="/donate"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#0f1410] shadow-sm transition hover:bg-[var(--green-pale)] hover:!text-[#0f1410]"
            >
              Donate now →
            </Link>
          </div>
        </section>

        <div className="relative z-20 grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.7fr_1fr_1fr]">
          <section>
          <h2 className="font-display text-3xl font-medium text-white">SAYA School</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
            Empowering underprivileged children through free, quality education since 2008.
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.1em] text-white/40">
            Islamabad, Pakistan
          </p>
          {socialLinks.length > 0 ? (
            <div className="mt-6 flex gap-3 text-xs">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-white/20 px-3 py-2 text-white/70 transition hover:border-[var(--green-pale)] hover:text-[var(--green-pale)]"
                >
                  {social.short}
                </a>
              ))}
            </div>
          ) : null}
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.1em] text-white/75">Quick Links</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[var(--green-pale)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.1em] text-white/75">Contact Us</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>{siteConfig.address}</li>
              <li>
                <a href={siteConfig.phones[0].href} className="transition hover:text-[var(--green-pale)]">
                  {siteConfig.phones[0].display}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--green-pale)]">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="relative z-20 mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-2 py-5 text-xs tracking-wide text-white/35">
        <p className="flex flex-wrap items-center gap-2">
          <span>Design and Develop by</span>
          <a
            href="https://github.com/Haroon966"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-[var(--green-pale)]"
          >
            haroon ali
          </a>
          <span>·</span>
          <a
            href="https://github.com/Haroon966"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white/60 transition hover:text-[var(--green-pale)]"
            aria-label="Haroon Ali GitHub profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.97-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.6.24 2.78.12 3.07.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.28 5.68.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.2.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span>@Haroon966</span>
          </a>
          <span>·</span>
          <a
            href="https://www.instagram.com/haroon.1920/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white/60 transition hover:text-[var(--green-pale)]"
            aria-label="Haroon Ali Instagram profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.87a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
            </svg>
            <span>@haroon.1920</span>
          </a>
        </p>
        <p className="font-mono uppercase tracking-[0.08em] text-white/30">Organic learning, lasting impact</p>
      </div>
    </footer>
  );
}
