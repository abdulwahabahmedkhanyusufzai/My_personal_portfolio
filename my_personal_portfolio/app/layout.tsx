import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
const inter = Rubik({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Abdul Wahab's Portfolio",
  description: "Modern & Minimalistic JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>      </body>
    </html>
  );
}
