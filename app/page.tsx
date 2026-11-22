import { Connect } from "@/components/connect";
import { DualWorld } from "@/components/dual-world";
import { Footer } from "@/components/footer";
import { Garage } from "@/components/garage";
import { Hero } from "@/components/hero";
import { JourneyCards } from "@/components/journey-cards";
import { Loader } from "@/components/loader";
import { MarqueeBand } from "@/components/marquee-band";
import { Moments } from "@/components/moments";
import { Nav } from "@/components/nav";
import { Story } from "@/components/story";

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <MarqueeBand />
        <DualWorld />
        <Moments />
        <JourneyCards />
        <Story />
        <Garage />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
