'use client'

import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'

function TurningVisibility() {

    const [startCount, setStartCount] = useState(false)

    useEffect(() => {

        const timer = setTimeout(() => {
            setStartCount(true)
        }, 400)

        return () => clearTimeout(timer)

    }, [])

    return (
        <section className=" py-[60px] overflow-hidden">

            <div className="max-w-7xl mx-auto ">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[70px] items-center">

                    {/* LEFT IMAGE */}
                    <div className="group col-span-7 relative overflow-hidden rounded-[6px] border border-[#818181]">

                        {/* IMAGE */}
                        <img
                            src="https://tenderd.com/wp-content/uploads/2025/02/delivery.webp"
                            alt="impact"
                            className="h-full w-full object-cover transition-all duration-[2000ms] group-hover:scale-110"
                        />

                        {/* TOP WHITE OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/70"></div>

                        {/* CONTENT */}
                        <div className="absolute bottom-0 p-8">

                            <h2 className="text-white text-[35px] leading-[1.1] font-[800]">
                                A Long Track Record Of Excellence
                            </h2>
                            <p className="border-t-1 border-[#676767] mt-2 pt-2
                                                            text-white/90
                                                            text-[14px]">Our team has supported thousands of construction and industrial projects with dependable equipment rentals, dispatching, procurement, and material supply solutions.</p>

                        </div>
                    </div>



                    {/* RIGHT STATS */}
                    <div className="col-span-5 grid grid-cols-2 ">

                        {/* ITEM */}
                        <div className="border-r border-b border-[#fee126] p-10 text-center">

                            <h3 className="text-white text-[50px] font-[800] leading-none">

                                {startCount && (
                                    <CountUp
                                        start={0}
                                        end={10}
                                        duration={3}
                                        suffix="%"
                                    />
                                )}

                            </h3>

                            <p className="text-white mt-5 text-[12px] leading-[1.5] font-semibold">
                                Reduced Equipment Downtime
                            </p>

                        </div>





                        {/* ITEM */}
                        <div className="border-b border-[#fee126] p-10 text-center">

                            <h3 className="text-white text-[50px] font-[800] leading-none">

                                {startCount && (
                                    <CountUp
                                        start={0}
                                        end={15}
                                        duration={3}
                                        suffix="%"
                                    />
                                )}

                            </h3>

                            <p className="text-white mt-5 text-[12px] leading-[1.5] font-semibold">
                                Improved Project Coordination
                            </p>

                        </div>





                        {/* ITEM */}
                        <div className="border-r border-[#fee126] p-10 text-center">

                            <h3 className="text-white text-[50px] font-[800] leading-none">

                                {startCount && (
                                    <CountUp
                                        start={0}
                                        end={20}
                                        duration={3}
                                        suffix="%"
                                    />
                                )}

                            </h3>

                            <p className="text-white mt-5 text-[12px] leading-[1.5] font-semibold whitespace-nowrap">
                               Faster Equipment Delivery
                            </p>

                        </div>





                        {/* ITEM */}
                        <div className="p-10 text-center">

                            <h3 className="text-white text-[50px] font-[800] leading-none">

                                {startCount && (
                                    <CountUp
                                        start={0}
                                        end={40}
                                        duration={3}
                                        suffix="%"
                                    />
                                )}

                            </h3>

                            <p className="text-white mt-5 text-[12px] leading-[1.5] font-semibold">
                                Better Operational Efficiency
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default TurningVisibility