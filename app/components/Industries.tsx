'use client'

import React, { useEffect, useState } from 'react'

const slides = [
    {
        image:
            'https://tenderd.com/wp-content/uploads/2025/04/marine-2.webp',
        number: '30%',
        text: 'Faster Equipment Deployment',
        title: 'Marine',
        description:
            'Support marine and port operations with dependable heavy equipment rentals, dispatch coordination, and material supply services.',
    },

    {
        image:
            'https://tenderd.com/wp-content/uploads/2025/07/Logistics.jpg',
        number: '37.3%',
        text: 'Reduction in Project Delays',
        title: 'Logistics',
        description:
            'Improve transportation efficiency with organized dispatching, equipment delivery coordination, and streamlined logistics support.',

    },

    {
        image:
            'https://tenderd.com/wp-content/uploads/2025/04/Construction-2.webp',
        number: '42%',
        text: 'Increase in Project Productivity',
        title: 'Construction',
        description:
            'Keep construction projects moving with reliable equipment rentals, procurement support, and efficient operational coordination.',
    },

    {
        image:
            'https://tenderd.com/wp-content/uploads/2025/04/Energy-2.webp',
        number: '25%',
        text: 'Improved Operational Efficiency',
        title: 'Energy',
        description:
            'Provide energy and industrial projects with equipment sourcing, site support, and logistics solutions tailored to demanding operations.',

    },

]

function Industries() {

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

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* TOP */}
                <div className="text-center mb-12">

                    <p className="text-[#fee126] uppercase tracking-[1px] text-[14px] font-semibold">
                        INDUSTRIES
                    </p>

                    <h2 className="text-white text-[35px] font-[800] mt-5">
                        Supporting Projects Across Multiple Industries
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
                                transform: `translateX(-${current * 33}%)`,
                            }}
                        >

                            {duplicatedSlides.map((slide, index) => (

                                <div
                                    key={index}
                                    className="w-[33%] shrink-0 px-4"
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


                                        {/* BOTTOM */}
                                        {/* BOTTOM */}
                                        <div className="absolute bottom-8 left-8 right-8">

                                            <h4 className="text-white text-[25px] font-[700]">
                                                {slide.title}
                                            </h4>

                                            {/* HOVER TEXT */}
                                            <div className="overflow-hidden">

                                                <p className="border-t-1 border-[#676767] pt-4
                                                            text-white/90
                                                            text-[16px]
                                                            leading-[1.7]
                                                            mt-4
                                                            max-w-[320px]

                                                            opacity-0
                                                            translate-y-8
                                                            max-h-0

                                                            transition-all
                                                            duration-700

                                                            group-hover:opacity-100
                                                            group-hover:translate-y-0
                                                            group-hover:max-h-[200px]
                                                            ">
                                                    {slide.description}
                                                </p>



                                            </div>



                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>


                </div>


            </div>
        </section>
    )
}

export default Industries