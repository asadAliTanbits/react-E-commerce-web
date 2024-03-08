import React from "react";
import { useState } from "react";
import SectionTitle from "../GlobalComponents/SectionTitle";
import Button from "../GlobalComponents/Button";

const Carosuel = () => {
  const images = [
    {
      image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:"luxury Sofa "
    },
    {
      image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:"Sofa Chair"
    },
    {
      image:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "XYZ Luxury Chair "
    },
    {
      image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:"Modern lamp",
    }    
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <div className="container mx-auto p-4 md:mb-8">
       <div className="bg-[#FFF3E3] flex-col p-4">
          <h1 className="text-4xl leading-[2] md:text-md text-[#B88E2F]">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="leading-[1.5] text-xl mb-8">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <div className="flex justify-end mx-4"><Button title="BUY NOW" /></div>
          
          {/* <button class="bg-[#B88E2F] text-white font-bold py-4 px-10 rounded">
            BUY NOW
          </button> */}
        </div>
      <div className="relative">
        <div
          className="absolute rotate-180 top-1/2 left-4 cursor-pointer text-4xl text-bolder text-[#B88E2F] "
          onClick={prevSlide}
        >
          ➧
        </div>
        <div
          className="absolute top-1/2 right-4 cursor-pointer text-4xl text-bolder text-[#B88E2F] "
          onClick={nextSlide}
        >
          ➧
        </div>
        {images.map(
          (images, index) =>
            current === index && (
              <div key={images} className="w-full h-screen object-cover">
                <img
                  src={images.image}
                  alt="images"
                  className="w-full h-full object-cover "
                />
                <div className="absolute text-[#B88E2F] bg-[#FFFFFFB8] font-semibold w-[98%] justify-center p-5 m-5 bottom-0 overflow-hidden">
                  <h1 className="text-[#3A3A3A] text-2xl font-semibold leading-[2]">
                    {images.description}
                  </h1>
                  <h2>Available</h2>
                  <Button title="Show Details" className="absolute py-2 px-8 right-20 bottom-0 m-3 rounded"/>
                  {/* <button className="absolute bg-[#FFFFFF] text-[#B88E2F] font-semibold py-2 px-8 right-20 bottom-0 m-3 rounded">
                    Show Details
                  </button> */}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Carosuel;
