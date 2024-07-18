import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kardelen Sürücü Kursu Silivri",
  description: "Kardelen Sürücü Kursu, sürücü eğitimi alanında uzmanlaşmış bir kurumdur. Amacımız, öğrencilere güvenli ve bilinçli bir şekilde araç kullanmayı öğretmektir. Uzman eğitmenlerimiz, geniş deneyimleri ve bilgileriyle öğrencilere en iyi eğitimi sunmaktadır. Kurs programımız, trafik kuralları, araç kontrolü, sürüş teknikleri ve trafik psikolojisi gibi konuları kapsamaktadır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.className} w-full h-full min-h-screen flex items-center flex-col justify-between`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
