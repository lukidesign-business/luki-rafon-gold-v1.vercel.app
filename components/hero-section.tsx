"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [tiltAngle, setTiltAngle] = useState(0)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const openingAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY
      setScrollY(newScrollY)

      const maxTilt = 15
      const scrollFactor = Math.min(newScrollY / 500, 1)
      setTiltAngle(scrollFactor * maxTilt)
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 768)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", checkMobile)

    checkMobile()
    setIsLoaded(true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleCopyCode = async (code: string, containerId: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(containerId)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <Image
            src="/images/rafon-phones-new.jpg"
            alt="Mobile Casino Background"
            fill
            className="object-cover object-center md:hidden"
            priority
          />
          <Image
            src="/images/rafon-top.jpg"
            alt="Golden Casino Background"
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
        </div>
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none">
        <div
          className="absolute select-none seamless-float-1 opacity-25"
          style={{
            left: "8%",
            top: "12%",
            animationDelay: "0s",
          }}
        >
          <Image
            src="/images/bitcoin-coin.png"
            alt="Bitcoin Symbol"
            width={96} // Desktop: 96px
            height={96}
            className="object-contain w-6 h-6 md:w-24 md:h-24" // Mobile: 24px, Desktop: 96px
          />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-18"
          style={{
            left: "18%",
            top: "25%",
            animationDelay: "3s",
          }}
        >
          <Image
            src="/images/euro-symbol.png"
            alt="Euro Symbol"
            width={64}
            height={64}
            className="object-contain w-4 h-4 md:w-16 md:h-16" // Mobile: 16px, Desktop: 64px
          />
        </div>

        <div
          className="absolute select-none seamless-float-2 opacity-22"
          style={{
            left: "25%",
            top: "8%",
            animationDelay: "1.5s",
          }}
        >
          <Image
            src="/images/bar-chart.png"
            alt="Bar Chart"
            width={76}
            height={57}
            className="object-contain w-5 h-4 md:w-[76px] md:h-[57px]" // Mobile: 20x16px, Desktop: 76x57px
          />
        </div>

        <div
          className="absolute select-none seamless-float-4 opacity-15"
          style={{
            left: "70%",
            top: "15%",
            animationDelay: "2s",
          }}
        >
          <Image
            src="/images/bitcoin-coin.png"
            alt="Bitcoin Symbol"
            width={48}
            height={48}
            className="object-contain w-3 h-3 md:w-12 md:h-12" // Mobile: 12px, Desktop: 48px
          />
        </div>

        <div
          className="absolute select-none seamless-float-1 opacity-12"
          style={{
            left: "82%",
            top: "28%",
            animationDelay: "4s",
          }}
        >
          <Image
            src="/images/euro-symbol.png"
            alt="Euro Symbol"
            width={36}
            height={36}
            className="object-contain w-2 h-2 md:w-9 md:h-9" // Mobile: 8px, Desktop: 36px
          />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-18"
          style={{
            left: "88%",
            top: "5%",
            animationDelay: "6s",
          }}
        >
          <Image
            src="/images/bar-chart.png"
            alt="Bar Chart"
            width={32}
            height={24}
            className="object-contain w-2 h-2 md:w-8 md:h-6" // Mobile: 8x8px, Desktop: 32x24px
          />
        </div>

        <div
          className="absolute select-none seamless-float-2 opacity-19"
          style={{
            left: "5%",
            top: "45%",
            animationDelay: "2.5s",
          }}
        >
          <Image
            src="/images/euro-symbol.png"
            alt="Euro Symbol"
            width={68}
            height={68}
            className="object-contain w-4 h-4 md:w-17 md:h-17" // Mobile: 16px, Desktop: 68px
          />
        </div>

        <div
          className="absolute select-none seamless-float-4 opacity-23"
          style={{
            left: "15%",
            top: "55%",
            animationDelay: "5s",
          }}
        >
          <Image
            src="/images/bitcoin-coin.png"
            alt="Bitcoin Symbol"
            width={88}
            height={88}
            className="object-contain w-5 h-5 md:w-22 md:h-22" // Mobile: 20px, Desktop: 88px
          />
        </div>

        <div
          className="absolute select-none seamless-float-1 opacity-14"
          style={{
            left: "85%",
            top: "50%",
            animationDelay: "3.5s",
          }}
        >
          <Image
            src="/images/bar-chart.png"
            alt="Bar Chart"
            width={40}
            height={30}
            className="object-contain w-3 h-2 md:w-10 md:h-8" // Mobile: 12x8px, Desktop: 40x30px
          />
        </div>

        <div
          className="absolute select-none seamless-float-4 opacity-20"
          style={{
            left: "10%",
            top: "75%",
            animationDelay: "4.5s",
          }}
        >
          <Image
            src="/images/bitcoin-coin.png"
            alt="Bitcoin Symbol"
            width={80}
            height={80}
            className="object-contain w-5 h-5 md:w-20 md:h-20" // Mobile: 20px, Desktop: 80px
          />
        </div>

        <div
          className="absolute select-none seamless-float-2 opacity-15"
          style={{
            left: "3%",
            top: "85%",
            animationDelay: "7s",
          }}
        >
          <Image
            src="/images/bar-chart.png"
            alt="Bar Chart"
            width={72}
            height={56}
            className="object-contain w-4 h-3 md:w-18 md:h-14" // Mobile: 16x12px, Desktop: 72x56px
          />
        </div>

        <div
          className="absolute select-none seamless-float-1 opacity-26"
          style={{
            left: "22%",
            top: "82%",
            animationDelay: "2s",
          }}
        >
          <Image
            src="/images/euro-symbol.png"
            alt="Euro Symbol"
            width={72}
            height={72}
            className="object-contain w-4 h-4 md:w-18 md:h-18" // Mobile: 16px, Desktop: 72px
          />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-15"
          style={{
            left: "78%",
            top: "78%",
            animationDelay: "5.5s",
          }}
        >
          <Image
            src="/images/bitcoin-coin.png"
            alt="Bitcoin Symbol"
            width={40}
            height={40}
            className="object-contain w-3 h-3 md:w-10 md:h-10" // Mobile: 20px, Desktop: 40px
          />
        </div>

        <div
          className="absolute select-none seamless-float-4 opacity-18"
          style={{
            left: "88%",
            top: "88%",
            animationDelay: "1.5s",
          }}
        >
          <Image
            src="/images/bar-chart.png"
            alt="Bar Chart"
            width={40}
            height={30}
            className="object-contain w-3 h-2 md:w-10 md:h-8" // Mobile: 12x8px, Desktop: 40x30px
          />
        </div>

        <div
          className="absolute select-none seamless-float-2 opacity-19"
          style={{
            left: "70%",
            top: "92%",
            animationDelay: "6.5s",
          }}
        >
          <Image
            src="/images/euro-symbol.png"
            alt="Euro Symbol"
            width={60}
            height={60}
            className="object-contain w-4 h-4 md:w-15 md:h-15" // Mobile: 16px, Desktop: 60px
          />
        </div>

        <div
          className="absolute select-none seamless-float-1 opacity-14"
          style={{
            left: "45%",
            top: "35%",
            animationDelay: "8s",
          }}
        >
          <Image
            src="/images/bitcoin-coin.png"
            alt="Bitcoin Symbol"
            width={104}
            height={104}
            className="object-contain w-6 h-6 md:w-26 md:h-26" // Mobile: 24px, Desktop: 104px
          />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-16"
          style={{
            left: "55%",
            top: "65%",
            animationDelay: "3s",
          }}
        >
          <Image
            src="/images/bar-chart.png"
            alt="Bar Chart"
            width={44}
            height={32}
            className="object-contain w-3 h-2 md:w-11 md:h-8" // Mobile: 12x8px, Desktop: 44x32px
          />
        </div>

        <div
          className="absolute select-none seamless-float-4 opacity-21"
          style={{
            left: "35%",
            top: "20%",
            animationDelay: "4s",
          }}
        >
          <Image
            src="/images/euro-symbol.png"
            alt="Euro Symbol"
            width={68}
            height={68}
            className="object-contain w-4 h-4 md:w-17 md:h-17" // Mobile: 16px, Desktop: 68px
          />
        </div>

        <div
          className="absolute select-none seamless-float-2 opacity-17"
          style={{
            left: "60%",
            top: "25%",
            animationDelay: "7.5s",
          }}
        >
          <Image
            src="/images/bar-chart.png"
            alt="Bar Chart"
            width={56}
            height={42}
            className="object-contain w-4 h-3 md:w-14 md:h-11" // Mobile: 16x12px, Desktop: 56x42px
          />
        </div>

        <div
          className="absolute select-none seamless-float-1 opacity-23"
          style={{
            left: "30%",
            top: "70%",
            animationDelay: "0.5s",
          }}
        >
          <Image
            src="/images/bitcoin-coin.png"
            alt="Bitcoin Symbol"
            width={84}
            height={84}
            className="object-contain w-5 h-5 md:w-21 md:h-21" // Mobile: 20px, Desktop: 84px
          />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-20"
          style={{
            left: "65%",
            top: "85%",
            animationDelay: "5s",
          }}
        >
          <Image
            src="/images/euro-symbol.png"
            alt="Euro Symbol"
            width={52}
            height={52}
            className="object-contain w-3 h-3 md:w-13 md:h-13" // Mobile: 12px, Desktop: 52px
          />
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen -mt-8 sm:-mt-10 md:-mt-16 lg:-mt-20">
        <div className="container mx-auto px-4 relative z-10">{/* Content here */}</div>
      </div>

      <div className="absolute bottom-0 md:bottom-0 left-0 right-0 z-20 pb-4 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:flex md:justify-center md:gap-6 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {/* NV Container */}
            <div className="nv-container relative group featured-container-pulse rounded-2xl md:w-[calc(25%-1.5rem)] w-full">
              <div className="absolute top-4 left-4 z-30 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/casino-top2.png"
                  alt="Top Casino"
                  width={60}
                  height={60}
                  className="object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 drop-shadow-[0_0_8px_rgba(255,188,31,0.6)]"
                />
              </div>

              <div className="relative bg-gradient-to-bl from-[#ffbc1f] via-[#e68f30] to-[#ffbc1f] backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:scale-[1.02] rounded-2xl h-[200px] sm:h-[220px] shadow-2xl hover:shadow-[#ffbc1f]/50 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-radial from-[#ffbc1f]/30 via-transparent to-[#e68f30]/20 animate-pulse duration-[3s] z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/rafonsponsors.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay z-10 rounded-2xl"></div>
                <div className="absolute inset-0 bg-[url('/images/istockphoto-1151135639-612x612.jpg')] bg-cover bg-center opacity-35 mix-blend-overlay z-15 scale-100 rounded-2xl"></div>

                <div className="relative z-20 p-3 sm:p-4 h-full flex flex-col featured-inner-content">
                  <div className="flex justify-center mb-3">
                    <Image
                      src="/images/nv-logo-new.png"
                      alt="NV Casino"
                      width={160}
                      height={48}
                      className="object-contain h-8 sm:h-10 w-auto filter brightness-0 invert drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] logo-pulse"
                    />
                  </div>

                  <div className="text-center mb-3">
                    <div
                      className="text-white font-black text-xs sm:text-sm px-2 py-1.5 rounded-lg shadow-lg drop-shadow-[0_0_10px_rgba(180,83,9,0.5)]"
                      style={{ backgroundColor: "#5c441a" }}
                    >
                      100% BONUS + 50FS
                    </div>
                  </div>

                  <div className="flex-1"></div>

                  <div className="text-center -mt-3 mb-0">
                    <div className="text-white text-xs font-medium mb-0.5">z kodem:</div>
                    <button
                      onClick={() => handleCopyCode("RFNX", "nv")}
                      className="inline-block bg-white text-gray-800 font-bold text-xs px-1.5 py-0.5 rounded border border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      {copiedCode === "nv" ? "Skopiowano" : "RFNX"}
                    </button>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://earlywires.com/23664/29327?lp=00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-3/4 mx-auto block text-yellow-400 font-bold py-1.5 px-3 rounded-lg text-xs hover:text-yellow-300 transition-all border-2 border-dashed border-yellow-400/60 shadow-lg hover:shadow-yellow-400/30 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]"
                      style={{ backgroundColor: "#5c441a" }}
                    >
                      ODBIERZ
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Spinbara Container */}
            <div className="spinbara-container relative group rounded-2xl overflow-hidden md:w-[calc(25%-1.5rem)] w-full">
              <div className="relative bg-gradient-to-tl from-[#ffbc1f] via-[#e68f30] to-[#ffbc1f] backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:scale-[1.02] rounded-2xl h-[200px] sm:h-[220px] shadow-2xl hover:shadow-[#ffbc1f]/50 border border-[#ffbc1f]/60">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e68f30]/30 via-transparent to-[#ffbc1f]/20 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/rafonsponsors.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay z-10 rounded-2xl"></div>

                <div className="relative z-20 p-3 sm:p-4 h-full flex flex-col">
                  <div className="flex justify-center mb-3">
                    <Image
                      src="/images/spinbara-logo.png"
                      alt="Spinbara"
                      width={160}
                      height={48}
                      className="object-contain h-8 sm:h-10 w-auto"
                    />
                  </div>

                  <div className="text-center mb-3">
                    <div
                      className="text-white font-black text-xs sm:text-sm px-2 py-1.5 rounded-lg shadow-lg drop-shadow-[0_0_10px_rgba(180,83,9,0.5)]"
                      style={{ backgroundColor: "#5c441a" }}
                    >
                      200% BONUS + 200FS
                    </div>
                  </div>

                  <div className="flex-1"></div>

                  <div className="text-center -mt-3 mb-0">
                    <div className="text-white text-xs font-medium mb-0.5">z kodem:</div>
                    <button
                      onClick={() => handleCopyCode("RAFONIX", "spinbara")}
                      className="inline-block bg-white text-gray-800 font-bold text-xs px-1.5 py-0.5 rounded border border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      {copiedCode === "spinbara" ? "Skopiowano" : "RAFONIX"}
                    </button>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://spnbr.monalvor.com/?mid=318509_1872904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-3/4 mx-auto block text-yellow-400 font-bold py-1.5 px-3 rounded-lg text-xs hover:text-yellow-300 transition-all border-2 border-dashed border-yellow-400/60 shadow-lg hover:shadow-yellow-400/30 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]"
                      style={{ backgroundColor: "#5c441a" }}
                    >
                      ODBIERZ
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MR PUNTER Container */}
            <div className="mrpunter-container relative group rounded-2xl overflow-hidden md:w-[calc(25%-1.5rem)] w-full">
              <div className="relative bg-gradient-to-tl from-[#ffbc1f] via-[#e68f30] to-[#ffbc1f] backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:scale-[1.02] rounded-2xl h-[200px] sm:h-[220px] shadow-2xl hover:shadow-[#ffbc1f]/50 border border-[#ffbc1f]/60">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e68f30]/30 via-transparent to-[#ffbc1f]/20 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/rafonsponsors.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay z-10 rounded-2xl"></div>

                <div className="relative z-20 p-3 sm:p-4 h-full flex flex-col">
                  <div className="flex justify-center mb-3">
                    <Image
                      src="/images/mr-punter-logo.png"
                      alt="MR PUNTER"
                      width={160}
                      height={48}
                      className="object-contain h-8 sm:h-10 w-auto"
                    />
                  </div>

                  <div className="text-center mb-3">
                    <div
                      className="text-white font-black text-xs sm:text-sm px-2 py-1.5 rounded-lg shadow-lg drop-shadow-[0_0_10px_rgba(180,83,9,0.5)]"
                      style={{ backgroundColor: "#5c441a" }}
                    >
                      100% BONUS + 200 FS
                    </div>
                  </div>

                  <div className="flex-1"></div>

                  <div className="text-center -mt-3 mb-0">
                    <div className="text-white text-xs font-medium mb-0.5">z kodem:</div>
                    <button
                      onClick={() => handleCopyCode("RAFONIX", "mrpunter")}
                      className="inline-block bg-white text-gray-800 font-bold text-xs px-1.5 py-0.5 rounded border border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      {copiedCode === "mrpunter" ? "Skopiowano" : "RAFONIX"}
                    </button>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://mrp.fynkelto.com/?mid=309237_1822741"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-3/4 mx-auto block text-yellow-400 font-bold py-1.5 px-3 rounded-lg text-xs hover:text-yellow-300 transition-all border-2 border-dashed border-yellow-400/60 shadow-lg hover:shadow-yellow-400/30 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]"
                      style={{ backgroundColor: "#5c441a" }}
                    >
                      ODBIERZ
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 md:bottom-0 left-0 right-0 h-8 md:h-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-30 pointer-events-none"></div>
    </section>
  )
}
