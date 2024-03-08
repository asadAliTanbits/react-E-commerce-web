import React from 'react'
import Footer from "../Footer";
import Header from '../Header'
import HeroSection from "../HeroSection";
import RangeSection from "../RangeSection";
import Carosuel from "../Carosuel";
import ProductSection from "../ProductSection";

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
      {/* <HeroSection />
      <RangeSection />
      <ProductSection />
      <Carosuel />*/}
      <Footer /> 
    </div>
  )
}

export default Layout