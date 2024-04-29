import type { Metadata } from "next"

import { Inter, Space_Grotesk } from 'next/font/google'

import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter' 
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: "TechTalk",
  description: "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            layout: {
              socialButtonsVariant: "iconButton",
              logoImageUrl: "/assets/images/logo.svg"
            },
            // elements: {
            //   formButtonPrimary: 'primary-gradient',
            //   footerActionLink: 'primary-text-gradient hover:text-primary-500'
            // }
            variables: {
              colorText: "#15151c",
              colorPrimary: "#ff851b",
              colorBackground: "#fff",
              colorInputBackground: "#fff",
              colorInputText: "#15151c",
            }
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
