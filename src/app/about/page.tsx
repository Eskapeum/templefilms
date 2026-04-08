"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutPage() {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Hero image slow zoom on scroll
      gsap.to(".hero-img", {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Bio paragraphs fade up
      gsap.utils.toArray<HTMLElement>(".bio-para").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Credentials list stagger
      gsap.from(".cred-item", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cred-list",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Quote section reveal
      gsap.from(".quote-block", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".quote-block",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: mainRef }
  );

  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="min-h-screen film-grain flex flex-col relative">
        <Navbar />

        <main className="flex-1" ref={mainRef}>
          {/* Page Title Header */}
          <header className="pt-48 pb-24 px-6 md:px-12 text-center">
            <h1 className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] tracking-tighter text-[#F0EDE8] uppercase mb-6 animate-reveal">
              THE <span className="text-gold-gradient">STORY</span>
            </h1>
            <p
              className="font-mono text-xs md:text-sm tracking-[0.4em] text-[#D4912A] uppercase opacity-0 animate-reveal"
              style={{ animationDelay: "0.3s" }}
            >
              OLABODE LAWAL
            </p>
          </header>

          {/* Full Width Hero Still */}
          <section
            className="hero-section relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#111110] overflow-hidden opacity-0 animate-reveal"
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src="/images/Lee-Profile.jpg"
              className="hero-img w-full h-full object-cover grayscale brightness-75"
              style={{ objectPosition: "center 25%" }}
              alt="Olabode Lawal with cinema camera"
            />
            {/* Animated black & gold gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.5) 100%)",
              }}
            />
            <div
              className="hero-gradient-sweep absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(212,145,42,0.2) 15%, transparent 30%, transparent 45%, rgba(212,145,42,0.15) 55%, rgba(0,0,0,0.5) 70%, rgba(212,145,42,0.2) 85%, rgba(0,0,0,0.7) 100%)",
                backgroundSize: "100% 300%",
                backgroundRepeat: "no-repeat",
                animation: "gradientSweep 8s ease-in-out infinite",
              }}
            />
            <style>{`
              @keyframes gradientSweep {
                0% { background-position: 0% 0%; }
                50% { background-position: 0% 100%; }
                100% { background-position: 0% 0%; }
              }
            `}</style>
          </section>

          {/* Bio & Credentials Grid */}
          <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
              {/* Bio Paragraphs */}
              <div className="lg:col-span-7">
                <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4912A] uppercase mb-12">
                  BIO
                </p>
                <div className="flex flex-col gap-10">
                  <p className="bio-para font-body text-xl md:text-2xl text-[#878580] leading-relaxed font-light">
                    Growing up in the vibrant, high-contrast streets of Lagos,
                    Olabode Lawal developed an early fascination with how light
                    dictates mood and narrative. His journey from the bustling
                    Nigerian creative scene to the global stage was fueled by a
                    relentless drive to redefine the visual language of
                    contemporary cinema.
                  </p>
                  <p className="bio-para font-body text-xl md:text-2xl text-[#878580] leading-relaxed font-light">
                    As a cinematographer, he has collaborated with industry
                    titans including{" "}
                    <span className="text-[#F0EDE8] italic font-display">
                      Tiwa Savage,
                    </span>{" "}
                    and{" "}
                    <span className="text-[#F0EDE8] italic font-display">
                      2Face
                    </span>
                    , bringing a unique editorial flair to global music exports.
                    His work on the Netflix hit{" "}
                    <span className="text-[#F0EDE8] font-display uppercase tracking-wider">
                      King of Boys
                    </span>{" "}
                    solidified his reputation for high-stakes, moody, and deeply
                    atmospheric storytelling.
                  </p>
                  <p className="bio-para font-body text-xl md:text-2xl text-[#878580] leading-relaxed font-light">
                    Now a proud alumnus of the{" "}
                    <span className="text-[#F0EDE8]">
                      New York Film Academy (Class of 2024)
                    </span>
                    , Olabode operates out of Brooklyn, NY, bridging the gap
                    between raw street authenticity and polished, high-end
                    production value for international audiences.
                  </p>
                </div>
              </div>

              {/* Portrait + Credentials */}
              <div className="lg:col-span-5">
                <div className="aspect-square relative overflow-hidden rounded-sm mb-12">
                  <img
                    src="/images/Profile.png"
                    alt="Olabode Lawal portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4912A] uppercase mb-12">
                  CREDENTIALS
                </p>
                <ul className="cred-list flex flex-col gap-6">
                  <li className="cred-item font-mono text-sm md:text-base tracking-wide text-[#F0EDE8] uppercase">
                    NYFA ALUMNI CLASS 2024
                  </li>
                  <li className="cred-item font-mono text-sm md:text-base tracking-wide text-[#F0EDE8] uppercase">
                    KING OF BOYS — NETFLIX ORIGINAL
                  </li>
                  <li className="cred-item font-mono text-sm md:text-base tracking-wide text-[#F0EDE8] uppercase">
                    TIWA SAVAGE (WATER &amp; GARRI)
                  </li>
                  <li className="cred-item font-mono text-sm md:text-base tracking-wide text-[#F0EDE8] uppercase">
                    2FACE (THE REINVENTION)
                  </li>
                  <li className="cred-item font-mono text-sm md:text-base tracking-wide text-[#F0EDE8] uppercase">
                    BROOKLYN, NY BASED
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Philosophy Quote */}
          <section className="bg-[#050505] py-40 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 film-grain opacity-20 pointer-events-none"></div>
            <div className="quote-block max-w-4xl mx-auto text-center relative z-10">
              <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4912A] uppercase mb-16">
                MY APPROACH
              </p>
              <blockquote className="font-display text-2xl md:text-5xl italic font-bold leading-tight tracking-tight text-[#F0EDE8]">
                &ldquo;I am obsessed with the intricacies of suspense and mystery
                in storytelling&mdash;how what we leave in the shadows often says
                more than what we illuminate.&rdquo;
              </blockquote>
              <p className="font-mono text-xs tracking-widest text-[#4A4845] mt-12 uppercase italic">
                — OLABODE LAWAL
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-48 px-6 md:px-12 text-center">
            <h2 className="font-brutal text-4xl md:text-8xl mb-16 tracking-tighter leading-none uppercase">
              START A <br /> <span className="text-gold-gradient">CONVERSATION</span>
            </h2>
            <a
              href="/contact"
              className="btn-magnetic inline-block font-mono text-sm tracking-[0.4em] border border-[#1A1918] px-10 py-6 md:px-20 md:py-8 uppercase transition-all duration-500 rounded-full"
            >
              CONTACT ME
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
