'use client'
import React, {useEffect} from 'react'
import { heroContent } from '../constants'
import Link from 'next/link'
import Image from 'next/image'
import Aos from 'aos'
import "aos/dist/aos.css"

const Hero = () => {
    useEffect(() =>{
        Aos.init({
          duration:700,
          easing:'slide',
          once:true
        })
      })
  return (
    <section className="py-20">
        <div className="container px-4 mx-auto">
            <div className="lg:flex justify-between items-center">
                <div className="lg:w-5/12 mb-10 lg:mb-0">
                    {heroContent.text.subheading && (<span className="inline-block py-0 5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:2-2/3 before:bg-yellowlight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">{heroContent.text.subheading}</span>)}
                    {heroContent.text.heading &&(<h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7">{heroContent.text.heading}</h1>)}
                    {heroContent.text.description && (<p className="leading-relaxed text-body mb-10">{heroContent.text.description}</p>)}

                    <div className="flex space-x-3">
                    <Link className='py-4 px-5 bg-brandPrimary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] top-0 hover:-top-10' href='#'>Get Started</Link>
                    <Link className='py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] top-0 hover:-top-10' href='#'>How it works?</Link>
                    </div>
                </div>
                <div className="lg:w-6/12 space-y-2">
                    <div className="flex space-x-2 items-stretch">
                        <div className="w-8/12 h-80">
                            {heroContent.images.img1 && (
                                <Image src={heroContent.images.img1} width={397} height={50} alt='rollinscodes.com' className='object-cover w-full h-full rounded-2xl' data-aos='fade-in'/>
                            )}
                        </div>
                        <div className="w-4/12 self-end space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                                {heroContent.images.img2 &&(
                                    <div className="">
                                        <Image src={heroContent.images.img2} width={437} height={437} alt='rollinscodes.com' className='object-cover w-full h-full rounded-2xl' data-aos='fade-in'/>
                                    </div>
                                )}
                                <div className="bg-yellowlight rounded-2xl rounded-tr-[200px]"></div>
                            </div>
                            {heroContent.images.img3 && (<div className="">
                                <Image src={heroContent.images.img3} width={374} height={392} alt='rollinscodes.com' className='object-cover w-full h-full rounded-2xl' data-aos='fade-in'/>
                            </div>)}
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-4/12">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-greenlight rounded-2xl rounded-bl-[200px]"></div>
                                {heroContent.images.img4 && ( 
                                    <div>
                                        <Image src={heroContent.images.img4} width={394} height={394}  alt='rollinscodes.com' className='object-cover w-full h-full rounded-2xl' data-aos='fade-in'/>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-5/12">
                            {heroContent.images.img5 && (
                                <Image src={heroContent.images.img5 } width={446} height={495}  alt='rollinscodes.com' className='object-cover w-full h-full rounded-2xl' data-aos='fade-in'/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero