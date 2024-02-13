import { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import RangeSection from "./RangeSection";
import Carosuel from "./Carosuel"
import ProductSection from "./ProductSection";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <RangeSection />
      <ProductSection />
      <Carosuel />
      <Footer />
    </>
  );
}

export default App;
