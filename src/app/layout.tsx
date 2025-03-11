import type { Metadata } from "next";
import { Archivo_Black, Oswald, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const archivo_black = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-archivo-black",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-oswald",
});
export const metadata: Metadata = {
  title: "Wilfreno Gayongan",
  description: "Wilfreno Gayongan (Wing) Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(archivo_black.variable, poppins.variable, oswald.variable)}>
        <ThemeProvider enableSystem defaultTheme="dark" attribute="class">
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
