import React, {useState,useEffect} from 'react'
import ProductCards from './ProductCards'
import SectionTitle from "../GlobalComponents/SectionTitle";
import Button from '../GlobalComponents/Button';

const ProductSection = () => {
  
  //Fetch Data from Api
  const [items,setItems]=useState([]);
  // console.log(items);
  useEffect(()=>{
    itemsData();
  },[])
  const itemsData=async ()=>{
    const response=await fetch("https://fakestoreapi.com/products");
    const jsonData=await response.json();
    // console.log(jsonData)
    setItems(jsonData)
  }
  
  return (
  <section className="flex flex-wrap justify-center m-6">
  <SectionTitle title="Our Products" />

  <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mx-10 overflow-hidden">
    {items.map((item,index)=>(
    <ProductCards 
        imgUrl={item.image}
        title={item.title}
        category={item.category}
        price={item.price}
        rating={item.rating.rate}
        key={index}
        /> 
        ))} 
  </div>

  <div>
    <Button title="Show More"/>
    {/* <button
      className="bg-[#FFFFFF] text-[#B88E2F] shadow font-bold py-4 px-10 rounded m-2"
    >
      Show More
    </button> */}
  </div>
</section>
  )
}

export default ProductSection