import React from 'react'

const logos = [
  'https://nationaldispatching.com/wp-content/uploads/2021/04/certificate-1.png',
  'https://nationaldispatching.com/wp-content/uploads/elementor/thumbs/certificate-2-q1ukozd0335hckpf9ixq7f71ptzea07v1591eykw2g.png',
  'https://nationaldispatching.com/wp-content/uploads/2021/04/certificate-4.png',
  'https://nationaldispatching.com/wp-content/uploads/2021/04/certificate-5.png',
  'https://nationaldispatching.com/wp-content/uploads/2021/04/certificate-6.png',
]

function TrustedBy() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto overflow-hidden">

        {/* TITLE */}
        <div className="text-center mb-[34px]">
          <p className="text-[#fee126] text-[14px] font-semibold tracking-[1px] uppercase">
            Affiliations & Certifications
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
                  className="h-[75px] w-[131px] object-contain opacity-90 brightness-0 invert"
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