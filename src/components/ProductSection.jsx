import React from 'react'
import ProductCards from './ProductCards'
import SectionTitle from './SectionTitle'

const ProductSection = () => {
  return (
  <section className="flex flex-wrap justify-center m-6">
  <SectionTitle title="Our Products" />

  <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mx-10 overflow-hidden">
    <ProductCards 
        imgUrl="./src/assets/ProductImg.png"
        title="Sofa" 
        detail="Luxury Sofa"
        price="20$"
        newPrice="10$"/>
    <ProductCards 
        imgUrl="./src/assets/Images.png"
        title="Sofa" 
        detail="Luxury Sofa"
        price="20$"
        newPrice="10$"/>
    <ProductCards 
        imgUrl="./src/assets/image 3.png"
        title="Sofa" 
        detail="Luxury Sofa"
        price="20$"
        newPrice="10$"/>
    <ProductCards 
        imgUrl="./src/assets/Image 5.png"
        title="Sofa" 
        detail="Luxury Sofa"
        price="20$"
        newPrice="10$"/>
    <ProductCards 
        imgUrl="./src/assets/Image 6.png"
        title="Sofa" 
        detail="Luxury Sofa"
        price="20$"
        newPrice="10$"/>
    <ProductCards 
        imgUrl="./src/assets/Image 7.png"
        title="Sofa" 
        detail="Luxury Sofa"
        price="20$"
        newPrice="10$"/>
    <ProductCards 
        imgUrl="./src/assets/image 8.png"
        title="Sofa" 
        detail="Luxury Sofa"
        price="20$"
        newPrice="10$"/>
    <ProductCards 
        imgUrl="./src/assets/Rectangle23.jpg"
        title="Sofa" 
        detail="Luxury Sofa"
        price="20$"
        newPrice="10$"/>
    
    
  </div>

  <div>
    <button
      className="bg-[#FFFFFF] text-[#B88E2F] shadow font-bold py-4 px-10 rounded m-2"
    >
      Show More
    </button>
  </div>
</section>
  )
}

export default ProductSection