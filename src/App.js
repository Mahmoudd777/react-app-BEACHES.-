import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero';
import Destinations from './components/destinations/Destinations';
import ScrollToTop from './components/ScrollToTop';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import ImgCarousel from './components/carousel/ImgCarousel';
import Footer from './components/footer/Footer';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
function App() {
    //aos
    useEffect(() => {
      AOS.init()
      AOS.refresh()
    }, [])
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Hero/>
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
