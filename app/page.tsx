import AnnouncementRibbon from "@/components/AnnouncementRibbon";
import CallToAction from "@/components/CallToAction";
import FocusAreasPreview from "@/components/FocusAreasPreview";
import Hero from "@/components/Hero";
import InitiativesPreview from "@/components/InitiativesPreview";
import MissionVision from "@/components/MissionVision";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AnnouncementRibbon />
      <MissionVision />
      <FocusAreasPreview />
      <InitiativesPreview />
      <CallToAction />
    </main>
  );
}
