"use client";

import Image from "next/image";
import { projects } from "@/lib/data";

// Triple the items (9 projects × 3 = 27 cards per row) for seamless -33.333% loop
const row1Items = [...projects, ...projects, ...projects];
const row2Items = [
  ...projects.slice().reverse(),
  ...projects.slice().reverse(),
  ...projects.slice().reverse(),
];

function MarqueeRow({
  items,
  direction,
  duration = 40,
}: {
  items: typeof projects;
  direction: "left" | "right";
  duration?: number;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-3 will-change-transform"
        style={{
          width: "max-content",
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {items.map((project, i) => (
          <div
            key={`${project.id}-${i}`}
            className="w-[500px] shrink-0 relative overflow-hidden rounded-2xl bg-[#111110] group cursor-pointer aspect-video"
          >
            {/* Project thumbnail */}
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />

            {/* Placeholder label when image not visible */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A4845]">
                {project.title.toUpperCase()}
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Info slides up from bottom on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#D4912A] mb-1">
                {project.role.toUpperCase()}
              </p>
              <p className="font-display text-lg font-bold text-[#F0EDE8]">
                {project.title.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MosaicMarquee() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1Items} direction="left" duration={35} />
        <MarqueeRow items={row2Items} direction="right" duration={40} />
      </div>
    </section>
  );
}
