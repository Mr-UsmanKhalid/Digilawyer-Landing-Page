import React from 'react'
import Topsection from './LandingPages/Topsection.jsx'
import Features from './LandingPages/Features.jsx'
import Testimonials from './LandingPages/Testimonials.jsx'
import About from './LandingPages/About.jsx'
import Pricing from './LandingPages/Pricing.jsx'
import Footer from './LandingPages/Footer.jsx'

const Home = () => {
  return (
    <>
    <Topsection/>
    <Features />
    <Testimonials />
    <About />
    <Pricing />
    <Footer />
    </>
  )
}

export default Home