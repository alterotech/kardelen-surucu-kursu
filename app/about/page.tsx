import React from 'react'
import Image from 'next/image'

const About = () => {

    const vehicles = [
        {
            name: 'Ford Fiesta',
            class: 'B SINIFI',
            imageSrc: '/assets/vehicle-1.jpg',
        },
        {
            name: 'Opel Corsa',
            class: 'B OTOMATİK SINIFI',
            imageSrc: '/assets/vehicle-2.jpg',
        },
        {
            name: 'Mondial',
            class: 'A1 / A2',
            imageSrc: '/assets/vehicle-3.jpg',
        }
    ];

    return (
        <main className='w-full flex flex-col items-center py-10 md:py-14'>
            <article className='container flex flex-col items-center gap-4'>
                <div className="p-1 md:p-6">
                    <h1 className="text-2xl font-bold mb-4">Kardelen Sürücü Kursu Hakkında</h1>
                    <p className="mb-12">
                        Teorik dersler, en iyi şekilde dizayn edilmiş sınıflarımızda verilmektedir. Direksiyon eğitimi ise akan trafikte verilmektedir. Verdiğimiz eğitim, tamamıyla "bilinçli sürücüler" yetiştirmeye odaklanmakta ve bu amaç doğrultusunda hiçbir fedakârlıktan kaçınılmamaktadır. Kurumumuzda koşulsuz müşteri memnuniyeti ilkesi her zaman ön planda tutulmaktadır. Direksiyon eğitiminde kullanılan araçların tümü son modeldir. Kardelen Sürücü Kursu, bireylerin trafik davranışını hem yasal hem de ahlaki bir görev olarak benimseyen sürücü adayları yetiştirmeyi temel hedef olarak belirlemiştir.
                    </p>
                    <h2 className="text-xl font-bold mb-2">Kalite Politikamız</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Eğitimde kaliteyi en üst seviyeye çıkarmak.</li>
                        <li>Son model araçlarla eğitim vermek.</li>
                        <li>Çağın ve teknolojinin getirdiği yenilikleri takip ederek çalışmak.</li>
                        <li>Misafirlerimize ciddi ve güven içerisinde eksiksiz bilgi ve hizmet sunmak.</li>
                        <li>Eğitimde can ve mal güvenliğini en üst seviyede tutmak.</li>
                        <li>Yeniliğe ve değişime açık olmak.</li>
                        <li>Bilgili ve bilinçli profesyonel bir kadro ile sizlere hizmet vermekten onur duyarız.</li>
                    </ul>
                </div>
            </article>
            <div className="container mx-auto p-6 mt-12">
                <h1 className="text-2xl font-bold text-center mb-6">ARAÇLARIMIZ</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {vehicles.map((vehicle) => (
                        <div key={vehicle.name} className="text-center">
                            <Image
                                src={vehicle.imageSrc}
                                alt={vehicle.name}
                                width={300}
                                height={200}
                                className="mx-auto"
                                draggable={false}
                            />
                            <h2 className="text-xl font-bold mt-4">{vehicle.name}</h2>
                            <p className="text-brand font-semibold">{vehicle.class}</p>
                        </div>
                    ))}
                </div>
            </div>

            <article className='container mx-auto p-6 mt-12'>
                <h1 className='text-2xl font-bold text-center mb-6'>KURSUMUZ</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-20 mt-8'>
                    <Image src='/assets/galeri-1.jpg' width={256} height={256} draggable={false} alt='Gallery Image' className='rounded-2xl mx-auto hover:scale-125 transition-all duration-300' />
                    <Image src='/assets/galeri-2.jpg' width={256} height={256} draggable={false} alt='Gallery Image' className='rounded-2xl mx-auto hover:scale-125 transition-all duration-300' />
                    <Image src='/assets/galeri-3.jpg' width={256} height={256} draggable={false} alt='Gallery Image' className='rounded-2xl mx-auto hover:scale-125 transition-all duration-300' />
                    <Image src='/assets/galeri-4.jpg' width={256} height={256} draggable={false} alt='Gallery Image' className='rounded-2xl mx-auto hover:scale-125 transition-all duration-300' />
                    <Image src='/assets/galeri-5.jpg' width={256} height={256} draggable={false} alt='Gallery Image' className='rounded-2xl mx-auto hover:scale-125 transition-all duration-300' />
                    <Image src='/assets/galeri-6.jpg' width={256} height={256} draggable={false} alt='Gallery Image' className='rounded-2xl mx-auto hover:scale-125 transition-all duration-300' />
                </div>
            </article>
        </main>
    )
}

export default About