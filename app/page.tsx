import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { ProblemSolution } from "@/components/problem-solution";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Founder } from "@/components/founder";
import { FinalCTA } from "@/components/final-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <Services />
      <CaseStudies />
      <Founder />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
