import React from 'react'

const Header = () => {
  return (
  <header className="shadow">
  <nav className="p-6 bg-white flex items-center justify-between">
    <div className="flex items-center">
      <div className=" flex flex-row font-bold text-4xl font=[Poppins] cursor-pointer">
        <img className="h-10 inline" src="./src/assets/Logo.png" alt="" />
        <h1 className='text-center'>Furniro</h1>
      </div>
    </div>
    <div className="hidden md:flex">
      <ul className="flex gap-8 cursor-pointer align-center font-medium font-bolder">
        <li className=""><a href="">Home</a></li>
        <li className=""><a href="">Shop</a></li>
        <li className=""><a href="">About</a></li>
        <li className=""><a href="">Contact</a></li>
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