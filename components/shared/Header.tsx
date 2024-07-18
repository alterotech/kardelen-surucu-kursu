'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaMapPin, FaPhone } from 'react-icons/fa'
import { STATIC_DATA, NAV_LINKS } from '@/constants'
import { usePathname } from 'next/navigation'

const Header = () => {

    const pathname = usePathname()

    return (
        <header className='w-full h-60 md:h-44 bg-white shadow-2xl'>
            <article className='w-full flex items-center justify-around bg-brand h-12'>
                <section className='flex flex-row items-center gap-6 h-full'>
                    <div className='flex items-center gap-1.5 text-white'>
                        <FaPhone />
                        <span className='text-xs md:text-sm font-extralight'>{STATIC_DATA.phone}</span>
                    </div>
                    <div className='h-2/5 w-0.5 bg-white rounded-full hidden md:flex'></div>
                    <div className='hidden md:flex items-center gap-1.5 text-white'>
                        <FaMapPin />
                        <span className='text-sm font-extralight'>{STATIC_DATA.address}</span>
                    </div>
                </section>
                <Link href='#' className='hidden md:flex items-center gap-2 text-white bg-brand hover:text-brand hover:bg-white transition-colors duration-500 rounded-lg px-4 py-1'>
                    <FaInstagram />
                    <span>
                        Instagram'da bizi takip edin
                    </span>
                </Link>
            </article>
            <article className='h-48 md:h-32 container flex flex-col md:flex-row items-center justify-around md:justify-between px-0 md:px-8'>
                <Link href='/'>
                    <Image src='/assets/logo-not-bg.png' width={128} height={128} alt='Kardelen' title='Kardelen' draggable={false} />
                </Link>

                <nav className='flex items-center justify-between w-full md:w-auto md:justify-normal px-3 md:px-0 md:gap-10'>
                    {
                        NAV_LINKS.map((link, index) => (
                            <Link key={index} href={link.href} className={`${pathname == link.href ? 'text-brand' : 'text-black'} hover:text-brand transition-colors duration-300 font-semibold text-xs md:text-lg select-none`}>
                                {link.title}
                            </Link>
                        ))
                    }
                </nav>
            </article>
        </header>
    )
}

export default Header