import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

export const metadata = {
  title: "Arpit Jain | Software Engineer & Systems Builder",
  description: "The personal portfolio of Arpit Jain. A Computer Science student at K.R. Mangalam University working on AI, Software, and Digital Products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-textPrimary bg-background selection:bg-textPrimary/10 selection:text-textPrimary">
        {children}
      </body>
    </html>
  );
}
