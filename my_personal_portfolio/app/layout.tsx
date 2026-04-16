import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";


export const metadata: Metadata = {
  title: "Abdul Wahab's Portfolio",
  description: "Modern & Minimalistic JS Mastery Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
