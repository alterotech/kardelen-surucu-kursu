'use client'
import React from 'react'
import Image from 'next/image'

const Courses = () => {

    const [page, setPage] = React.useState(0)

    const Lessons = [
        {
            lesson: "Trafik Adabı",
            image: '/assets/lesson-1.jpg',

        },
        {
            lesson: 'İlk Yardım',
            image: '/assets/lesson-2.jpg'
        }
    ]

    return (
        <main className='w-full flex flex-col items-center py-14'>
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">DERSLERİMİZ</h1>
            <article className={`container grid grid-cols-1 ${page === 0 && 'md:grid-cols-2'} gap-20`}>
                {
                    page === 0 ? (
                        Lessons.map((lesson) => (
                            <div onClick={() => lesson.lesson == 'Trafik Adabı' ? setPage(1) : setPage(2)} key={lesson.lesson} className="flex flex-col cursor-pointer items-center w-64 md:w-96 mx-auto gap-4 pb-8 border-2 border-brand rounded-xl shadow-lg shadow-brand">
                                <div className='w-64 md:w-96 h-60 md:h-64 relative flex items-center justify-center'>
                                    <Image src={lesson.image} alt={lesson.lesson} className="rounded-xl px-0.5"
                                        fill
                                        draggable={false}
                                    />
                                </div>
                                <h2 className="text-xl font-bold">{lesson.lesson}</h2>
                            </div>
                        ))
                    ) : page === 1 ? (
                        <div className="container mx-auto p-1 md:p-6">
                            <button
                                onClick={() => setPage(0)}
                                className="bg-brand text-white text-lg px-8 py-2 rounded-md mb-20"
                            >
                                {`<`} Geri Dön
                            </button>
                            <h1 className="text-2xl font-bold mb-4">Adap ve Trafik</h1>

                            <section>
                                <h2 className="text-xl font-semibold mt-6 mb-2">TRAFİKTE ADAP</h2>

                                <h3 className="text-lg font-semibold mt-4 mb-2">1. Trafik</h3>
                                <p className="mb-4">
                                    Trafik, yayaların, hayvanların ve araçların kara yolları üzerindeki hal ve hareketleridir. Diğer bir ifadeyle motorsuz ve motorlu taşıtlarla insanlar ve hayvanlar arasındaki ilişkidir. Bu ilişki araç, hava ve denizlerden birbirleriyle geçişlerini ifade eden şekillerden oluşmaktadır.
                                </p>

                                <h3 className="text-lg font-semibold mt-4 mb-2">2. Adap</h3>
                                <p className="mb-4">
                                    Türk Dil Kurumu sözlüğünde edep, “Toplum içinde uyulması gereken davranış kuralları, terbiye, adap.” olarak açıklanmaktadır. Edep, “terbiye, utanma, usul, yol ve kaide” gibi anlamlarla ifade ettiği gibi, “davranış, tutum, nezaket ve kibarlık, hayvanlık ve kabalık” manalarına da gelmektedir. Edep, dinî gerekliliğe ve akla uygun saygılı edep ile sınırlı davranışları kapsar. Bu durumdaki özgürlüğü dolayısıyla insanı sapıtan, kötüleşmiş insanlar için de denmiştir. Başka bir tarif ise; “örneğin sahibi küçük düşücü durumlardan koruyan meziyet” diye tanımlanır. Edebini bilen çocuğu adaptır. Toplum fertlerinin yaşayış ve karşılıklı münasebetlerinde genel olarak bir tarafta halkın devam eden ve usulüne davranışların yerine göre adap, terbiyesizlik, edepsizlik sayılmak manasında ahlakî ve içtimai kuralların bütününe hukukta umumî adap denir. Adap kavramı ahlakî kavramdan daha geniş olup bu kavramın da içine alır. Herhangi bir cezai işlem gerektirmeyen ve kişiyi saygısızlıkla hak ve kusurlar edep kavramının kapsama girer. Her ahlak edepdir ama her edep ahlakî değildir. Kısaca, adap; “toplumların davranış yöntemlerinin (liberâl) temeli”, edep de “bu yöntemlere (ideme) uygun davranış” olarak düzenlenir.
                                </p>

                                <h3 className="text-lg font-semibold mt-4 mb-2">3. Trafikte Adap Kuralları</h3>
                                <p className="mb-4">
                                    Trafikte adap, trafikle çalışan herkesin yaşamı zorunlu olmadığı ancak olduğunda trafik ve trafik akışının en az trafik kuralları kadar düzen ve sükûn ceza korkusu olmadan nezaketen uygulanan hususları içerir. Trafikte adap, trafik kültürünün oluşmasına ve hayatta geçirilmesine hizmet eder. Trafikte adap güvenli seyahat etmenin yollarını bize sağlamaktadır. Trafikte karşılıklı sevgi, saygı, anlayış ve birbirimize ihtimamı öğreterek anlamadıklarımızı birleştirmekte, birbirimizle çalışmaktayız. Trafik kurallarının uygulanması trafik adabının oluşması ve yerleşmesine sebep olmaktadır. Trafik adabı, insanları trafik ortamında birbirlerine karşı olumlu tepki ve davranışların ifadesi etmektedir. Trafikte ilk işe yaşamak zorunda olan insanlar bazen sorumluluklardan kaçan veya olarak trafiğin akışını etkilemektedir. Çoğumuz yaya iken sürücülerde, sürücü iken yayalara karşı olumsuz tavırlar sergileyebiliriz. Trafikte yaşayanların taşıtlara ve kaygılar bazen istememesi sonucunda da sebep olmaktadır. Bu olumsuzluktan en az insan iletişiminden dolayı hak ve sorumluluklarımızı bilenler atlatışçılardan kurtulmaya uymak mümkün değildir. Yapılmaması gereken birçok uygunsuz davranışlar yayılmaya çalışılabilecektir. Başkasına saygı duymayan kendisine de saygı duyamayacaktır. Yaya yapmamız kurala olarak adanlandırabileceğimiz bu kuralların uyan kimseler insan kendini saygı duymayan insanlarımızdır. Trafikte adap kurallarına uymak kişilerin trafikte hayatımız ve her türlü kolaylaştırarak toplumu düzenli sağlığına hizmet etmektedir. Trafik kurallarına uymak bir zorunluluk olup aksi cezayı gerektirir. Trafikte adap kurallarına uymadan araç kullanmak ve diğer sürücülerden haklarımıza saygı göstermek gerektiğinde onlara yardıma olmak insanlığımızı gerektirir. Yayaya yeşil ışığı yanlışı halde araç yolu vermeden ona yol hakkını kullanarak trafik kurali ihlalidir. Tespiti durumunda ceza gerektirir. Kendisine uygun güvenli bir şekilde kaygıya geçmesini sağlatan uysa adap kurallıdır. Bu tür sürücüler adap kuralları uygulamaları içermektedir. Dediğimiz uygulamaların yapılması trafikte daha insan hakları ve güvenli trafikte sağlanır. Bu tür sürücüler adap kuralları içerisinde işleyişleri demektedir. Söylenir ve asırlar içerisinde gelişmektedir.
                                </p>

                                <p className="font-semibold mt-4">Kural: “Bir sarada, bir bilme temel şartı olan, yol veren ilke, kâide.” Davranışlarımızın bilmeyen ve uyma zorunluluğu olan unsurlardan biridir.</p>
                                <p className="mb-4">Toplumun isteklerini ve beklentilerini bir düzenlemeyi ilâhî hayatın düzene yayılması ve bilinmesi gerekmektedir. Sözlü bunlardan kısaca bahsedelim. Toplumda insanları birlikte yaşamasını sağlayan ve uygulasız zorunlu olan bazı kurallar mevcuttur. Bu kurallar yazılı ve yazısız olmak üzere iki çeşitlidir. Yazılı kurallar zamanına ve ihtiyaca göre değişiklik hukuk kurallarıdır. Yazısız kurallar ise; yazılı kurallara da uyum ve değişmeyen, bu nedenle toplumun her kesimi tarafından kabul edilen, benimsenen ve uygulanan kurallardır. Yazılı kurallar ihtiyaçtan giderilen hukuk kuralları şâhıslı, yazısız kurallar âdî, adet ve geleneklerden meydana gelen kurallardır. Bu kuralların amacı toplumda belirli bir düzenin oluşması, insanlara hak ve sorumlulukların hatırlatılarak yerine getirilmesi ve sonunda huzuru sağlayarak ve insanın mutlu yaşamasını temin etmek için toplumun uyması gereken kurallara ihtiyaç vardır. Bu sebepten ihtiyaçlara cevap veren her türlü önlem ve yasakları kuralları konulması ve yapılması gerekmektedir.</p>

                                <p className="mb-4">Trafik kuralları da insan hayatının önemsemek sebebi ile yaşatılması ve uyması gereken görevlerindendir. Trafikte kurallar; kara yollarında seyretmeye araç ve yayaların belirli bir düzen içerisinde hareketlerine yön verir. Karşılıklı doğru gelişleri düzenleyen, birbirine ve yayaya, geçiş üstünlüğü ve öncelik yapan durumu düzenler. Kısaca ilişkileri sevgi ve ahlak içerisinde destekler, huzuru sağlamak için yasaktır.</p>

                                <p className="font-semibold mt-4">Trafikte adap kurallarına uymamız durumunda aşağıda sıralanan faydaları elde etmiş oluruz. Bunlar:</p>
                                <ul className="list-disc list-inside mb-4">
                                    <li>Kurallara uymayanlar cezai işlem sağlar.</li>
                                    <li>İnsan davranışlarını kontrol altında tutar. Davranışlara sınırlama getirir. Böylece insan hata yapma ihtimali azalır.</li>
                                    <li>Kurallar kişilerin hangi konuda nasıl davranacaklarının yolunu açar. Hatalı yapılanlardan sorumlu tutar.</li>
                                    <li>Toplumda düzenleyici ve sosyal ortamın oluşmasını engeller.</li>
                                    <li>Toplumun eğitim seviyesinin yükselmesini yolunu sağlar.</li>
                                    <li>Toplumun huzur ve refah ortamının oluşmasını sağlar.</li>
                                    <li>Kişisel haklarımızı sağlar.</li>
                                    <li>Kişileri yaşayamayı engeller.</li>
                                    <li>Manevi ve maddiyat yönünde birçok tramvatik ortamdan kişileri saklar.</li>
                                </ul>

                                <h3 className="text-lg font-semibold mt-4 mb-2">4. Adabımuaşeretin (Toplum Adabı) Trafik Kuralları ile İlişkileri</h3>
                                <p className="mb-4">
                                    İnsanlar toplum hayatında yaşamak zorundadırlar. Toplumda kişilerin birbirleri ile olan ilişkileri bir kurala bağlanmıştır. Toplum hayatını düzene sokan bu kurala adap denilmektedir. Yolculuk adabı, konuşma adabı, yeme adabı, oturma adabı gibi. Buna biz beşeri münasebet de demekteyiz. ”Muaşeret» ise birlikte yaşayıp iyi geçinme anlamlarını ifade eder. Beşeri münasebetlere genel olarak adabı muaşerette denilmektedir. Toplumda normal davranış şekilleri, karşılıklı geçinme usulleri, nezaket ve görgü kuralları anlamına gelmektedir. Adabımuaşeret genel ahlâk prensiplerinin tamamlayıcı unsurlarıdır. Adabımuaşeret diğer bir ifade ile görgü kuralları olarak da adlandırılabilir. Bunlar kızgınlık ve şiddetten sakınarak yumuşak huylu olmak, dostluğa önem vermek, hakkına razı olmak, yapılan iyiliklere karşı teşekkür etmek, bir işte azim ve sebat sahibi olmak, başkalarını kötülemekten kaçınmak, kendini yüksek görmemek, yaptığı iyilikleri başa kakmamak, ağır başlı ve vakur olmak, koğuculuk yapmamak, herkes hakkında hayır dilemek, yardımsever olmak, kendisi için arzu ettiği güzel şeyleri kardeşi için de arzu etmek, hastaları ziyarette bulunmak, onların sıhhat ve afiyetleri için dua etmek, muhtaçlara yardımcı olmak, iyiliği emredip kötülükten sakındırmak, kaba ve çirkin, edep dışı müstehcen ve kalp kırıcı sözlerden sakınmak” gibi davranışlardır.
                                </p>
                            </section>
                        </div>
                    ) : page === 2 && (
                        <div className="container mx-auto p-1 md:p-6">
                            <button
                                onClick={() => setPage(0)}
                                className="bg-brand text-white text-lg px-8 py-2 rounded-md mb-20"
                            >
                                {`<`} Geri Dön
                            </button>
                            <h1 className="text-2xl font-bold mb-4">İnsan Vücudu Ve İşleyişi</h1>

                            <section>
                                <h2 className="text-xl font-semibold mt-6 mb-2">İNSAN VÜCUDU YAPISI</h2>

                                <p className="mb-4">
                                    Vücumuzun en küçük canlı birimi HÜCRE’dir. Hücrenin beslenmesine zar yardımcı olur. Hücreler birleşerek dokuları, dokular birleşerek ORGAN’ları meydana getirir. Organlarda birleşerek SİSTEM’leri meydana getirir. Dolaşım sistemi tüm vücutta faaliyet gösterir. Kalp, dolaşım sisteminin bir parçasıdır ve kanın tüm vücutta dolaşımını sağlar. Akciğer- gırtlak solunum sistemindedir. Mide-bağırsak karın bölgesinde ve sindirim sisteminin bir parçasıdır. Omurga boşluğunda sinir sisteminin bir bölümü faaliyet gösterir.                                </p>

                                <h3 className="text-lg font-semibold mt-4 mb-2">Hareket Sistemi</h3>
                                <p className="mb-4">
                                    Kemikler: Kemikler vücudu ayakta tutan çatı yapısıdır. Hareket etmeyi ve sistemlerin kolay çalışmasın sağlar. Vücudumuzda 208 adet kemik iskeletimizi oluşturur. Kemikler yassı, uzun ve kısa olmak üzere üç türlüdür.

                                    Eklemler: Kemiklerin birbirine bağlandığı yapılardır. Oynamaz eklemler, yarı oynar eklemler ve oynar eklemler olmak üzere üç türlüdür.

                                    Kaslar: Çizgili kaslar, çizgisiz (düz) kaslar ve kalp kası olmak üzere üç türlüdür.
                                </p>

                                <h3 className="text-lg font-semibold mt-4 mb-2">Dolaşım Sistemi</h3>
                                <p className="mb-4">
                                    Vücudun her bölgesinde faaliyeti olan sistemdir.

                                    Kalp: Dolaşım sisteminin merkezidir. 4 odacıklıdır.

                                    Kan: Dolaşım sisteminin temel doku yapısıdır.

                                    Damarlar: Atardamar, toplardamar, lenf damarları ve kılcaldamar.

                                    Kalp atım sayısı yetişkinlerde dakikada 60-100, çocuklarda 80-120 ve bebeklerde 100-140’tır.

                                    Atardamarlar vücutta temiz kanın dolaşımını sağlar. Toplardamarlar ise kirli kanının kalp ve akciğer sistemine getirilerek temizlenmesini sağlar. Kılcaldamarlar ise en ince damalarlardır. Dokulara temiz kan gönderiminde görevlilerdir.
                                </p>

                                <p className="text-lg font-semibold mt-4 mb-2">Solunum Sistemi</p>
                                <p className="mb-4">Solunum canlı yaşamı için gerekli oksijeni sağlar. Soluk alıp vermeye “solunum” adı verilir. Solunum sayısı yetişkinlerde dakikada 15-20, çocuklarda 20-25 ve bebeklerde 25-40 arasındadır.

                                    Burun, yutak, dil, gırtlak, soluk borusu, akciğerler, diyafram-karın kası (yardımcı organ), kaburgalar ve arası kaslar (yardımcı organ) ve göğüs kasları solunum sisteminin organlarıdır.
                                </p>

                                <p className="text-lg font-semibold mt-4 mb-2">Sindirim Sistemi</p>
                                <p className="mb-4">Vücudun yaşamını sürdürebilmesi için gerekli gıdaların alınması, sindirilmesi ve atıkların dışarıya atılmasını sağlayan sistemdir.

                                    Ağız, yutak, yemek borusu, mide, tükürük bezleri (yardımcı organ), karaciğer (yardımcı organ), pankreas (yardımcı organ), ince ve kalın bağırsaklar sindirim sisteminin organlarıdır.
                                </p>

                                <h3 className="text-lg font-semibold mt-4 mb-2">Sinir Sistemi</h3>
                                <p className="mb-4">
                                    Etki tepki sistemi olarak ifade edilebilir. Duyuların algılanması, biçimlendirilmesi ve tepki verilmesinden sorumlu bir sistemdir.

                                    Beyin, beyincik, omurilik soğanı ve omurilik, sinir sisteminin organlarıdır.

                                    Beyin: Vücut üzerinde kontrol gücü olan bilinç sistemidir. Duyu sistemlerinin yapılandığı temel organdır. Beyinden 12 çift sinir çıkar.

                                    Beyincik: Yönetimleri, dengeyi ve hareketi sağlar.

                                    Omurilik Soğanı: Temelde dolaşım ve solunum sistemini kontrol eder.

                                    Omurilik: 31 çift sinir çıkar. Beyinden gelen 12 çift sinirle birlikte hareket eder. Sinir sisteminin en yoğun faaliyet gösterdiği vücut bölgesi omuriliktir. Kas, deri ve iç organlarında işlev yürütürler. Beyin ve omurilikte bir hasar olursa koma, felç ve hissizlik meydana gelebilir.
                                </p>
                            </section>
                        </div>
                    )
                }
            </article>
        </main>
    )
}

export default Courses