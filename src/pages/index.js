import { Inter } from '@next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <body className="bg-stone-800"> {/* Main body */}

    {/* NAV */}
    <nav className="fixed top-0 w-full border-a bg-stone-900"> 
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="text-xl font-bold font-roboto text-white">GiftHub</a> {/* Change link to site home when done*/}
        <ul className="flex">
          <li className="px-3">
            <a href="#" className="hover:text-blue-500 font-roboto font-normal text-md transition-color duration-300 ease-in-out text-slate-100">Home</a> {/* Change link to site home when done */}
          </li>
          <li className="px-3">
            <a href="#" className="hover:text-blue-500 font-roboto font-normal text-md transition-color duration-300 ease-in-out text-slate-100">About</a> {/* Change link to site home when done */}
          </li>
          <li className="px-3">
          <a href="#" class="hover:text-blue-500 font-roboto font-normal text-md transition-color duration-300 ease-in-out text-slate-100" >Contact</a>
          </li>
        </ul>
        <button className=" text-white py-2 px-4 rounded font-roboto transition ease-in-out delay-150 bg-blue-500 hover: hover:scale-110 hover:bg-indigo-500 duration-300">Start</button>
      </div>
    </nav>

    </body>
  );
}
