import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/src/components/common/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "yarn",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero/>
        {children}
        
        </body>
    </html>
  );
}
