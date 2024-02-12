import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import RangeSection from './components/RangeSection'
import ProductSection from './components/ProductSection'
import Carosuel from './components/Carosuel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <HeroSection/>
    <RangeSection/>
    <ProductSection/>
    <Carosuel/>
    <Footer/>
    </>
  )
}

export default App
