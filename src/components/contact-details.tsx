import { siteConfig } from "@/lib/site";

type ContactDetailsProps = {
  variant?: "default" | "compact";
};

export function ContactDetails({ variant = "default" }: ContactDetailsProps) {
  const labelClass = "font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]";
  const valueClass =
    variant === "compact"
      ? "mt-1 text-sm leading-7 text-[var(--ink-muted)]"
      : "mt-2 block text-lg font-medium text-[var(--ink)]";

  return (
    <div className={variant === "compact" ? "space-y-5 text-sm leading-7 text-[var(--ink-muted)]" : "space-y-6"}>
      <div className={variant === "default" ? "border-b border-[var(--border)] pb-4" : ""}>
        <p className={labelClass}>Address</p>
        {variant === "compact" ? (
          <p className="mt-1">{siteConfig.address}</p>
        ) : (
          <span className={valueClass}>{siteConfig.address}</span>
        )}
      </div>
      <div className={variant === "default" ? "border-b border-[var(--border)] pb-4" : ""}>
        <p className={labelClass}>Phone Numbers</p>
        <div className={variant === "compact" ? "mt-1 flex flex-col gap-1" : "mt-2 flex flex-col gap-2"}>
          {siteConfig.phones.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className={
                variant === "compact"
                  ? "transition hover:text-[var(--green-mid)]"
                  : `${valueClass} transition hover:text-[var(--green-mid)]`
              }
            >
              {phone.display}
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className={labelClass}>Email Addresses</p>
        <div className={variant === "compact" ? "mt-1 flex flex-col gap-1" : "mt-2 flex flex-col gap-2"}>
          {siteConfig.emails.map((email) => (
            <a
              key={email.href}
              href={email.href}
              className={
                variant === "compact"
                  ? "transition hover:text-[var(--green-mid)]"
                  : `${valueClass} transition hover:text-[var(--green-mid)]`
              }
            >
              {email.display}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
