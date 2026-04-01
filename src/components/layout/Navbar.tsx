"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ mixBlendMode: "difference" }}
        className="fixed top-0 left-0 right-0 z-[60] h-[100px] px-6 md:px-12 flex items-center justify-between bg-transparent"
      >
        <Link
          href="/"
          className="font-display text-xl md:text-2xl font-bold text-white tracking-tight italic"
        >
          TEMPLEFILMS
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-mono text-sm tracking-[0.3em] text-white cursor-pointer hover:opacity-70 transition-opacity uppercase"
          aria-label="Toggle menu"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </motion.nav>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[55] bg-bg-primary flex flex-col items-center justify-center"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 50%, rgba(212,145,42,0.03) 0%, transparent 70%)",
            }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-brutal text-4xl md:text-7xl font-black uppercase transition-colors ${
                      pathname === link.href
                        ? "text-accent-gold"
                        : "text-text-primary hover:text-accent-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 flex flex-col items-center gap-2"
            >
              <a
                href="https://instagram.com/brothaleee"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-[0.2em] text-text-secondary hover:text-text-primary transition-colors uppercase"
              >
                @Brothaleee
              </a>
              <p className="font-mono text-xs tracking-[0.2em] text-text-tertiary uppercase">
                Brooklyn, NY
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
