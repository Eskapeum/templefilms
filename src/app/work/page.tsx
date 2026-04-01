"use client";

import { useState } from "react";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects, categories } from "@/lib/data";
import type { ProjectCategory } from "@/lib/data";

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[#D4912A]"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <div className="min-h-screen film-grain flex flex-col relative bg-[#080808]">
        <main className="flex-1 pt-[100px]">
          {/* Page Header */}
          <header className="py-24 md:py-40 px-6">
            <h1 className="font-display text-[12vw] md:text-[10vw] font-bold text-center leading-[0.9] tracking-tighter text-[#F0EDE8] uppercase">
              Body of <span className="text-gold-gradient">Work</span>
            </h1>
          </header>

          {/* Reel Sections */}
          <section className="flex flex-col gap-24 md:gap-40 px-6 md:px-12 pb-32">
            {/* Film/TV Reel */}
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <p className="font-mono text-xs tracking-[0.4em] text-[#D4912A] uppercase mb-4">
                    CINEMATOGRAPHER / DIRECTOR
                  </p>
                  <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#F0EDE8]">
                    FILM &amp; COMMERCIAL REEL
                  </h2>
                </div>
                <p className="font-mono text-xs tracking-[0.2em] text-[#4A4845] uppercase">
                  EST. 2024
                </p>
              </div>
              <div className="relative aspect-video group cursor-pointer overflow-hidden rounded-lg bg-[#111110]">
                <img
                  src="/images/FULL LENGTH FILM/FILM 5.jpg"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  alt="Film Reel"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D4912A] flex items-center justify-center bg-black/50 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(212,145,42,0.3)]">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Music Video Reel */}
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <p className="font-mono text-xs tracking-[0.4em] text-[#D4912A] uppercase mb-4">
                    DP / DIRECTOR / LIGHTING DIRECTOR
                  </p>
                  <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#F0EDE8]">
                    MUSIC VIDEO REEL
                  </h2>
                </div>
                <p className="font-mono text-xs tracking-[0.2em] text-[#4A4845] uppercase">
                  EST. 2023
                </p>
              </div>
              <div className="relative aspect-video group cursor-pointer overflow-hidden rounded-lg bg-[#111110]">
                <img
                  src="/images/MUSIC VIDEO/MSCV8.jpg"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  alt="Music Video Reel"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D4912A] flex items-center justify-center bg-black/50 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(212,145,42,0.3)]">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sticky Filter Bar */}
          <div className="sticky-filter border-y border-[#1A1918]">
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex justify-start md:justify-center items-center gap-8 md:gap-12 px-6 py-8 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`font-mono text-[10px] tracking-[0.3em] uppercase transition-colors ${
                      activeCategory === cat.value
                        ? "text-[#D4912A] border-b border-[#D4912A] pb-1"
                        : "text-[#878580] hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <section className="px-6 md:px-12 py-24">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <a
                  key={project.id}
                  href="#"
                  className="group relative aspect-[16/10] bg-[#111110] overflow-hidden rounded-lg"
                >
                  <img
                    src={project.thumbnail}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-mono text-[9px] tracking-[0.3em] text-[#D4912A] uppercase mb-2">
                      {project.role.toUpperCase()}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-[#F0EDE8] mb-1">
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="font-mono text-[10px] text-[#878580]">
                      {project.category
                        .replace(/-/g, " ")
                        .toUpperCase()}{" "}
                      / {project.year}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
