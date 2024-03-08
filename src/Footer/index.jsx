import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>
    <hr />
      <footer className="flex flex-col md:flex-row justify-around m-6 p-5">
        <div className="mb-4 w-[40%] md:mb-0 md:ml-6">
          <div className="text-lg font-bold mb-10">Funiro.</div>
          <div className="text-gray-400">
            400 University Drive Suite 200 Coral
            <div>Gables,</div>
            <div>FL 33134 USA</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-[70%] gap-y-4 justify-around">
          <span className="mr-6 mb-4 gap-x-4 md:mb-0">
            <ul>
              <li className="text-gray-400">Links</li>
              <li><a href="">Home</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </span>

          <span className="mb-4 md:mb-0">
            <ul>
              <li className="text-gray-400">Help</li>
              <li><a href="">Payment Options</a></li>
              <li><a href="">Returns</a></li>
              <li><a href="">Privacy Policies</a></li>
            </ul>
          </span>

          <span>
            <div className="text-gray-400 mb-2 md:mb-6">Newsletter</div>
            <input
              className="shadow p-1.5 md:w-48 lg:w-64 mb-2 md:mb-0"
              id="Subscribe"
              type="text"
              placeholder="Enter Your Email Account"
            />
            <button className="bg-white shadow text-black px-2 py-1">
              Subscribe
            </button>
          </span>
        </div>
      </footer>

      <div className="text-left">
        <hr />
        <div className="font-400 my-4 mx-10">2023 furino. All rights reverved</div>
      </div>
      </div>
  )
}

export default Footer