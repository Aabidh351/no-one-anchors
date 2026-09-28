import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Pagination from "@/components/gallery/Pagination";
import { getGalleryPage } from "@/lib/gallery";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at our warehouses, deliveries, provisioning, and team across the port network.",
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
const page = Math.max(1, Number(pageParam) || 1);
const { images, totalPages } = getGalleryPage(page, 10);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look at operations across the network."
        description="Warehouses, deliveries, provisioning, and the teams behind them — a few ports at a time."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <GalleryGrid images={images} />
        <Pagination page={page} totalPages={totalPages} />
      </section>
    </>
  );
}