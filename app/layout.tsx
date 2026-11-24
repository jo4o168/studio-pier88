import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Studio Pier 88 · Estúdio fotográfico em São Paulo",
  description:
    "Estúdios para fotografia, filmagem e eventos na Vila Leopoldina, São Paulo. Inspirado nos estúdios de Nova York, com luz natural e estrutura completa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
