import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { WhoWeHelp } from "@/components/who-we-help";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <WhoWeHelp />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
