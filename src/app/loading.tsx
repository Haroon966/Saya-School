export default function Loading() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-16 sm:px-8"
      aria-label="Loading"
      aria-live="polite"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[var(--green-mid)]/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--green-pale)]/20 blur-3xl" />
      </div>

      <article className="saya-loader relative w-full max-w-xl rounded-3xl border border-[var(--border)] bg-white/85 p-8 text-center shadow-[0_16px_48px_rgba(26,92,42,0.12)] backdrop-blur-sm sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--green-mid)]">
          SAYA School
        </p>
        <h2 className="mt-3 text-4xl font-normal leading-tight text-[var(--ink)] sm:text-5xl">
          Preparing your
          <br />
          <em className="text-[var(--green-deep)]">learning space</em>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[var(--ink-muted)]">
          Every moment of loading supports a brighter future for every child.
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-[240px] items-center justify-between">
          <span className="saya-loader-dot h-3 w-3 rounded-full bg-[var(--green-deep)]" />
          <span className="saya-loader-dot h-3 w-3 rounded-full bg-[var(--green-mid)]" />
          <span className="saya-loader-dot h-3 w-3 rounded-full bg-[var(--green-light)]" />
          <span className="saya-loader-dot h-3 w-3 rounded-full bg-[var(--gold)]" />
        </div>

        <div className="saya-loader-line mt-7 h-1.5 overflow-hidden rounded-full bg-[var(--surface)]">
          <span className="block h-full w-1/3 rounded-full bg-[var(--green-mid)]" />
        </div>
      </article>
    </section>
  );
}
