import AboutHero from "@/components/about/AboutHero"
import OurStory from "@/components/about/OurStory"
import FounderMessage from "@/components/about/FounderMessage"
import Values from "@/components/about/Values"
import Timeline from "@/components/about/Timeline"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <AboutHero />
      <OurStory />
      <FounderMessage />
      <Values />
      <Timeline />
    </main>
  )
}
