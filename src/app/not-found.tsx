import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold text-slate-900">Page Not Found</h1>
      <p className="mt-4 text-slate-700">
        The page you requested could not be found. Please return to the homepage.
      </p>
      <Link href="/" className="mt-6 inline-block font-semibold text-sky-700">
        Back to home
      </Link>
    </section>
  );
}
