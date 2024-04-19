import CarImages from "./components/carImages";
import Cars from "./components/cars";
import Faq from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import HowItWorks from "./components/howItWorks";
import Partners from "./components/partners";
import Retro from "./components/retro";
import ScrollToTopButton from "./components/scrollTo";
import Testimonial from "./components/testimonial";


export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Cars />
      <CarImages />
      <HowItWorks />
      <Retro />
      <Faq />
      <Testimonial />
      <Partners />
      <ScrollToTopButton />
    </div>
  )
}
