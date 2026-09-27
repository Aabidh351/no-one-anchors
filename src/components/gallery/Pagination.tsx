"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function goTo(target: number) {
    if (target < 1 || target > totalPages || target === page) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(target));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Gallery pagination">
      <button
        onClick={() => goTo(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className="w-9 h-9 flex items-center justify-center rounded-full border border-line text-ink/70 hover:text-harbor hover:border-harbor/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => goTo(p)}
          aria-current={p === page ? "page" : undefined}
          className="relative w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium"
        >
          {p === page && (
            <motion.span
              layoutId="gallery-page-pill"
              className="absolute inset-0 bg-harbor rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className={`relative ${p === page ? "text-white" : "text-ink/70 hover:text-harbor"}`}>
            {p}
          </span>
        </button>
      ))}

      <button
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className="w-9 h-9 flex items-center justify-center rounded-full border border-line text-ink/70 hover:text-harbor hover:border-harbor/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}