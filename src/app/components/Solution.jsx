import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { solutionContent } from '../constants'
import Image from 'next/image'
import Link from 'next/link'

const Solution = () => {
  return (
    <section className="py-32 bg-light overflow-x-hidden">
        <div className="container px-4 mx-auto">
            <div className="lg:flex space-x-2 justify-between">
                <div className="lg:w-6/12 relative mb-10 lg:mb-0 x-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
                    <div className="flex gap-2">
                        <div className="flex flex-col space-y-2">
                            <div className="">
                                <Image src={solutionContent.images.img3} width={626} height={640} className='object-cover h-full w-full rounded-lg' alt='rollinscodes.com' />
                            </div>
                            <div className="flex justify-end gap-2">
                                <div className="w-4/12 flex">
                                    <div className="ml-auto">
                                        <div className="bg-greenlight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                                    </div>
                                </div>
                                <div className="w-6/12">
                                    <Image src={solutionContent.images.img1} className='object-cover h-full w-full rounded-lg' alt='rollinscodes.com' height={640} width={626}/>
                                </div>
                            </div>
                        </div>
                        {/* end col */}
                        <div className="mx-auto">
                            <div className="flex flex-col gap-2">
                                <div className="">
                                    <div className="bg-purplelight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"></div>
                                </div>
                                <div className="">
                                    <Image src={solutionContent.images.img2} width={547} height={573} className='object-cover h-full w-full rounded-lg shadow-2xl' alt='rollinscodes.com'/>
                                </div>
                                {solutionContent.experience.label &&(
                                    <div>
                                        <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                                            <strong className="block font-bold text-primary text-xl lg:text-5xl">{solutionContent.experience.year}</strong>
                                            <span className="">{solutionContent.experience.label}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-5/12 relative z-10">
                {solutionContent.text.headingSubTitle && (<span className="inline-block py-0 5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:2-2/3 before:bg-yellowlight before:left-0 before:top-0 before:bottom-0 before:-z-10">{solutionContent.text.headingSubTitle}</span>)}
                {solutionContent.text.headingTitle && (<h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">{solutionContent.text.headingTitle}</h2>)}
                {solutionContent.text.description && (<p className="text-body leading-relaxed mb-10">{solutionContent.text.description}</p>)}

                <ul className="grid drid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10">
                    {solutionContent.text.features.map((feature,idx) => (
                        <li className='flex flex-grow items-center' key={idx}>
                            <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                                <BiCheck className='text-white text-xl'/>
                            </span>
                            <span className="px-4">{feature.title}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-3">
                    <Link href={solutionContent.text.cta.btn1.href} className='py-4 px-5 bg-brandPrimary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] top-0 hover:-top-10'>{solutionContent.text.cta.btn1.label}</Link>
                    <Link href={solutionContent.text.cta.btn2.href} className='py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] top-0 hover:-top-10'>{solutionContent.text.cta.btn2.label}</Link>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution