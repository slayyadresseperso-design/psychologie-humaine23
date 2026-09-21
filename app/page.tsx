import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Chapters from "@/components/Chapters";
import WhyThisBook from "@/components/WhyThisBook";
import ReadingExperience from "@/components/ReadingExperience";
import ForWho from "@/components/ForWho";
import Excerpt from "@/components/Excerpt";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Intro />
      <Chapters />
      <WhyThisBook />
      <ReadingExperience />
      <ForWho />
      <Excerpt />
      <Pricing />
      <Process />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
