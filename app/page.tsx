import Hero from "@/components/Hero"
import MissionVision from "@/components/MissionVision"
import FocusAreasPreview from "@/components/FocusAreasPreview"
import InitiativesPreview from "@/components/InitiativesPreview"
import CallToAction from "@/components/CallToAction"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MissionVision />
      <FocusAreasPreview />
      <InitiativesPreview />
      <CallToAction />
    </main>
  )
}
