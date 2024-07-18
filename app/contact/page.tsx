'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { STATIC_DATA } from '@/constants'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    return (
        <main className='w-full flex flex-col items-center py-14'>
            <article className='w-full flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-evenly mb-8 px-4 md:px-0'>
                <Link
                    href={`tel:+9${STATIC_DATA.phone.replaceAll(' ', '')}`}
                    className='flex items-center gap-2 text-sm md:text-lg font-medium bg-brand w-full md:w-auto px-4 py-2 rounded-md text-white'
                >
                    <FaPhone size={24} />
                    <span>
                        {STATIC_DATA.phone}
                    </span>
                </Link>

                <Link
                    href={`mailto:${STATIC_DATA.email}`}
                    className='flex items-center gap-2 text-sm md:text-lg font-medium bg-brand w-full md:w-auto px-4 py-2 rounded-md text-white'
                >
                    <FaEnvelope size={24} />
                    <span>
                        {STATIC_DATA.email}
                    </span>
                </Link>
            </article>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.804744220209!2d28.2448352764526!3d41.07326051542044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b51bc205276111%3A0xd10879b8942fbea9!2zS2FyZGVsZW4gU8O8csO8Y8O8IEt1cnN1!5e0!3m2!1str!2str!4v1721220170981!5m2!1str!2str"
                width='100%'
                height="500"
                loading="lazy"
            ></iframe>
            <article
                className='w-full flex flex-col items-center gap-4'
            >
                <span className='text-3xl font-bold mt-8'>
                    Bize Ulaşın
                </span>
                <form className='flex flex-col gap-4 mt-6 w-full md:w-1/2 px-4 md:px-0'>
                    <input
                        type='text'
                        placeholder='Adınız'
                        className='border-2 border-gray-300 rounded-md p-4'
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                        type='email'
                        placeholder='E-Posta Adresiniz'
                        className='border-2 border-gray-300 rounded-md p-4'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <textarea
                        placeholder='Mesajınız'
                        className='border-2 border-gray-300 rounded-md p-4 resize-none'
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                    <button className='bg-brand text-white rounded-md p-4'>Gönder</button>
                </form>
            </article>
        </main>
    )
}

export default Contact