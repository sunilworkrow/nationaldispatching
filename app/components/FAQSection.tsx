'use client'

import React, { useState } from 'react'

const faqs = [
    {
        question: 'What services does National Dispatching provide?',
        answer:
            'National Dispatching provides heavy equipment rentals, material supply, procurement services, and dispatch coordination for construction, industrial, and infrastructure projects. We help businesses manage equipment sourcing, logistics, and project operations more efficiently.',
    },

    {
        question:
            'What types of equipment are available for rent?',
        answer:
            'We offer a wide range of heavy equipment including forklifts, aerial lifts, excavators, skid steers, generators, trench safety equipment, trailers, and construction support machinery for projects of all sizes.',
    },

    {
        question:
            'How quickly can equipment be delivered to a project site?',
        answer:
            'Our dispatching team works to coordinate fast and reliable equipment delivery based on your location, project requirements, and equipment availability to help minimize downtime.',
    },

    {
        question:
            'Which industries does National Dispatching support?',
        answer:
            'We support construction, infrastructure, energy, transportation, manufacturing, marine, pipeline, and industrial sectors with dependable rental and logistics solutions.',
    },

    {
        question:
            'Do you provide construction material supply services?',
        answer:
            'Yes, we provide construction material sourcing and supply services including aggregates, concrete materials, steel products, lumber, and other essential project materials.',
    },

    {
        question:
            'What does equipment dispatching include?',
        answer:
            'Equipment dispatching includes coordinating equipment transportation, scheduling deliveries and pickups, managing logistics, and ensuring equipment arrives safely and on time at the project site.',
    },

    {
        question:
            'What are the benefits of renting heavy equipment?',
        answer:
            'Renting heavy equipment helps reduce upfront costs, lowers maintenance responsibilities, improves project flexibility, and gives businesses access to modern equipment without long-term ownership expenses.',
    },

    {
        question:
            'Can National Dispatching support large-scale projects?',
        answer:
            'Yes, we support both small and large-scale projects by providing equipment rentals, procurement support, logistics coordination, and operational assistance tailored to project demands.',
    },

    {
        question:
            'How does National Dispatching help improve project efficiency?',
        answer:
            'We help improve efficiency by providing reliable equipment access, organized dispatch coordination, faster procurement support, and streamlined logistics that reduce delays and keep projects moving smoothly.',
    },
]

function FAQSection() {

    const [active, setActive] = useState(0)

    const toggleFaq = (index: number) => {

        setActive(active === index ? -1 : index)

    }

    return (
        <section className=" py-[40px]">

            <div className="overflow-hidden max-w-[1100px] mx-auto px-6">

                {/* TOP */}
                <div className="text-center mb-10">

                    <h2 className="text-white text-[35px] font-[800]">
                        Frequently Asked Questions
                    </h2>

                </div>





                {/* FAQ LIST */}
                <div className="space-y-5">

                    {faqs.map((faq, index) => {

                        const isActive = active === index

                        return (
                            <div
                                key={index}
                                className="border border-white/10 rounded-[4px] overflow-hidden bg-[linear-gradient(152.97deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)]"
                            >

                                {/* QUESTION */}
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between gap-8 text-left px-8 py-8"
                                >

                                    <h3 className="text-[#ffffffcc] text-[18px] font-[400] leading-[1.5]">
                                        {faq.question}
                                    </h3>





                                    {/* ICON */}
                                    <div
                                        className={`min-w-[24px] h-[24px] rounded-full flex items-center justify-center text-[18px] transition-all duration-300
                                        ${isActive
                                                ? 'bg-[#fee126] text-[#000000]'
                                                : 'bg-white/10 text-white'
                                            }`}
                                    >

                                        {isActive ? '−' : '+'}

                                    </div>

                                </button>





                                {/* ANSWER */}
                                <div
                                    className={`grid transition-all duration-500 ease-in-out
                                    ${isActive
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >

                                    <div className="overflow-hidden">

                                        <div className="px-8 pb-8">

                                            <p className="font-light text-[16px] leading-[1.8] max-w-[1050px]">
                                                {faq.answer}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>
        </section>
    )
}

export default FAQSection