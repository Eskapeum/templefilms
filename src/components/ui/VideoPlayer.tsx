"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  videoUrl?: string;
  thumbnail: string;
  title?: string;
}

export default function VideoPlayer({ videoUrl, thumbnail, title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-bg-secondary rounded-sm overflow-hidden group cursor-pointer"
      onClick={() => videoUrl && setPlaying(true)}
    >
      {playing && videoUrl ? (
        <iframe
          src={videoUrl}
          title={title ?? "Video"}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <>
          <div className="absolute inset-0">
            <Image src={thumbnail} alt={title ?? "Video thumbnail"} fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-bg-primary/30 group-hover:bg-bg-primary/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-accent-gold flex items-center justify-center bg-bg-primary/60 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-accent-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {title && (
            <div className="absolute bottom-4 left-4">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">{title}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
