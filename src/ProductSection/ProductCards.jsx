import React from "react";

const ProductCards = (props) => {
  return (
    <>
      <div className="m-2 h-fit group">
        <div className="relative overflow-hidden rounded">
          <img className="h-96 w-full object-contain" src={props.imgUrl} alt="" />
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-[#FFFFFF] text-[#B88E2F] font-semibold py-2 px-5">
              Add to cart
            </button>
          </div>
        </div>
        <div className="bg-[#F4F5F7] p-2">
          <div>
            <h1 className="text-xl font-medium color-[#3A3A3A] leading-[1.5]">
              {props.title}
            </h1>
            <p className="text-md mr-4 color-[#898989] leading-[2]">
              {props.category}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="color-[#3A3A3A]  text-md font-bold leading-[2]">
                Price: {props.price} $
          </div>
            <p className="text-md color-[#B0B0B0]   leading-[2]">
              Rating: {props.rating}
            </p>              
            </div>
          
        </div>
      </div>
    </>
  );
};

export default ProductCards;
