import React from 'react'
import SectionTitle from './SectionTitle'

const RangeSection = () => {
  return (
    <section className="m-10">
        <SectionTitle title="Browse The Range" detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            doloribus."/>
        <div className="flex flex-wrap justify-center md:mx-5 md:my-5">
          <div className="cursor-pointer m-2">
            <img src="./src/assets/RangeImg1.png" alt="" />
            <h2 className="p-3 text-center font-bold">Dinnig</h2>
          </div>
          <div className="cursor-pointer m-2">
            <img src="./src/assets/RangeImg2.png" alt="" />
            <h2 className="p-3 text-center font-bold">Living</h2>
          </div>
          <div className="cursor-pointer m-2">
            <img src="./src/assets/RangeImg3.png" alt="" />
            <h2 className="p-3 text-center font-bold">Bedroom</h2>
          </div>
        </div>
      </section>
  )
}

export default RangeSection