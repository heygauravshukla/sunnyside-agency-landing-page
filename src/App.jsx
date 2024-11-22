import bannerMobile from "./assets/images/mobile/image-header.jpg";
import bannerDesktop from "./assets/images/desktop/image-header.jpg";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DesignAndPhotography from "./components/DesignAndPhotography";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="relative">
        <picture>
          <source srcSet={bannerDesktop} media="(min-width: 600px)" />
          <img src={bannerMobile} alt="banner image" />
        </picture>
        <div className="absolute inset-x-0 top-0">
          <Header />
          <Hero />
        </div>
      </div>
      <Features />
      <DesignAndPhotography />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}
