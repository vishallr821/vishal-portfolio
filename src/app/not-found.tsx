import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-6 text-center text-white">
      <h1 className="font-serif text-8xl font-bold tracking-tighter text-accent md:text-9xl">
        404
      </h1>
      <p className="mt-4 text-2xl font-medium md:text-3xl">
        Oops! Page not found.
      </p>
      <p className="mt-4 max-w-md text-white/70">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light"
      >
        Go Home
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
