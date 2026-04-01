"use client";

import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
          <h1
            className="font-display text-white font-bold tracking-tighter leading-[0.85] flex flex-col"
            style={{ fontSize: "clamp(3rem, 15vw, 10rem)" }}
          >
            <span>LETS</span>
            <span className="text-[#D4912A]">CREATE</span>
          </h1>
        </section>

        {/* Info */}
        <section className="px-6 md:px-12 py-20 border-t border-[#1A1918]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            <div className="flex flex-col gap-8">
              <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4912A] uppercase">GET IN TOUCH</p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:hello@templefilmsproductions.com"
                  className="font-body text-xl md:text-3xl text-[#F0EDE8] hover:text-[#D4912A] transition-colors"
                >
                  hello@templefilmsproductions.com
                </a>
                <a
                  href="mailto:brothaleee@templefilmsproductions.com"
                  className="font-body text-xl md:text-3xl text-[#F0EDE8] hover:text-[#D4912A] transition-colors"
                >
                  brothaleee@templefilmsproductions.com
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4912A] uppercase">FOLLOW</p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://instagram.com/Brothaleee"
                  className="font-body text-xl md:text-3xl text-[#F0EDE8] hover:text-[#D4912A] transition-colors"
                >
                  @Brothaleee
                </a>
                <p className="font-body text-xl md:text-3xl text-[#878580]">Brooklyn, New York</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="px-6 md:px-12 py-20 bg-[#111110]">
          <div className="max-w-3xl mx-auto">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[0.2em] text-[#D4912A] uppercase">YOUR NAME</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-[#111110] border border-[#1A1918] p-5 font-mono text-sm text-[#F0EDE8] focus:border-[#D4912A] outline-none transition-colors rounded-none placeholder:text-[#4A4845]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[0.2em] text-[#D4912A] uppercase">EMAIL</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-[#111110] border border-[#1A1918] p-5 font-mono text-sm text-[#F0EDE8] focus:border-[#D4912A] outline-none transition-colors rounded-none placeholder:text-[#4A4845]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[0.2em] text-[#D4912A] uppercase">PROJECT TYPE</label>
                <select className="bg-[#111110] border border-[#1A1918] p-5 font-mono text-sm text-[#F0EDE8] focus:border-[#D4912A] outline-none transition-colors rounded-none cursor-pointer">
                  <option value="film">Film</option>
                  <option value="commercial">Commercial</option>
                  <option value="music-video">Music Video</option>
                  <option value="documentary">Documentary</option>
                  <option value="short-film">Short Film</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[0.2em] text-[#D4912A] uppercase">MESSAGE</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="bg-[#111110] border border-[#1A1918] p-5 font-mono text-sm text-[#F0EDE8] focus:border-[#D4912A] outline-none transition-colors rounded-none resize-none placeholder:text-[#4A4845]"
                />
              </div>
              <button
                type="submit"
                className="mt-4 py-6 border border-[#1A1918] font-mono text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-500 flex items-center justify-center gap-4 group"
              >
                START A PROJECT{" "}
                <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
              </button>
            </form>
            <p className="mt-16 text-center font-body text-[#878580] text-sm md:text-base">
              Ready to bring your vision to life?
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
