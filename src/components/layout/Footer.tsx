"use client";

export default function Footer() {
  return (
    <footer className="py-24 px-6 md:px-12 border-t border-[#1A1918] bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-24">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold mb-6 italic text-[#F0EDE8]">
              TEMPLEFILMS
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#4A4845] leading-relaxed uppercase">
              BROOKLYN-BASED PRODUCTION STUDIO SPECIALIZING IN CINEMATIC
              STORYTELLING ACROSS ALL VISUAL MEDIUMS.
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4912A] mb-4 uppercase">
              SOCIAL
            </p>
            <a
              href="https://instagram.com/brothaleee"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.1em] text-[#878580] hover:text-white transition-colors uppercase"
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-mono text-xs tracking-[0.1em] text-[#878580] hover:text-white transition-colors uppercase"
            >
              Vimeo
            </a>
            <a
              href="#"
              className="font-mono text-xs tracking-[0.1em] text-[#878580] hover:text-white transition-colors uppercase"
            >
              LinkedIn
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4912A] mb-4 uppercase">
              CONTACT
            </p>
            <a
              href="mailto:hello@templefilms.com"
              className="font-mono text-xs tracking-[0.1em] text-[#878580] hover:text-white transition-colors uppercase"
            >
              hello@templefilms.com
            </a>
            <p className="font-mono text-xs tracking-[0.1em] text-[#878580] uppercase">
              (929) 662-9837
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#1A1918] pt-12 gap-6">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#4A4845]">
            &copy; {new Date().getFullYear()} TempleFilms Productions
          </p>
          <div className="flex gap-8">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#4A4845]">
              Terms
            </p>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#4A4845]">
              Privacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
