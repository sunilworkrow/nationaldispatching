'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About us' },
  { href: '#', label: 'Rent Equipment' },
  { href: '#', label: 'Services' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Locations' },

]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-500 ${scrolled
        ? 'bg-cream/95 backdrop-blur-sm shadow-sm border-b-[1px] border-[#ffffff33] bg-black/60 shadow-[0px_6px_13px_0px_rgba(0,0,0,0.1)]'
        : 'bg-transparent max-w-7xl mx-auto border-b-[1px] border-[#ffffff33]'
        }`}
    >
      <nav className=" max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className=" leading-none group w-[120px]">
          <img className='' src="https://nationaldispatching.com/wp-content/uploads/2023/02/logo-white.svg" />
        </Link>

        {/* Desktop Nav */}
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center ">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-[20px] py-[30px] flex items-center gap-[5px]"
              >
                {link.label}

                {/* Products Arrow */}
                {link.label === 'Rent Equipment' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-[1px]"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
                {link.label === 'Services' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-[1px]"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className='flex items-center justify-between gap-[24px]'>
          <Link href="#" className="">
            Login
          </Link>
         
          <Link href="#" className="inline-flex items-center rounded-[120px] border border-[#fee126] bg-[#fee126] px-4 py-2 text-[#000000] ">
            Contact us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-4 h-px bg-charcoal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <ul className="flex flex-col px-6 py-4 bg-cream/98 gap-4 border-t border-gold/20">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-[0.3em] uppercase text-charcoal hover:text-gold transition-colors block py-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
