import React from 'react'
import { testimonialContent } from '../constants'
import Link from 'next/link'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            {testimonialContent.heading.headingSubTitle && (<span className="inline-block py-0 5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:2-2/3 before:bg-yellowlight before:left-0 before:top-0 before:bottom-0 before:-z-10">{testimonialContent.heading.headingSubTitle}</span>)}
            {testimonialContent.heading.headingTitle && (<h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">{testimonialContent.heading.headingTitle}</h2>)}
            {testimonialContent.heading.description && (<p className="text-body leading-relaxed mb-10">{testimonialContent.heading.description}</p>)}
            {testimonialContent.heading.cta.cta_href &&( <p><Link className='py-4 px-5 bg-brandPrimary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] top-0 hover:-top-10' href={testimonialContent.heading.cta.cta_href}>{testimonialContent.heading.cta.cta_label}</Link></p>)}
          </div>
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 mb-6 md:mb-0">
                {testimonialContent.testimonials.map((testimonial,idx) => {
                  if(idx === 2) return null;
                  return(
                  <div className={`bg-white p-7 rounded-lg w-full ${idx == 1 ? "" : "mb-6"}`} key={idx}>
                    <div className="flex space-x-4 items-center mb-4 ">
                      <div className="relative">
                      <Image src={testimonial.img} width={579} height={720} className='object-cover h-14 w-14 rounded-full' alt='rollinscodes.com'/>
                        <span className="absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Image src="/images/quote.png" width={14} height={9} alt='rollinscodes.com'/>
                        </span>
                      </div>
                    </div>
                    <div className="leading-3">
                      {testimonial.name && (<strong className="block text-heading text-lg">
                        {testimonial.name}
                      </strong>)}
                      {testimonial.titleRole && (<span className="text-sm">{testimonial.titleRole}</span>)}
                    </div>
                    <div className="">
                      <blockquote>
                      &quot;{testimonial.testimony}&quot;
                      </blockquote>
                    </div>
                  </div>
                )})}
              </div>
              <div className="md:w-6/12">
                <div className="">
                  <div className="w-16 h-16 hidden md:block bg-greenlight rounded-full mb-6"></div>
                    <div className="bg-white p-7 rounded-lg w-full mb-6">
                      <div className="flex space-x-4 items-center mb-4">
                        <div className="relative">
                          <Image src={testimonialContent.testimonials[2].img} width={579} height={720} className='object-cover h-14 w-14 rounded-full'/>
                          <span className="absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Image src="/images/quote.png" width={14} height={9} alt='rollinscodes.com'/>
                          </span>
                        </div>
                        <div className="leading-3">
                        {testimonialContent.testimonials[2].name && (<strong className="block text-heading text-lg">
                          {testimonialContent.testimonials[2].name}
                        </strong>)}
                        {testimonialContent.testimonials[2].titleRole && (<span className="text-sm">{testimonialContent.testimonials[2].titleRole}</span>)}
                    </div>
                      </div>
                      <div className="">
                        <blockquote>
                        &quot;{testimonialContent.testimonials[2].testimony}&quot;
                        </blockquote>
                    </div>
                    </div>
                    <div className="bg-[#F27763] hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials