import React from "react";

const ProductCards = (props) => {
  return (
    <>
      <div className="m-2 h-fit group">
        <div className="relative overflow-hidden rounded">
          <img className="h-96 w-full object-cover" src={props.imgUrl} alt="" />
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-[#FFFFFF] text-[#B88E2F] font-semibold py-2 px-5">
              Add to cart
            </button>
          </div>
        </div>
        <div className="bg-[#F4F5F7] p-2">
          <div>
            <h1 className="text-xl font-bold color-[#3A3A3A] leading-[1.5]">
              {props.title}
            </h1>
            <p className="text-xs color-[#898989] leading-[2]">
              {props.detail}
            </p>
          </div>
          <div>
            <div className="flex flex-row">
              <div className="color-[#3A3A3A] mr-2 text-md font-bold leading-[2]">
                Rp {props.price}
              </div>
              <div className="color-[#B0B0B0] ml-2 text-md leading-[2]">
                <s>Rp {props.newPrice}</s>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
