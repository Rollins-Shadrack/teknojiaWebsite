'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect,useState } from 'react'
import logo from '../../../public/images/icon.png'
import { NAV_LINKS } from '../constants'
import {HiBars3} from 'react-icons/hi2'
import {GrClose} from 'react-icons/gr'
import {BiChevronRight} from 'react-icons/bi'


const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false)


    const mobileMenuHandler = () =>{
        setNavOpen(!navOpen)
    }

  return (
    <>
    <header className="py-7">
        <div className="container px-4 mx-auto">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div>
                    <Link href="/" className='flex'>
                        <Image src={logo} width={45} height={30}/> <span className='px-2 text-brandPrimary font-semibold  text-2xl'>Teknojia</span>
                    </Link>
                </div>
                {/* Navigation Menu */}
                <div className="hidden lg:block">
                    <ul className="flex space-x-7">
                       {NAV_LINKS.map(item =>(
                        <li key={item.label}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                       ))} 
                    </ul>
                </div>

                {/* CTA */}
                <div className="">
                    <Link href="#" className='px-4 py-4 bg-brandPrimary text-white rounded-lg hidden lg:inline-block'>
                        Get Started
                    </Link>
                    <button className="block lg:hidden" onClick={mobileMenuHandler}>
                        <HiBars3 className='text-4xl font-semibold'/>
                    </button>
                </div>
            </div>
        </div>
    </header>

    {/* Mobile devices Nav Menu */}
    <div className={navOpen ? "py-0 block fixed w-screen z-[9999] lg:hidden" : "py-0 hidden fixed w-screen z-[9999] lg:hidden"}>
        <div className="h-screen w-screen top-0 fixed bg-black bg-opacity-30 z-[999]" onClick={mobileMenuHandler}></div>
        <div className="bg-white top-0 right-0 h-screen fixed w-[300px] z-[9999]">
            <div className="h-14 px-10 border-b flex items-center">
                <button onClick={mobileMenuHandler} className="flex items-center space-x-3"><GrClose/> <span className="">Close</span></button>
            </div>
            <div className="h-full py-3 px-10 pv-20 overflow-y-scroll scroll-smooth">
                <ul className="block mb-7">
                    {NAV_LINKS.map(item =>(
                            <li key={item.label}>
                                <Link href={item.href} className='group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary'>
                                    <span>{item.label}</span>
                                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3"><BiChevronRight className='text-xl'/></span>
                                </Link>
                            </li>
                        ))} 
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navigation