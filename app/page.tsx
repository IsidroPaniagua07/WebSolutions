import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Comparison from '@/components/Comparison';
import GetQuote from '@/components/GetQuote';
import AreasServed from '@/components/AreasServed';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <HowItWorks />
      <About />
      <WhyUs />
      <Comparison />
      <GetQuote />
      <AreasServed />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}
