import Header from "@/components/site/header";
import Hero from "@/components/site/hero";
import Intro from "@/components/site/intro";
import Work from "@/components/site/work";
import Ledger from "@/components/site/ledger";
import Notebooks from "@/components/site/notebooks";
import Toolkit from "@/components/site/toolkit";
import Education from "@/components/site/education";
import Contact from "@/components/site/contact";
import Footer from "@/components/site/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Ledger />
        <Notebooks />
        <Toolkit />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
