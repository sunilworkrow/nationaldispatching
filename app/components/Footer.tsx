import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
} from 'react-icons/fa6'

function Footer() {
    return (
        <footer className=" pt-[40px]">

            <div className="max-w-6xl mx-auto px-6">

                {/* TOP */}
                <div className="grid grid-cols-12 gap-[60px] pb-[40px]">

                    {/* LOGO */}
                    <div className='col-span-4'>

                        <img
                            src="https://nationaldispatching.com/wp-content/uploads/2023/02/logo-white.svg"
                            alt="Tenderd"
                            className="w-[120px]"
                        />





                        {/* SOCIAL */}
                        <div className="flex items-center gap-2 mt-10">

                            <a
                                href="#"
                                className="p-2 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-[#fee126] hover:border-[#fee126] transition-all duration-300"
                            >
                                <FaFacebookF size={18} />
                            </a>





                            <a
                                href="#"
                                className="p-2 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-[#fee126] hover:border-[#fee126] transition-all duration-300"
                            >
                                <FaXTwitter size={18} />
                            </a>





                            <a
                                href="#"
                                className="p-2 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-[#fee126] hover:border-[#fee126] transition-all duration-300"
                            >
                                <FaYoutube size={18} />
                            </a>





                            <a
                                href="#"
                                className="p-2 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-[#fee126] hover:border-[#fee126] transition-all duration-300"
                            >
                                <FaInstagram size={18} />
                            </a>





                            <a
                                href="#"
                                className="p-2 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-[#fee126] hover:border-[#fee126] transition-all duration-300"
                            >
                                <FaLinkedinIn size={18} />
                            </a>

                        </div>

                    </div>

                    {/* COMPANY */}
                    <div className='col-span-2'>

                        <h3 className="text-white text-[15px] font-[700] uppercase tracking-[1px] mb-8">
                            Company
                        </h3>

                        <ul className="space-y-1 text-[14px]">

                            <li>
                                <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                    News
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                    Case Studies
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                    Contact Us
                                </a>
                            </li>

                        </ul>

                    </div>


                    <div className='col-span-4'>

                        <h3 className="text-white text-[15px] font-[700] uppercase tracking-[1px] mb-8">
                            Products
                        </h3>

                        <div className="grid grid-cols-2 gap-x-10">

                            <ul className="space-y-1 text-[14px]">

                                

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        BI & Reports
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        Financials
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        Energy Management
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        Maintenance
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        Logistics
                                    </a>
                                </li>

                            </ul>





                            <ul className="space-y-1 text-[14px]">

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        Equipment Allocation
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        Emissions
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        Productivity
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        Safety
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                        Track
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>


                    <div className='col-span-2'>

                        <h3 className="text-white text-[15px] font-[700] uppercase tracking-[1px] mb-8">
                            Useful Links
                        </h3>

                        <ul className="space-y-1 text-[14px]">

                            <li>
                                <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                    Careers
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white/90 hover:text-[#fee126] transition-all duration-300">
                                    FAQ
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
            {/* BOTTOM */}

            <div className='border-t border-white/10'>

                <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-6">

                    <p className="text-white/70 text-[12px]">
                        Copyright © 2026 National Dispatching. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-8">

                        <a href="#" className="text-white/70 hover:text-[#fee126] transition-all duration-300 text-[12px]">
                            Privacy Policy
                        </a>

                        <a href="#" className="text-white/70 hover:text-[#fee126] transition-all duration-300 text-[12px]">
                            Website Terms
                        </a>

                        <a href="#" className="text-white/70 hover:text-[#fee126] transition-all duration-300 text-[12px]">
                            Product Terms
                        </a>

                        <a href="#" className="text-white/70 hover:text-[#fee126] transition-all duration-300 text-[12px]">
                            Terms & Conditions - UAE
                        </a>

                        <a href="#" className="text-white/70 hover:text-[#fee126] transition-all duration-300 text-[12px]">
                            Terms & Conditions - KSA
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer