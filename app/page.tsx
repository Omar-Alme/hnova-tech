import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { ProblemSolution } from "@/components/problem-solution";
import { Services } from "@/components/services";
import { EngagementPath } from "@/components/engagement-path";
import { CaseStudies } from "@/components/case-studies";
import { Founder } from "@/components/founder";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <Services />
        <EngagementPath />
        <CaseStudies />
        <Founder />
        <FAQ />
        <Contact />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
