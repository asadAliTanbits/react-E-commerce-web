import React from 'react'
import { useState } from "react";
import SectionTitle from './SectionTitle';

const Carosuel = () => {
    const images=[
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
        const [current, setCurrent] = useState(0);
      
        const nextSlide = () => {
          setCurrent(current === images.length - 1 ? 0 : current + 1);
        };
        const prevSlide = () => {
          setCurrent(current === 0 ? images.length - 1 : current - 1);
        };
  return (
    <div className="container mx-auto p-4 md:mb-8">
      <SectionTitle title="Carosuel" />
      <div className="relative">
        <div
          className="absolute rotate-180 top-1/2 left-4 cursor-pointer text-4xl text-bolder text-gray-600 "
          onClick={prevSlide}
        >
          ➧
        </div>
        <div
          className="absolute top-1/2 right-4 cursor-pointer text-4xl text-bolder text-gray-600 "
          onClick={nextSlide}
        >
          ➧
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="w-full h-screen object-cover ">
                <img
                  src={image}
                  alt="images"
                  className="w-full h-full object-cover "
                />
                <div
                className="absolute text-[#B88E2F] bg-[#FFFFFFB8] font-semibold w-[100%] h-32 items-center p-5 m-5 bottom-0 overflow-hidden"
              >
                <h1 className="text-[#3A3A3A] text-2xl font-semibold leading-[2]">
                  Luxury Sofa
                </h1>
                <h2>Available</h2>
                <button
                  className="absolute bg-[#FFFFFF] text-[#B88E2F] font-semibold py-2 px-8 right-20 bottom-0 m-3 rounded"
                >
                  Show Details
                </button>
              </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Carosuel