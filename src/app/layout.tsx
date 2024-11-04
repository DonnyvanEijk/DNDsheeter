import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";



export const metadata: Metadata = {
  title: "D&D Sheeter",
  description: "A character sheet manager for Dungeons & Dragons 5th Edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-zinc-800 bg-zinc-400">
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
           {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
