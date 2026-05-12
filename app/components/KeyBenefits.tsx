'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {}

function KeyBenefits({ }: Props) {

    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [showImage1, setShowImage1] = useState(false)
    const [showImage2, setShowImage2] = useState(false)
    const [showImage3, setShowImage3] = useState(false)

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {
                        setShowImage1(true)
                    }, 400)

                    setTimeout(() => {
                        setShowImage2(true)
                    }, 900)

                    setTimeout(() => {
                        setShowImage3(true)
                    }, 1400)

                }

            },
            {
                threshold: 0.2,
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()

    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden pt-[80px]"
        >

            {/* ORANGE GLOW */}
            <div className="absolute right-[10%] top-[45%] h-[320px] w-[320px] rounded-full bg-[#fee126] blur-[140px] opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* TOP */}
                <div className="text-center max-w-[1100px] mx-auto">

                    <p className="text-[#fee126] uppercase tracking-[1px] text-[14px] font-semibold">
                       WHY CHOOSE US
                    </p>

                    <h2 className="text-white text-[42px] md:text-[35px] leading-[1.1] font-[800] mt-5">
                        One Platform For Equipment, Materials & Dispatching
                    </h2>

                    <p className="text-white/80 text-[18px] leading-[34px] mt-6">
                        Simplify your project workflow with centralized equipment sourcing, material procurement, and logistics coordination designed to reduce delays and improve operational efficiency.
                    </p>
                </div>

                {/* BOTTOM */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[305px] items-center max-w-[1100px] mx-auto">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <h3 className="text-white text-[30px] font-[700]">
                            Equipment Tracking
                        </h3>

                        <p className="text-white/80 text-[16px] leading-[1.7] mt-6 max-w-[430px]">
                            Monitor rental equipment and project activity with reliable dispatch coordination and streamlined operational support for every stage of your project.
                        </p>

                        <button className="group mt-6 inline-flex items-center gap-4 border border-white/40 rounded-full px-5 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black">

                            Learn more

                            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                            </span>
                        </button>
                    </motion.div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center items-center min-h-[421px]">

                        {/* GRID IMAGE */}
                        <img
                            src="https://tenderd.com/wp-content/uploads/2025/02/lines.png"
                            alt="grid"
                            className={`absolute w-[660px] max-w-none transition-all duration-[1400ms]
                             ${showImage1
                                    ? 'opacity-30 scale-100'
                                    : 'opacity-100 scale-105'
                                }`}
                        />

                        {/* REAL IMAGE */}
                        <img
                            src="https://tenderd.com/wp-content/uploads/2025/02/track.webp"
                            alt="track"
                            className={`relative z-10 w-full max-w-[520px] bg-[#faebd714] p-[6px] rounded-[10px]
                            transition-all duration-[1600ms]
                            ${showImage1
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 translate-y-[80px] scale-[0.85]'
                                }`}
                        />
                    </div>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[305px] items-center max-w-[1100px] mx-auto">

                    {/* LEFT */}
                    <div className="relative flex justify-center items-center min-h-[421px]">

                        {/* GRID IMAGE */}
                        <img
                            src="https://tenderd.com/wp-content/uploads/2025/02/lines.png"
                            alt="grid"
                            className={`absolute w-[660px] max-w-none transition-all duration-[1400ms]
                             ${showImage2
                                    ? 'opacity-30 scale-100'
                                    : 'opacity-100 scale-105'
                                }`}
                        />

                        {/* REAL IMAGE */}

                        <img
                            src="https://tenderd.com/wp-content/uploads/2025/02/emission.webp"
                            alt="track"
                            className={`absolute top-[50px] left-[-60px] z-[99] w-full max-w-[150px] rounded-[10px]
                            transition-all duration-[1600ms]
                            ${showImage2
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 translate-y-[80px] scale-[0.85]'
                                }`}
                        />

                        <img
                            src="https://tenderd.com/wp-content/uploads/2025/02/emission.webp"
                            alt="track"
                            className={`relative z-10 w-full max-w-[520px] bg-[#faebd714] p-[6px] rounded-[10px]
                            transition-all duration-[1600ms]
                            ${showImage2
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 translate-y-[80px] scale-[0.85]'
                                }`}
                        />

                        <div className={`absolute bottom-[46px] right-[-64px] z-[99] px-[33px] py-[13px] text-center rounded-[10px] bg-[linear-gradient(152.97deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[42px] shadow-[0px_6px_13px_0px_rgba(0,0,0,0.1019607843)]
                            transition-all duration-[1600ms]
                            ${showImage2
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-[80px] scale-[0.85]'
                            }`}>

                            <p className='text-[35px] text-[#76d953]'>-0%</p>
                            <p className='text-[10px]'>Carbon Emissions</p>

                        </div>

                    </div>



                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <h3 className="text-white text-[30px] font-[700]">
                            Project Efficiency
                        </h3>

                        <p className="text-white/80 text-[16px] leading-[1.7] mt-6 max-w-[430px]">
                            Improve jobsite productivity through dependable equipment availability, organized dispatch scheduling, and faster project coordination.
                        </p>

                        <button className="group mt-6 inline-flex items-center gap-4 border border-white/40 rounded-full px-5 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black">

                            Learn more

                            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                            </span>
                        </button>
                    </motion.div>

                </div>



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[305px] items-center max-w-[1100px] mx-auto">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <h3 className="text-white text-[30px] font-[700]">
                            Procurement Services
                        </h3>

                        <p className="text-white/80 text-[16px] leading-[1.7] mt-6 max-w-[430px]">
                            Get the right equipment and construction materials for your projects with competitive pricing and professional procurement support.
                        </p>

                        <button className="group mt-6 inline-flex items-center gap-4 border border-white/40 rounded-full px-5 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black">

                            Learn more

                            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                            </span>
                        </button>
                    </motion.div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center items-center min-h-[421px]">

                        {/* GRID IMAGE */}
                        <img
                            src="https://tenderd.com/wp-content/uploads/2025/02/lines.png"
                            alt="grid"
                            className={`absolute w-[660px] max-w-none transition-all duration-[1400ms]
                             ${showImage3
                                    ? 'opacity-30 scale-100'
                                    : 'opacity-100 scale-105'
                                }`}
                        />

                        {/* REAL IMAGE */}
                        <img
                            src="https://tenderd.com/wp-content/uploads/2025/02/track.webp"
                            alt="track"
                            className={`relative z-10 w-full max-w-[520px] bg-[#faebd714] p-[6px] rounded-[10px]
                            transition-all duration-[1600ms]
                            ${showImage3
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 translate-y-[80px] scale-[0.85]'
                                }`}
                        />
                    </div>
                </div>



            </div>
        </section>
    )
}

export default KeyBenefits