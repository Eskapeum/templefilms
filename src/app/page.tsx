"use client";

import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>

        {/* ── Hero Section ── */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[#050505]">
            <video
              src="/videos/TEMPLEFILMS MONTAGE_n.MOV"
              className="w-full h-full object-cover opacity-40 animate-grayscale-color"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>

          <div className="relative z-10 w-full text-center py-12">
            <p className="font-brutal text-xs md:text-sm tracking-[0.4em] uppercase text-gold-gradient mb-8 font-black">
              TEMPLEFILMS PRODUCTIONS
            </p>
            <div className="overflow-hidden w-full pointer-events-none select-none">
              <div className="flex whitespace-nowrap hero-marquee-active">
                <span className="font-display hero-title font-bold text-white animate-text-morph pr-32" style={{ fontSize: "20vw", lineHeight: "0.85", letterSpacing: "-0.02em" }}>OLABODE LAWAL</span>
                <span className="font-display hero-title font-bold text-white animate-text-morph pr-32" style={{ fontSize: "20vw", lineHeight: "0.85", letterSpacing: "-0.02em" }}>OLABODE LAWAL</span>
                <span className="font-display hero-title font-bold text-white animate-text-morph pr-32" style={{ fontSize: "20vw", lineHeight: "0.85", letterSpacing: "-0.02em" }}>OLABODE LAWAL</span>
                <span className="font-display hero-title font-bold text-white animate-text-morph pr-32" style={{ fontSize: "20vw", lineHeight: "0.85", letterSpacing: "-0.02em" }}>OLABODE LAWAL</span>
                <span className="font-display hero-title font-bold text-white animate-text-morph pr-32" style={{ fontSize: "20vw", lineHeight: "0.85", letterSpacing: "-0.02em" }}>OLABODE LAWAL</span>
                <span className="font-display hero-title font-bold text-white animate-text-morph pr-32" style={{ fontSize: "20vw", lineHeight: "0.85", letterSpacing: "-0.02em" }}>OLABODE LAWAL</span>
                <span className="font-display hero-title font-bold text-white animate-text-morph pr-32" style={{ fontSize: "20vw", lineHeight: "0.85", letterSpacing: "-0.02em" }}>OLABODE LAWAL</span>
                <span className="font-display hero-title font-bold text-white animate-text-morph pr-32" style={{ fontSize: "20vw", lineHeight: "0.85", letterSpacing: "-0.02em" }}>OLABODE LAWAL</span>
              </div>
            </div>
            <p className="font-brutal text-xs md:text-sm tracking-[0.2em] uppercase text-[#878580] mt-8 font-black">
              CINEMATOGRAPHER / DIRECTOR
            </p>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#D4912A]">
            {/* Chevron down arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </section>

        {/* ── Intro Section ── */}
        <section className="section-gap px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="w-24 h-[1px] bg-[#D4912A] mb-16"></div>
            <p className="font-body text-xl md:text-2xl lg:text-5xl font-light leading-[1.15] text-[#F0EDE8] tracking-tight">
              A cinematographer based in{" "}
              <span className="italic font-display">Brooklyn, New York</span> — crafting stunning motion pictures across music videos, films, documentaries &amp; commercials.
            </p>
          </div>
        </section>

        {/* ── Mosaic Marquee (Full Bleed) ── */}
        <section className="pb-32 overflow-hidden p-0 px-0">
          <div className="flex flex-col gap-3">

            {/* Row 1: Left (35s) */}
            <div className="overflow-hidden">
              <div className="flex gap-3 marquee-left w-max">
                {/* Set 1 */}
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/FULL LENGTH FILM/FILM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="King of Boys" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">KING OF BOYS</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/commercial/COMM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="TV Commercial Reel" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TV COMMERCIAL REEL</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV6.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video V" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO V</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV7.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video VI" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO VI</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV4.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Tiwa Savage Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DP / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TIWA SAVAGE MUSIC VIDEO</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/DOCUMENTARY/DOC1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Documentary Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">DOCUMENTARY FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SHORTFILM/SHORT.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Short Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SHORT FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SOCIAL MEDIA MARKETING/SOCM.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Social Media Campaign" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SOCIAL MEDIA CAMPAIGN</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV5.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="2Face Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">2FACE MUSIC VIDEO</p></div>
                </div>
                {/* Duplicate 1 */}
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/FULL LENGTH FILM/FILM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="King of Boys" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">KING OF BOYS</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/commercial/COMM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="TV Commercial Reel" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TV COMMERCIAL REEL</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV6.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video V" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO V</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV7.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video VI" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO VI</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV4.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Tiwa Savage Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DP / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TIWA SAVAGE MUSIC VIDEO</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/DOCUMENTARY/DOC1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Documentary Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">DOCUMENTARY FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SHORTFILM/SHORT.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Short Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SHORT FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SOCIAL MEDIA MARKETING/SOCM.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Social Media Campaign" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SOCIAL MEDIA CAMPAIGN</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV5.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="2Face Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">2FACE MUSIC VIDEO</p></div>
                </div>
                {/* Duplicate 2 */}
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/FULL LENGTH FILM/FILM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="King of Boys" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">KING OF BOYS</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/commercial/COMM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="TV Commercial Reel" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TV COMMERCIAL REEL</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV6.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video V" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO V</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV7.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video VI" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO VI</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV4.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Tiwa Savage Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DP / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TIWA SAVAGE MUSIC VIDEO</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/DOCUMENTARY/DOC1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Documentary Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">DOCUMENTARY FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SHORTFILM/SHORT.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Short Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SHORT FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SOCIAL MEDIA MARKETING/SOCM.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Social Media Campaign" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SOCIAL MEDIA CAMPAIGN</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV5.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="2Face Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">2FACE MUSIC VIDEO</p></div>
                </div>
              </div>
            </div>

            {/* Row 2: Right (40s) */}
            <div className="overflow-hidden">
              <div className="flex gap-3 marquee-right w-max">
                {/* Set 1 (Reverse) */}
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV5.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="2Face Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">2FACE MUSIC VIDEO</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SOCIAL MEDIA MARKETING/SOCM.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Social Media Campaign" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SOCIAL MEDIA CAMPAIGN</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SHORTFILM/SHORT.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Short Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SHORT FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/DOCUMENTARY/DOC1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Documentary Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">DOCUMENTARY FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV4.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Tiwa Savage Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DP / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TIWA SAVAGE MUSIC VIDEO</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV7.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video VI" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO VI</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV6.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video V" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO V</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/commercial/COMM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="TV Commercial Reel" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TV COMMERCIAL REEL</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/FULL LENGTH FILM/FILM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="King of Boys" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">KING OF BOYS</p></div>
                </div>
                {/* Duplicate 1 */}
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV5.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="2Face Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">2FACE MUSIC VIDEO</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SOCIAL MEDIA MARKETING/SOCM.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Social Media Campaign" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SOCIAL MEDIA CAMPAIGN</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SHORTFILM/SHORT.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Short Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SHORT FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/DOCUMENTARY/DOC1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Documentary Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">DOCUMENTARY FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV4.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Tiwa Savage Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DP / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TIWA SAVAGE MUSIC VIDEO</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV7.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video VI" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO VI</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV6.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video V" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO V</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/commercial/COMM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="TV Commercial Reel" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TV COMMERCIAL REEL</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/FULL LENGTH FILM/FILM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="King of Boys" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">KING OF BOYS</p></div>
                </div>
                {/* Duplicate 2 */}
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV5.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="2Face Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">2FACE MUSIC VIDEO</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SOCIAL MEDIA MARKETING/SOCM.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Social Media Campaign" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SOCIAL MEDIA CAMPAIGN</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/SHORTFILM/SHORT.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Short Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">SHORT FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/DOCUMENTARY/DOC1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Documentary Film" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DIRECTOR / CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">DOCUMENTARY FILM</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV4.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Tiwa Savage Music Video" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">DP / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TIWA SAVAGE MUSIC VIDEO</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV7.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video VI" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO VI</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/MUSIC VIDEO/MSCV6.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Music Video V" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">MUSIC VIDEO V</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/commercial/COMM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="TV Commercial Reel" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER / DIRECTOR</p><p className="font-display text-lg font-bold text-[#F0EDE8]">TV COMMERCIAL REEL</p></div>
                </div>
                <div className="w-[300px] md:w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video">
                  <img src="/images/FULL LENGTH FILM/FILM 1.jpg" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="King of Boys" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"><p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">CINEMATOGRAPHER</p><p className="font-display text-lg font-bold text-[#F0EDE8]">KING OF BOYS</p></div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Credentials Ticker ── */}
        <section className="bg-[#D4912A] py-6 overflow-hidden flex whitespace-nowrap">
          <div className="flex ticker-animation">
            <p className="font-mono text-xs md:text-sm font-bold text-black tracking-[0.5em] px-12">
              NYFA ALUMNI • KING OF BOYS (NETFLIX) • TIWA SAVAGE • 2FACE • NEW YORK FILM ACADEMY • BROOKLYN, NY •
            </p>
            <p className="font-mono text-xs md:text-sm font-bold text-black tracking-[0.5em] px-12">
              NYFA ALUMNI • KING OF BOYS (NETFLIX) • TIWA SAVAGE • 2FACE • NEW YORK FILM ACADEMY • BROOKLYN, NY •
            </p>
            <p className="font-mono text-xs md:text-sm font-bold text-black tracking-[0.5em] px-12">
              NYFA ALUMNI • KING OF BOYS (NETFLIX) • TIWA SAVAGE • 2FACE • NEW YORK FILM ACADEMY • BROOKLYN, NY •
            </p>
          </div>
        </section>

        {/* ── Selected Filmography (3 stacked 21:9 cards) ── */}
        <section className="px-6 md:px-12 py-32 border-t border-[#1A1918]">
          <h2 className="font-display text-xs tracking-[0.6em] text-center mb-24 text-[#D4912A] uppercase">SELECTED FILMOGRAPHY</h2>

          <div className="flex flex-col gap-16">
            {/* Project 1 */}
            <Link href="/work" className="group block w-full">
              <div className="aspect-21-9 relative overflow-hidden bg-[#111110]">
                <img src="/images/FULL LENGTH FILM/FILM 1.jpg" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt="King of Boys" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
                  <h3 className="font-display text-2xl md:text-4xl lg:text-7xl font-bold tracking-tighter">KING OF BOYS</h3>
                  <div className="text-right">
                    <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-[#D4912A] uppercase mb-1">CINEMATOGRAPHER</p>
                    <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/50 uppercase">FEATURE FILM / 2018</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 2 */}
            <Link href="/work" className="group block w-full">
              <div className="aspect-21-9 relative overflow-hidden bg-[#111110]">
                <img src="/images/MUSIC VIDEO/MSCV6.jpg" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt="TV Commercial Reel" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
                  <h3 className="font-display text-2xl md:text-4xl lg:text-7xl font-bold tracking-tighter">TV COMMERCIAL REEL</h3>
                  <div className="text-right">
                    <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-[#D4912A] uppercase mb-1">CINEMATOGRAPHER / DIRECTOR</p>
                    <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/50 uppercase">COMMERCIAL / 2024</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 3 */}
            <Link href="/work" className="group block w-full">
              <div className="aspect-21-9 relative overflow-hidden bg-[#111110]">
                <img src="/images/MUSIC VIDEO/MSCV7.jpg" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt="Documentary Film" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
                  <h3 className="font-display text-2xl md:text-4xl lg:text-7xl font-bold tracking-tighter">DOCUMENTARY FILM</h3>
                  <div className="text-right">
                    <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-[#D4912A] uppercase mb-1">DIRECTOR / CINEMATOGRAPHER</p>
                    <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/50 uppercase">DOCUMENTARY / 2024</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── Full Width Showreel ── */}
        <section className="relative h-[80vh] w-full bg-[#111110] group cursor-pointer">
          <img src="/images/FULL LENGTH FILM/FILM 3.jpg" className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-1000" alt="Showreel main" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-[#D4912A] flex items-center justify-center bg-black/50 group-hover:scale-110 transition-transform mb-6">
              {/* Play icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="text-[#D4912A] w-8 h-8 ml-1">
                <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"/>
              </svg>
            </div>
            <h2 className="font-brutal text-xl md:text-3xl tracking-[0.4em] uppercase text-white">PLAY SHOWREEL</h2>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#878580] mt-4 uppercase">CINEMATOGRAPHY REEL 2024</p>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="section-gap px-4 md:px-12 flex flex-col items-center justify-center text-center">
          <p className="font-mono text-xs tracking-[0.4em] text-[#D4912A] mb-8 uppercase">READY TO BEGIN?</p>
          <h2 className="font-brutal text-4xl md:text-8xl mb-16 tracking-tighter leading-none">
            LET&apos;S CREATE <br /> <span className="text-gold-gradient">SOMETHING</span>
          </h2>
          <Link
            href="/contact"
            className="btn-glow font-mono text-sm tracking-[0.3em] border border-[#1A1918] px-8 py-4 md:px-16 md:py-6 uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-full"
          >
            INQUIRIES
          </Link>
        </section>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
