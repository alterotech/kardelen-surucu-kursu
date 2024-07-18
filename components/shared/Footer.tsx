import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS, STATIC_DATA } from '@/constants'
import { FaHome, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='h-auto md:h-96 w-full flex flex-col md:flex-row bg-[#333] p-8 md:p-0'>
            <article className='flex-1 flex items-center justify-center'>
                <Link href='/'>
                    <Image src='/assets/logo-not-bg.png' width={240} height={240} draggable={false} alt='Logo' className='bg-white px-4 rounded-3xl' />
                </Link>
            </article>
            <article className='flex-1 h-full flex flex-col md:flex-row justify-center'>
                <ul className='flex flex-col gap-4 w-full md:w-2/5 list-disc list-inside items-center md:items-start mt-10 mx-auto'>
                    <span className='text-white text-base md:text-lg font-semibold cursor-default select-none mb-4'>
                        Hızlı Erişim
                    </span>
                    {
                        NAV_LINKS.map((link, index) => (
                            <li key={index} className='text-white text-sm md:text-base pl-1 font-medium select-none cursor-pointer'>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>

                <ul className='flex flex-col gap-6 w-full md:w-2/5 md:mt-10 mt-16'>
                    <span className='text-white text-base md:text-lg font-semibold text-center cursor-default select-none mb-4'>
                        İletişim
                    </span>
                    <li className='text-white flex items-center gap-2 text-xs font-light'>
                        <FaHome size={24} />
                        <span className='flex-1'>
                            {STATIC_DATA.address}
                        </span>
                    </li>
                    <li>
                        <Link href={`tel:+9${STATIC_DATA.phone.replaceAll(' ', '')}`} className='text-white flex items-center gap-2 text-sm font-light flex-1'>
                            <FaPhone size={24} />
                            <span className='flex-1'>
                                {STATIC_DATA.phone}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={`https://wa.me/+9${STATIC_DATA.phone.replaceAll(' ', '')}`} target='_blank' className='text-white flex items-center gap-2 text-sm font-light flex-1'>
                            <FaWhatsapp size={24} />
                            <span className='flex-1'>
                                {STATIC_DATA.phone}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={`mailto:${STATIC_DATA.email}`} className='flex items-center text-white gap-2 flex-1 text-sm font-light'>
                            <FaEnvelope size={24} />
                            <span className='flex-1'>
                                {STATIC_DATA.email}
                            </span>
                        </Link>
                    </li>
                </ul>
            </article>
            <article className='flex-1 flex flex-col items-center justify-center mt-16 md:mt-0'>
                <span className='font-bold text-xl cursor-default select-none text-white mb-6'>
                    Galeri
                </span>

                <section className='grid grid-cols-3 gap-4 md:gap-10'>
                    <Image src='/assets/galeri-1.jpg' width={128} height={128} draggable={false} alt='Gallery Image' className='rounded-lg md:rounded-2xl hover:scale-150 transition-all duration-300' />
                    <Image src='/assets/galeri-2.jpg' width={128} height={128} draggable={false} alt='Gallery Image' className='rounded-lg md:rounded-2xl hover:scale-150 transition-all duration-300' />
                    <Image src='/assets/galeri-3.jpg' width={128} height={128} draggable={false} alt='Gallery Image' className='rounded-lg md:rounded-2xl hover:scale-150 transition-all duration-300' />
                    <Image src='/assets/galeri-4.jpg' width={128} height={128} draggable={false} alt='Gallery Image' className='rounded-lg md:rounded-2xl hover:scale-150 transition-all duration-300' />
                    <Image src='/assets/galeri-5.jpg' width={128} height={128} draggable={false} alt='Gallery Image' className='rounded-lg md:rounded-2xl hover:scale-150 transition-all duration-300' />
                    <Image src='/assets/galeri-6.jpg' width={128} height={128} draggable={false} alt='Gallery Image' className='rounded-lg md:rounded-2xl hover:scale-150 transition-all duration-300' />
                </section>
            </article>
        </footer>
    )
}

export default Footer