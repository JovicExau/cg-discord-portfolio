import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jovic BATA-NGUIMBI Portfolio - Creative Designer & Developer",
  description: "Portfolio personnel de Jovic BATA-NGUIMBI - Creative Designer, Animation, Coding. Découvrez mes projets créatifs et mes compétences en développement web.",
  keywords: ["portfolio", "designer", "développeur", "web", "animation", "créatif"],
  authors: [{ name: "Jovic BATA-NGUIMBI" }],
  openGraph: {
    title: "Jovic BATA-NGUIMBI Portfolio - Creative Designer & Developer",
    description: "Portfolio personnel de Jovic BATA-NGUIMBI - Creative Designer, Animation, Coding",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-gray-900`}
      >
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Page Content */}
            <main className="min-h-screen">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
