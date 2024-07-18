'use client'
import React from 'react'
import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const Home = () => {

  const heroSections = [
    {
      id: 1,
      image: '/assets/hero-1.jpg',
      title: 'Ehliyetsiz Kimse Kalmasın'
    },
    {
      id: 2,
      image: '/assets/hero-2.jpg',
      title: "Uzman Eğitmenlerle Öğrenin"
    },
    {
      id: 3,
      image: '/assets/hero-3.jpg',
      title: 'Sürücü Belgenizi Hemen Alın'
    }
  ]

  return (
    <main className='w-full flex flex-col items-center pb-14'>
      <Carousel className='bg-brand w-full h-60 md:h-[38rem]' opts={{ align: 'start', loop: true }}>
        <CarouselContent>
          {
            heroSections.map(section => (
              <CarouselItem key={section.id}>
                <div className='w-full h-60 md:h-[38rem] flex items-center justify-center relative'>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    objectFit="cover"
                    objectPosition={section.id === 1 ? 'left' : 'center'}
                  />
                  <h1 className='text-xl md:text-4xl cursor-default select-none font-bold text-white absolute'>{section.title}</h1>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>

      <article className='container mx-auto flex flex-col items-center my-20'>
        <h1 className='text-black cursor-default select-none text-xl md:text-3xl font-bold'>Ehliyet Alma Aşamaları</h1>
        <section className='grid grid-cols-1 mt-14 md:grid-cols-3 gap-20'>
          <div className='border-2 border-brand bg-white shadow-lg shadow-brand rounded-xl flex flex-col gap-4 pb-4 mx-auto'>
            <div className='w-64 md:w-96 h-52 md:h-72 flex items-center justify-center relative'>
              <Image
                src='/assets/step-1.jpg'
                fill
                draggable={false}
                alt='Step 1'
                className='rounded-t-xl object-cover select-none'
              />
            </div>

            <h2 className='text-black text-lg md:text-xl font-bold cursor-default select-none text-center'>
              Eğitimlere Katılın
            </h2>
          </div>

          <div className='border-2 border-brand bg-white shadow-lg shadow-brand rounded-xl flex flex-col gap-4 pb-4 mx-auto'>
            <div className='w-64 md:w-96 h-52 md:h-72 flex items-center justify-center relative'>
              <Image
                src='/assets/step-2.jpg'
                fill
                draggable={false}
                alt='Step 1'
                className='rounded-t-xl object-cover select-none'
              />
            </div>

            <h2 className='text-black text-lg md:text-xl font-bold cursor-default select-none text-center'>
              Pratik Yapın
            </h2>
          </div>

          <div className='border-2 border-brand bg-white shadow-lg shadow-brand rounded-xl flex flex-col gap-4 pb-4 mx-auto'>
            <div className='w-64 md:w-96 h-52 md:h-72 flex items-center justify-center relative'>
              <Image
                src='/assets/step-3.jpg'
                fill
                draggable={false}
                alt='Step 1'
                className='rounded-t-xl object-cover select-none'
              />
            </div>

            <h2 className='text-black text-lg md:text-xl font-bold cursor-default select-none text-center'>
              Sürücü Belgenizi Alın
            </h2>
          </div>
        </section>
      </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.804744220209!2d28.2448352764526!3d41.07326051542044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b51bc205276111%3A0xd10879b8942fbea9!2zS2FyZGVsZW4gU8O8csO8Y8O8IEt1cnN1!5e0!3m2!1str!2str!4v1721220170981!5m2!1str!2str"
        width='100%'
        height="500"
        loading="lazy"
      ></iframe>
    </main>
  )
}

export default Home
