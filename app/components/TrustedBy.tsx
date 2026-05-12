import React from 'react'

const logos = [
  'https://tenderd.com/wp-content/uploads/2025/04/APMH.png',
  'https://tenderd.com/wp-content/uploads/2025/04/IFFCO-LOGO-1.png',
  'https://tenderd.com/wp-content/uploads/2025/04/NMDC-Group-1-scaled.png',
  'https://tenderd.com/wp-content/uploads/2025/04/mcDermott-white-logo.svg',
  'https://tenderd.com/wp-content/uploads/2025/04/sixco.png',
]

function TrustedBy() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto overflow-hidden">

        {/* TITLE */}
        <div className="text-center mb-[34px]">
          <p className="text-[#fee126] text-[14px] font-semibold tracking-[1px] uppercase">
            Trusted By
          </p>
        </div>

        {/* LOGO SLIDER */}
        <div className="relative">

          <div className="trusted-slider flex items-center gap-[90px] w-max">

            {/* FIRST SET */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px]"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="h-[82px] w-[150px] object-contain opacity-90 brightness-0 invert"
                />
              </div>
            ))}

            {/* DUPLICATE SET */}
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center min-w-[180px]"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="h-[82px] w-[150px] object-contain opacity-90 brightness-0 invert"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy