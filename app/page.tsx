import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import KeyBenefits from "./components/KeyBenefits";
import Challenge from "./components/Challenge";
import TurningVisibility from "./components/TurningVisibility";
import CaseStudies from "./components/CaseStudies";
import Industries from "./components/Industries";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <TrustedBy></TrustedBy>
    <KeyBenefits></KeyBenefits>
    <Challenge></Challenge>
    <TurningVisibility></TurningVisibility>
    <CaseStudies></CaseStudies>
    <Industries></Industries>
    <FAQSection></FAQSection>
    <CTASection></CTASection>
    <Footer></Footer>
   </div>
  );
}
