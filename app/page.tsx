import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import WhyUs from '@/components/WhyUs';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </>
  );
}
