import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Inteligência - 6º BPRv",
  icons: "/rodoviaria.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
          <div
            className="
          w-full min-h-screen flex flex-col items-center bg-black/80 relative"
          >
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
