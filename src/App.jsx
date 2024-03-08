import ProductSection from "./ProductSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import Layout from "./layouts";
import HomePage from "./layouts/HomePage";

function App() {
  return (
    <div id="main">
      {/* <Header />
      <HeroSection />
      <RangeSection />
      <ProductSection />  
      <Carosuel />
      <Footer /> 
      <AxiosTutorial /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop" element={<ProductSection/>} />
          <Route path="products/:productId" Component={ProductPage} />
        </Routes>
      </Layout>
      
    </div>
  );
}

export default App;
