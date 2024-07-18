import Image from 'next/image'
import React from 'react'

const Courses = () => {

    const Licenses = [
        {
            class: "A1 SINIFI SÜRÜCÜ BELGESİ",
            description: "16 yaşını doldurmuş olmanız gerekmektedir. Ehliyetinizi aldıktan sonra geçerlilik süresi 10 yıldır. 10 yıldan sonra tekrar yenilemeniz gerekmektedir.",
            image: '/assets/courses-1.jpg'
        },
        {
            class: "A2 SINIFI SÜRÜCÜ BELGESİ",
            description: "18 yaşını doldurmuş olmanız gerekmektedir. Ehliyetinizi aldıktan sonra geçerlilik süresi 10 yıldır. 10 yıldan sonra tekrar yenilemeniz gerekmektedir.",
            image: '/assets/courses-1.jpg'
        },
        {
            class: "B SINIFI SÜRÜCÜ BELGESİ",
            description: "18 yaşını doldurmuş olmanız gerekmektedir. Ehliyetinizi aldıktan sonra geçerlilik süresi 10 yıldır. 10 yıldan sonra tekrar yenilemeniz gerekmektedir.",
            image: '/assets/courses-1.jpg'
        },
        {
            class: "C SINIFI SÜRÜCÜ BELGESİ",
            description: "21 yaşını doldurmuş olmanız gerekmektedir. Ehliyetinizi aldıktan sonra geçerlilik süresi 5 yıldır. 5 yıldan sonra tekrar yenilemeniz gerekmektedir.",
            image: '/assets/courses-1.jpg'
        },
        {
            class: "D SINIFI SÜRÜCÜ BELGESİ",
            description: "24 yaşını doldurmuş olmanız gerekmektedir. Ehliyetinizi aldıktan sonra geçerlilik süresi 5 yıldır. 5 yıldan sonra tekrar yenilemeniz gerekmektedir.",
            image: '/assets/courses-1.jpg'
        },
        {
            class: "CE SINIFI SÜRÜCÜ BELGESİ",
            description: "21 yaşını doldurmuş olmanız gerekmektedir. Ehliyetinizi aldıktan sonra geçerlilik süresi 5 yıldır. 5 yıldan sonra tekrar yenilemeniz gerekmektedir.",
            image: '/assets/courses-1.jpg'
        },
        {
            class: "M SINIFI SÜRÜCÜ BELGESİ",
            description: "16 yaşını doldurmuş olmanız gerekmektedir. Ehliyetinizi aldıktan sonra geçerlilik süresi 10 yıldır. 10 yıldan sonra tekrar yenilemeniz gerekmektedir.",
            image: '/assets/courses-1.jpg'
        }
    ]

    return (
        <main className='w-full flex flex-col items-center py-14'>
            <h1 className="text-3xl font-bold text-center mb-12">EHLİYETLER</h1>
            <article className='container grid grid-cols-1 md:grid-cols-3 gap-20'>
                {
                    Licenses.map((license) => (
                        <div key={license.class} className="flex flex-col items-center w-64 md:w-96 mx-auto gap-4 pb-8 border-2 border-brand rounded-xl shadow-lg shadow-brand">
                            <div className='w-64 md:w-96 h-52 md:h-72 flex relative items-center justify-center'>
                                <Image src={license.image} alt={license.class} className="rounded-lg px-0.5"
                                    fill
                                    draggable={false}
                                />
                            </div>
                            <h2 className="text-base md:text-lg font-bold">{license.class}</h2>
                            <p className="text-xs md:text-sm text-center px-6">{license.description}</p>
                        </div>
                    ))
                }
            </article>
        </main>
    )
}

export default Courses