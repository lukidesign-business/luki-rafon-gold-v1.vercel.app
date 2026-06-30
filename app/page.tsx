import HeroSection from "@/components/hero-section"
import SocialSection from "@/components/social-section"
import Disclaimer from "@/components/disclaimer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SocialSection />
      <Disclaimer />
    </main>
  )
}
