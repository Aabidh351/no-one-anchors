
import Link from "next/link";
import NotFoundAnimation from "@/components/animation/NotFoundAnimation";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-foam flex items-center justify-center">
      <div className="text-center">


        <NotFoundAnimation />

        <h1 className="text-4xl font-bold text-ink">
          Looks like we lost our way.
        </h1>

        <p className="mt-4 text-slate-500">
          The page you&apos;re looking for has sailed away.
        </p>

        <Link
          href="/"
          className="inline-flex mt-8 rounded-full bg-harbor px-6 py-3 text-white"
        >
          Return to Port →
        </Link>

      </div>
    </main>
  );
}