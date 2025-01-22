import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavResponsivo from "@/components/Home/Navbar/NavResponsivo";
import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const font=Roboto({weight:["100","300","400","500","700","900"],
  subsets:["latin"],

})
export const metadata: Metadata = {
  title: "Generador de imagenes IA",
  description: "Pagina en donde podras generar una imagenen usando la inteligencia artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  bg-indigo-950 antialiased`}
      >
        <NavResponsivo/>
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  );
}
