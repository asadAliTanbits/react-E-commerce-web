import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <header className="shadow">
  <nav className="p-6 bg-white flex items-center justify-between">
    <div className="flex items-center">
      <div className=" flex flex-row font-bold text-4xl font=[Poppins] cursor-pointer">
        <img className="h-10 inline" src="./src/assets/Logo.png" alt="" />
        <h1 className='text-center p-1'>Furniro</h1>
      </div>
    </div>
    <div className="hidden md:flex">
      <ul className="flex gap-8 cursor-pointer align-center font-medium font-bolder">
        <li className=""><Link to="/">Home</Link></li>
        <li className=""><Link to="/shop">Shop</Link></li>
        <li className=""><AnchorLink href="">About</AnchorLink></li>
        <li className=""><AnchorLink href="#footer">Contact</AnchorLink></li>
      </ul>
    </div>
    <div className="md:hinden flex items-center gap-4">
      <ul className="flex gap-4 cursor-pointer">
        <li className="flex items-center">
          <a href=""><img src="./src/assets/personIcon.png" alt="" /></a>
        </li>
        <li className="">
          <a href=""><img src="./src/assets/searchIcon.png" alt="" /></a>
        </li>
        <li className="">
          <a href=""><img src="./src/assets/heartIcon.png" alt="" /></a>
        </li>
        <li className="">
          <a href=""><img src="./src/assets/shoppingCart.png" alt="" /></a>
        </li>
      </ul>
    </div>
  </nav>
</header>
  )
}

export default Header