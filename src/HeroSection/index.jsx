import React from 'react'
import Button from '../GlobalComponents/Button'

const HeroSection = () => {
  return (<section
    className="hero-section bg-[url('./src/assets/herobackground.png')] flex items-center h-[100vh] w-full bg-cover bg-center"
  >
    <div
      className="bg-[#FFF3E3] md:w-1/2 flex-wrap md:ml-auto text-start pl-10 md:mr-8 py-10 min-[320px]:w-full min-[320px]:m-5"
    >
      <h5 className="text-xl font-[Poppins] md:text-lg font-semibold mb-4">
        New Arrival
      </h5>
      <h1
        className="leading-[1.5] text-5xl font-[Poppins] mb-5 font-bold md:text-md text-[#B88E2F] min-[320px]:text-3xl"
      >
        Discover Our <br />New Collection
      </h1>
      <p className="text-xl font-[Poppins] mb-8">Discover Our New Collection</p>
      <Button title="BUY NOW"/>
      {/* <button
        className="bg-[#B88E2F] font-[Poppins] text-white font-bold py-4 px-16 max-[768px]:px-8 max-[768px]:py-2"
      >
        BUY NOW
      </button> */}
    </div>
  </section>
  )
}

export default HeroSection