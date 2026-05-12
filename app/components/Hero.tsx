'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Hero({ }: Props) {
    return (
        <section className="relative overflow-hidden pt-[111px] pb-[90px]">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[70px] items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <h1 className="text-white text-[42px] md:text-[45px] leading-[1.3] font-[800] tracking-[-2px] max-w-[680px]">
                            One Stop Solution For Heavy Equipment Rentals & Construction Services
                        </h1>

                        <p className="text-[#d2d2d2] text-[16px] leading-[1.8] font-semibold mt-8 max-w-[620px]">
                            We provide reliable heavy equipment rentals, material supply, procurement, and dispatching solutions for construction, industrial, and infrastructure projects across the country.
                        </p>

                        {/* BUTTON */}
                        <div className="mt-10">
                            <a
                                href="#"
                                className="inline-flex items-center gap-4 rounded-full bg-[#fee126] px-7 py-2 text-[#000000] font-semibold transition-all duration-300 hover:scale-[1.03]"
                            >
                                Explore Rentals

                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#000000] text-[18px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT VIDEO */}
                    <div className="relative flex justify-center lg:justify-center">

                        {/* GLOW EFFECT */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="hero-glow"></div>
                        </div>

                        {/* VIDEO */}
                        <div className="relative z-10 overflow-hidden bg-black p-[0px]">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full max-w-[620px] h-[520px] object-cover"
                            >
                                <source
                                    src="https://tenderd.com/wp-content/uploads/2025/08/main-banner-video.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

        </section>



    )
}

export default Hero