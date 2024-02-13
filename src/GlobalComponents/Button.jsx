import React from 'react'

const Button = (props) => {
  return (
    <>
    <button
        className="bg-[#B88E2F] font-[Poppins] text-white font-bold py-4 px-16 max-[768px]:px-8 max-[768px]:py-2 rounded"
      >
        {props.title}
      </button>
    </>
  )
}

export default Button