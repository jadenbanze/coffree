import React from "react";

const Navbar = () => {
    return (
        <div id="Nav" className="bg-stone-900"> {/* NAV */}
        <nav className="fixed top-0 w-full border-a bg-stone-900"> 
          <div className="container mx-auto flex items-center justify-between px-6 py-3">
            <a href="#" className="text-2xl font-normal font-roboto text-white">GiftHub</a> {/* Change link to site home when done*/}
            <ul className="flex">
              <li className="px-3">
                <a href="#" className="hover-underline-animation font-roboto font-normal text-md transition-color duration-300 ease-in-out text-slate-100">Home</a> {/* Change link to site home when done */}
              </li>
              <li className="px-3">
                <a href="#" className="hover-underline-animation font-roboto font-normal text-md transition-color duration-300 ease-in-out text-slate-100">About</a> {/* Change link to site home when done */}
              </li>
              <li className="px-3">
              <a href="#" className="hover-underline-animation font-roboto font-normal text-md transition-color duration-300 ease-in-out text-slate-100" >Contact</a>
              </li>
            </ul>
            <button className=" text-white py-2 px-4 rounded-full font-roboto outline outline-1 transition ease-in-out delay-150 bg-none hover: hover:scale-110 hover:bg-indigo-600 duration-300">Start</button>
          </div>
        </nav>
        </div>
    )
}

export default Navbar;