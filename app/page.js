import CarImages from "./components/carImages";
import Cars from "./components/cars";
import ContactInfo from "./components/contactInfo";
import Faq from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import HowItWorks from "./components/howItWorks";
import Navbar from "./components/navbar";
import Partners from "./components/partners";
import Retro from "./components/retro";
import ScrollToTopButton from "./components/scrollTo";
import Testimonial from "./components/testimonial";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactInfo />
      <Features />
      <Cars />
      <CarImages />
      {/* <HowItWorks /> */}
      <Retro />
      <Faq />
      <Testimonial />
      {/* <Partners /> */}
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}
