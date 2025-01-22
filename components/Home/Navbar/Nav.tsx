"use client";
import { Navlinks } from '@/constant/constanteNav'
import { MenuIcon, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type Props ={
  openNav:() => void;
};
const Nav = ({openNav}:Props) => {
  return (
    <div className="flex items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto
    transition-all duration-200">
      {/*  logo */}
      <h1 className="text-3xl text-emerald-400 font-bold ml-8 md:ml-16 bg-gradient-to-r from-cyan-200 to-orange-500 bg-clip-text text-transparent">DEVIVAN-IMAGEN</h1>
      <div className='md:flex items-center space-x-10 hiden'>
        {/* navlinks */}
         {Navlinks.map((link) => {
          return(
            <Link key={link.id} href={link.url} className=" relative  text-gray-50 text-base w-fit block
            after:block  after:content-[''] after:absolute after:h-[3px] after:bg-amber-400 after:w-full
            after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300
            after:origin-center">
              <p>{link.label}</p>
            </Link>
          );
         })}
      </div>
      {/* botones para el nav */}
      <div className="flex items-center space-x-5 md:space-x-8 text-zinc-200 mr-8 md:mr-16">
        <ShoppingCart className="cursor-pointer w-6 h-6" />
        <Search className="cursor-pointer w-6 h-6" />
        <MenuIcon 
        onClick={openNav}
        className="cursor-pointer w-6 h-6 md:hidden"/>

      </div>
    </div>
    
  )
}

export default Nav