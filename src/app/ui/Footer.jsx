'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import {HiLocationMarker} from 'react-icons/hi'
import {HiPhone, HiMiniGlobeAmericas, HiMiniHeart} from 'react-icons/hi2'
import { footerContent } from '../constants'

const Footer = () => {
  return (
    <footer role='contentinfo' className='py-20 bg-white'>
        <div className="container px-4 mx-auto">
            <div className="block lg:flex gap-20 mb-10 pb-10">
                <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
                    <Link href='/' className='mb-4 inline-block'>
                        <Image src={footerContent.about.logo} width={45} height={30} alt='rollinscodes.com'/>
                    </Link>
                    <p className="leading-relaxed mb-7">
                        {footerContent.about.description}
                    </p>
                    <p>
                        <Link href={footerContent.about.cta.href} className='flex space-x-2 outline-none items-center font-semibold text-primary'>
                            <span>{footerContent.about.cta.label}</span>
                            <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center"><BiChevronRight className='text-white'/></span>
                        </Link>
                    </p>
                </div>
                <div className=" w-full lg:w-4/12 mb-10 lg:mb-0">
                    <div className="grid grid-cols-2 gap-10">
                        {footerContent.footerLinks.map((footerLink,idx) =>(
                            <div key={idx}>
                                <h3 className="font-semibold text-heading mb-5">{footerLink.heading}</h3>
                                <ul className="p-0 m-0">
                                    {footerLink.links.map((link,idxx) =>(
                                        <li key={idxx} className='mb-3'>
                                            <Link href={link.href} className="group-flex items-center duration-300 transition-all ease-in-out hover:text-primary">
                                                <span>{link.label}</span>
                                                <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                                                    <BiChevronRight className='text-xl  absolute'/>
                                                </span>
                                                </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-4/12">
                    <h3 className="font-semibold text-heading mb-5">
                        {footerContent.contact.heading}
                    </h3>
                    <p className="leading-relaxed mb-7">
                        {footerContent.contact.description}
                    </p>
                    <ul>
                        <li className="flex items-start space-x-3 mb-5">
                            <HiLocationMarker className='text-xl text-primary'/>
                            <span>{footerContent.contact.address.street}</span>
                        </li>
                        <li className="flex items-start space-x-3 mb-5">
                            <HiPhone className='text-xl text-primary'/>
                            <span>{footerContent.contact.address.phone}</span>
                        </li>
                        <li className="flex items-start space-x-3 mb-5">
                            <HiMiniGlobeAmericas className='text-xl text-primary'/>
                            <span>{footerContent.contact.address.website}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center pt-10 border-t border-gray-200">
                <p>{footerContent.copyright.labelOne}{"  "} <HiMiniHeart className='text-red-600 inline-block'/> {footerContent.copyright.labeltwo}</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer