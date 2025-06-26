import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Your Name - Personal Portfolio & Blog",
  description: "Showcasing my work, thoughts, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lora.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
