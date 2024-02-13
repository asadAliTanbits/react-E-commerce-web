import React from 'react'

const SectionTitle = (props) => {
  return (
    <div className="m-10 text-center p-4">
    <h1 className="text-3xl font-extrabold flex justify-center">
      {props.title}
    </h1>
    <p className='leading-[2] md:leading-[1]'>{props.detail}</p>  
  </div>
  )
}

export default SectionTitle