import { Navigation, Footer } from "@/components/layout";
import { Hero } from "@/components/memorial/Hero";
import { AboutSection } from "@/components/memorial/AboutSection";
import { BiographySection } from "@/components/memorial/BiographySection";
import { Timeline } from "@/components/memorial/Timeline";
import { Gallery } from "@/components/memorial/Gallery";
import { Stories } from "@/components/memorial/Stories";
import { GalleryPreview } from "@/components/sidebar/GalleryPreview";
import { RecentUpdates } from "@/components/sidebar/RecentUpdates";
import { RemembranceDays } from "@/components/sidebar/RemembranceDays";

export default function Home() {
  return (
    <>
      <Hero />
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="min-w-0 space-y-8 sm:space-y-10">
            <AboutSection />
            <BiographySection />
            <Timeline />
            <Gallery />
            <Stories />
          </div>
          <aside className="min-w-0 space-y-5 lg:sticky lg:top-16">
            <RecentUpdates />
            <RemembranceDays />
            <GalleryPreview />
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
