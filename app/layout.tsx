import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Rekomendacje Rafonixa - Sprawdz Najlepsze Bonusy",
  description:
    "Odkryj najlepsze bonusy kasynowe z kodami promocyjnymi RAFONIX i RFNX. Ekskluzywne oferty, darmowe spiny i bonusy od sprawdzonych kasyn online.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} ${montserrat.variable} min-h-screen bg-black text-white`}>{children}</body>
    </html>
  )
}
