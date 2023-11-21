import React from 'react'
import {BiChevronRight} from 'react-icons/bi'
import { statsContent } from '../constants'
import Image from 'next/image'
import Link from 'next/link'

const Stats = () => {
  return (
    <section className="pt-20 pb-10">
        <div className="container px-4 mx-auto">
            <div className="lg:flex justify-between items-center space-x-0">
                <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
                    <div className="grid grid-cols-3">
                        {statsContent.stats.map((stat,idx) =>(
                            <div key={idx} className='text-center lg:text-left'>
                                <strong className="text-primary text-4xl font-bold block leading-tight xl:text-[52px]">{stat.number}</strong>
                                <span className="">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-5/12">
                    <div className="bg-light py-10 px-7 lg:px-10 !pr-28 lg:!pr-40 md:!pr-32 rounded-lg relative">
                        {statsContent.getStarted.img && (
                            <Image width={600} height={722} src={statsContent.getStarted.img} alt='rollinscodes.com' className='absolute right-0 lg:right-6 -top-14 w-24'/>
                        )}
                        {statsContent.getStarted.heading && (
                            <h3 className='text-heading font-bold text-xl mb-3'>{statsContent.getStarted.heading}</h3>
                        )}
                        {statsContent.getStarted.description && (
                            <h3 className='text-description  mb-5'>{statsContent.getStarted.description}</h3>
                        )}
                        {statsContent.getStarted.cta.cta_label && (
                            <Link href={statsContent.getStarted.cta.cta_href} className='flex space-x-2 outline-none items-center font-semibold text-primary group'>
                                <span className="">{statsContent.getStarted.cta.cta_label}</span>
                                <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary"><BiChevronRight className='text-lg'/></span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats