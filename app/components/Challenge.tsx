'use client'

import React, { useEffect, useState } from 'react'

const items = [
    {
        id: '01',
        title: 'Construction',
        description:
            'Reliable heavy equipment rentals and project support solutions for residential, commercial, and infrastructure construction projects.',
        image:
            'https://tenderd.com/wp-content/uploads/2025/02/safety.webp',
    },

    {
        id: '02',
        title: 'Earthmoving',
        description:
            'Access dependable earthmoving equipment including excavators, loaders, and skid steers for efficient site preparation and grading.',
        image:
            'https://tenderd.com/wp-content/uploads/2025/02/equiment-allocation.webp',
    },

    {
        id: '03',
        title: 'Material Handling',
        description:
            'Streamline warehouse and jobsite operations with forklifts, lifting equipment, and professional material handling support.',
        image:
            'https://tenderd.com/wp-content/uploads/2025/02/logistics.webp',
    },

    {
        id: '04',
        title: 'Power Services',
        description:
            'Keep projects running with generators, light towers, temporary power solutions, and reliable equipment dispatching services.',
        image:
            'https://tenderd.com/wp-content/uploads/2025/02/maintainance.webp',
    },

    {
        id: '05',
        title: 'Pipeline Equipment',
        description:
            'Support pipeline and utility projects with specialized equipment rentals, trench safety systems, and field logistics coordination.',
        image:
            'https://tenderd.com/wp-content/uploads/2025/02/energy-management.webp',
    },

    {
        id: '06',
        title: 'Logistics',
        description:
            'Efficient transportation and dispatch coordination services designed to reduce delays and improve project workflow.',
        image:
            'https://tenderd.com/wp-content/uploads/2025/02/Financials.webp',
    },

    {
        id: '07',
        title: 'Site Services',
        description:
            'Complete site support services including equipment sourcing, material procurement, and operational project assistance.',
        image:
            'https://tenderd.com/wp-content/uploads/2025/02/BI-reports.webp',
    },
]



function Challenge() {

    const [active, setActive] = useState(5)

    useEffect(() => {

        const interval = setInterval(() => {

            setActive((prev) => (prev + 1) % items.length)

        }, 3000)

        return () => clearInterval(interval)

    }, [])

    return (
        <section className=" py-[30px] ">

            <div className="overflow-hidden max-w-[1100px] mx-auto px-6">

                {/* HEADING */}
                <h2 className="text-center text-white md:text-[35px] font-[800] mb-16">
                    Smart Solutions For Every Construction Challenge
                </h2>

                {/* SLIDER */}
                <div className="flex h-[500px] gap-[2px] overflow-hidden rounded-[6px]">

                    {items.map((item, index) => {

                        const isActive = active === index

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActive(index)}
                                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out
                                ${isActive
                                        ? 'w-[55%]'
                                        : 'w-[7%]'
                                    }`}
                            >

                                {/* IMAGE */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-black/45"></div>

                                {/* NUMBER */}
                                <div
                                    className={`absolute left-4 top-4 text-white font-[800]
                                    transition-all duration-500
                                    ${isActive
                                            ? 'text-[50px]'
                                            : 'text-[32px]'
                                        }`}
                                >
                                    {item.id}
                                </div>

                                {/* CLOSED TEXT */}
                                {!isActive && (
                                    <>
                                        {/* BLACK GRADIENT */}
                                        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                                        <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 rotate-[-90deg] w-[220px]">

                                            <p className="text-white text-[19px] leading-[1.1] font-[500] text-center">
                                                {item.title}
                                            </p>

                                        </div>
                                    </>
                                )}

                                {/* OPEN CONTENT */}
                                {isActive && (
                                    <div className="absolute bottom-10 left-8 max-w-[420px] animate-fadeUp">

                                        <h3 className="text-white text-[36px] font-[700]">
                                            {item.title}
                                        </h3>

                                        <div className="w-full h-[1px] bg-white/30 my-5"></div>

                                        <p className="text-white/80 text-[16px] leading-[1.7]">
                                            {item.description}
                                        </p>

                                        {/* BUTTON */}
                                        <button className="mt-8 flex items-center justify-center w-12 h-12 rounded-full border border-white/40 text-white text-[20px] hover:bg-white hover:text-black transition-all duration-300">
                                            ↗
                                        </button>
                                    </div>
                                )}

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Challenge