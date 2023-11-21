import React from 'react'
import { servicesContent } from '../constants'
import Image from 'next/image'

const Services = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20">
        {servicesContent.heading.headingSubTitle && (<span className="inline-block py-0 5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:2-2/3 before:bg-yellowlight before:left-0 before:top-0 before:bottom-0 before:-z-10">{servicesContent.heading.headingSubTitle}</span>)}
        {servicesContent.heading.headingTitle && (<h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">{servicesContent.heading.headingTitle}</h2>)}
        {servicesContent.heading.description && (<p className="text-body leading-relaxed">{servicesContent.heading.description}</p>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {servicesContent.items.map((item,idx) =>(
            <div key={idx} className='flex space-x-10'>
              <div className="w-14 shrink-0">
                <span className="inline-flex items-center justify-center p-2 rounded-lg bg-white shadow-2xl w-[70px] h-[70px]">
                  <Image src={item.icon} width={62} height={62} alt='rollinscodes.com'/>
                </span>
              </div>
              <div className="">
                {item.title && (<h3 className="text-heading text-md font-bold mb-3">{item.title}</h3>)}
                {item.description && (<h3 className="leading-relaxed">{item.description}</h3>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services