import React from 'react'

function CTASection() {
    return (
        <section className=" py-[60px]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="overflow-hidden rounded-[22px] bg-[linear-gradient(152.97deg,#fee126ad_0%,rgba(255,255,255,0)_100%)]">

                    <div className=" items-center relative">

                        {/* LEFT */}
                        <div className="px-8 lg:px-14 py-16">

                            <h2 className="text-white text-[42px] lg:text-[32px] leading-[1.1] font-[700] max-w-[560px]">
                                Reduce Delays & Keep Projects Moving.
                            </h2>

                            <p className="text-white text-[16px] leading-[] mt-8 max-w-[560px]">
                                Get dependable equipment rentals, procurement support, and dispatch coordination designed to improve project efficiency and reduce operational downtime.
                            </p>





                            {/* BUTTONS */}
                            <div className="flex flex-wrap items-center gap-5 mt-10">

                                {/* CONTACT */}
                                <button className="px-5 py-2 rounded-full border border-white text-white text-[14px] font-[500] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                                    Contact Us
                                </button>


                                {/* DEMO */}
                                <button className="px-5 py-2 rounded-full bg-black text-white text-[14px] font-[500] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                                    Book A Rental
                                </button>

                            </div>

                        </div>





                        {/* RIGHT IMAGE */}
                        <div className="absolute right-0 bottom-0 h-[300px]">

                            <img
                                src="https://tenderd.com/wp-content/uploads/2026/03/tenderd-dashboard-cta.jpg"
                                alt="dashboard"
                                className="h-full w-full object-cover rounded-t-lg"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default CTASection