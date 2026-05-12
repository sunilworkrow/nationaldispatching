'use client'

import React, { useEffect, useState } from 'react'

const slides = [
    {
        image:
            'https://tenderd.com/wp-content/uploads/2025/02/king-salman-energy-park-epicenter-global-energy-industry.webp',
        number: '30%',
        text: 'Reliable Equipment Support For Large Scale Construction Projects',
        title: 'AD Ports',
    },

    {
        image:
            'https://tenderd.com/wp-content/uploads/2025/02/DB32.jpg.webp',
        number: '37.3%',
        text: 'Streamlined Dispatching & Logistics Coordination For Industrial Operations',
        title: 'NEOM',
    },

    {
        image:
            'https://tenderd.com/wp-content/uploads/2025/03/AD-Ports-Group-Receives-Top-Five-Ranking-for-Khalifa-Port-img.jpg',
        number: '42%',
        text: 'Increase in Productivity',
        title: 'Aramco',
    },
]

function CaseStudies() {

    const [current, setCurrent] = useState(0)

    const duplicatedSlides = [...slides, ...slides]



    /* NEXT */
    const nextSlide = () => {

        setCurrent((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        )

    }



    /* PREV */
    const prevSlide = () => {

        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        )

    }



    /* AUTO SLIDE */
    useEffect(() => {

        const interval = setInterval(() => {

            nextSlide()

        }, 3500)

        return () => clearInterval(interval)

    }, [])




    return (
        <section className="relative overflow-hidden py-[60px]">

            {/* BACKGROUND */}
            <div className="absolute inset-0">

                <img
                    src="https://tenderd.com/wp-content/uploads/2025/02/case-bg.png"
                    alt="bg"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10"></div>

            </div>





            <div className="relative z-10 max-w-7xl mx-auto">

                {/* TOP */}
                <div className="text-center mb-12">

                    <p className="text-[#fee126] uppercase tracking-[1px] text-[14px] font-semibold">
                        CASE STUDIES
                    </p>

                    <h2 className="text-white text-[35px] font-[800] mt-5">
                       Successful Projects Across Industries
                    </h2>

                </div>





                {/* SLIDER */}
                <div className="relative">

                    {/* LEFT BUTTON */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-[-20px] top-1/2 z-20 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-[#fee126] text-black text-[28px] flex items-center justify-center hover:scale-110 transition-all duration-300 rotate-225"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                    </button>





                    {/* RIGHT BUTTON */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-[-20px] top-1/2 z-20 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-[#fee126] text-black text-[28px] flex items-center justify-center hover:scale-110 transition-all duration-300 rotate-45"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                    </button>





                    {/* TRACK */}
                    <div className='overflow-hidden'>
                        <div
                            className="flex transition-all duration-[1200ms] ease-in-out"
                            style={{
                                transform: `translateX(-${current * 50}%)`,
                            }}
                        >

                            {duplicatedSlides.map((slide, index) => (

                                <div
                                    key={index}
                                    className="w-[50%] shrink-0 px-4"
                                >

                                    <div className="group relative overflow-hidden rounded-[6px] h-[430px]">

                                        {/* IMAGE */}
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="h-full w-full object-cover transition-all duration-[2000ms] group-hover:scale-110"
                                        />

                                        {/* OVERLAY */}
                                        <div className="absolute inset-0 bg-black/35"></div>





                                        {/* TOP CONTENT */}
                                        <div className="absolute top-8 left-8">

                                            <h3 className="text-white text-[40px] leading-none font-[800]">
                                                {slide.number}
                                            </h3>

                                            <p className="text-white text-[16px] font-[600] mt-4 max-w-[320px] leading-[1.4]">
                                                {slide.text}
                                            </p>

                                        </div>





                                        {/* BOTTOM */}
                                        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">

                                            <h4 className="text-white text-[25px] font-[700]">
                                                {slide.title}
                                            </h4>

                                            <button className="w-12 h-12 rounded-full border border-white/40 text-white text-[22px] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                            </button>

                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>


                </div>





                {/* BUTTON */}
                <div className="flex justify-center mt-16">

                    <button className="group inline-flex items-center gap-4 border border-white/40 rounded-full px-7 py-2 text-white hover:bg-[#fee126] hover:text-black transition-all duration-300 cursor-pointer">

                        EXPLORE ALL CASE STUDIES

                        <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                        </span>

                    </button>

                </div>

            </div>
        </section>
    )
}

export default CaseStudies