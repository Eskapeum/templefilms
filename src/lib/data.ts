export type ProjectCategory =
  | "all"
  | "films"
  | "commercials"
  | "music-videos"
  | "short-films"
  | "docs"
  | "social-media"
  | "product-marketing";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  role: string;
  thumbnail: string;
  videoPreview?: string;
  videoUrl?: string;
  year?: string;
}

export const categories: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Films", value: "films" },
  { label: "Commercials", value: "commercials" },
  { label: "Music Videos", value: "music-videos" },
  { label: "Short Films", value: "short-films" },
  { label: "Docs", value: "docs" },
  { label: "Social Media", value: "social-media" },
  { label: "Product Marketing", value: "product-marketing" },
];

export const projects: Project[] = [
  // ── FILMS ──
  {
    id: "king-of-boys",
    title: "King of Boys",
    category: "films",
    role: "Cinematographer",
    thumbnail: "/images/FULL LENGTH FILM/FILM 1.jpg",
    year: "2018",
  },
  {
    id: "film-2",
    title: "Feature Film II",
    category: "films",
    role: "Cinematographer",
    thumbnail: "/images/FULL LENGTH FILM/FILM 3.jpg",
    year: "2019",
  },
  {
    id: "film-3",
    title: "Feature Film III",
    category: "films",
    role: "DP / Director",
    thumbnail: "/images/FULL LENGTH FILM/FILM 4.jpg",
    year: "2020",
  },
  {
    id: "film-4",
    title: "Feature Film IV",
    category: "films",
    role: "Cinematographer",
    thumbnail: "/images/FULL LENGTH FILM/FILM 5.jpg",
    year: "2021",
  },
  {
    id: "film-5",
    title: "Feature Film V",
    category: "films",
    role: "DP / Lighting Director",
    thumbnail: "/images/FULL LENGTH FILM/FILM 6.jpg",
    year: "2022",
  },
  {
    id: "film-6",
    title: "Feature Film VI",
    category: "films",
    role: "Cinematographer",
    thumbnail: "/images/FULL LENGTH FILM/FILM 7.jpg",
    year: "2023",
  },
  {
    id: "film-7",
    title: "Feature Film VII",
    category: "films",
    role: "Director / DP",
    thumbnail: "/images/FULL LENGTH FILM/FILM 8.jpg",
    year: "2023",
  },
  {
    id: "film-8",
    title: "Feature Film VIII",
    category: "films",
    role: "Cinematographer",
    thumbnail: "/images/FULL LENGTH FILM/FILM 9.jpg",
    year: "2024",
  },

  // ── COMMERCIALS ──
  {
    id: "comm-1",
    title: "TV Commercial I",
    category: "commercials",
    role: "Cinematographer / Director",
    thumbnail: "/images/commercial/COMM 1.jpg",
    year: "2022",
  },
  {
    id: "comm-2",
    title: "TV Commercial II",
    category: "commercials",
    role: "DP / Director",
    thumbnail: "/images/commercial/COMM2.jpg",
    year: "2023",
  },
  {
    id: "comm-3",
    title: "TV Commercial III",
    category: "commercials",
    role: "Cinematographer",
    thumbnail: "/images/commercial/COMM3.png",
    year: "2023",
  },
  {
    id: "comm-4",
    title: "TV Commercial IV",
    category: "commercials",
    role: "Director / DP",
    thumbnail: "/images/commercial/COMM4.png",
    year: "2024",
  },
  {
    id: "comm-5",
    title: "TV Commercial V",
    category: "commercials",
    role: "Cinematographer",
    thumbnail: "/images/commercial/COMM5.png",
    year: "2024",
  },
  {
    id: "comm-6",
    title: "TV Commercial VI",
    category: "commercials",
    role: "DP / Director",
    thumbnail: "/images/commercial/COMM6.jpg",
    year: "2024",
  },

  // ── MUSIC VIDEOS ──
  {
    id: "mv-3",
    title: "Tiwa Savage Music Video",
    category: "music-videos",
    role: "DP / Director",
    thumbnail: "/images/MUSIC VIDEO/MSCV 2.jpg",
    year: "2022",
  },
  {
    id: "mv-4",
    title: "2Face Music Video",
    category: "music-videos",
    role: "DP / Lighting Director",
    thumbnail: "/images/MUSIC VIDEO/MSCV3.jpg",
    year: "2021",
  },
  {
    id: "mv-5",
    title: "Music Video V",
    category: "music-videos",
    role: "Cinematographer",
    thumbnail: "/images/MUSIC VIDEO/MSCV4.jpg",
    year: "2022",
  },
  {
    id: "mv-6",
    title: "Music Video VI",
    category: "music-videos",
    role: "Director / DP",
    thumbnail: "/images/MUSIC VIDEO/MSCV5.jpg",
    year: "2023",
  },
  {
    id: "mv-7",
    title: "Music Video VII",
    category: "music-videos",
    role: "DP / Lighting Director",
    thumbnail: "/images/MUSIC VIDEO/MSCV6.jpg",
    year: "2023",
  },
  {
    id: "mv-8",
    title: "Music Video VIII",
    category: "music-videos",
    role: "Cinematographer / Director",
    thumbnail: "/images/MUSIC VIDEO/MSCV7.jpg",
    year: "2023",
  },
  {
    id: "mv-9",
    title: "Music Video IX",
    category: "music-videos",
    role: "DP / Director",
    thumbnail: "/images/MUSIC VIDEO/MSCV8.jpg",
    year: "2023",
  },
  {
    id: "mv-10",
    title: "Music Video X",
    category: "music-videos",
    role: "Cinematographer",
    thumbnail: "/images/MUSIC VIDEO/MSCV9.jpg",
    year: "2024",
  },
  {
    id: "mv-11",
    title: "Music Video XI",
    category: "music-videos",
    role: "DP / Lighting Director",
    thumbnail: "/images/MUSIC VIDEO/MSCV10.jpg",
    year: "2024",
  },
  {
    id: "mv-12",
    title: "Music Video XII",
    category: "music-videos",
    role: "Director / DP",
    thumbnail: "/images/MUSIC VIDEO/MSCV11.jpg",
    year: "2024",
  },
  {
    id: "mv-13",
    title: "Music Video XIII",
    category: "music-videos",
    role: "Cinematographer",
    thumbnail: "/images/MUSIC VIDEO/MSCV12.jpg",
    year: "2024",
  },

  // ── SHORT FILMS ──
  {
    id: "short-1",
    title: "Short Film I",
    category: "short-films",
    role: "Cinematographer",
    thumbnail: "/images/SHORTFILM/SHORT.jpg",
    year: "2022",
  },
  {
    id: "short-2",
    title: "Short Film II",
    category: "short-films",
    role: "Director / DP",
    thumbnail: "/images/SHORTFILM/SHRT 2.jpg",
    year: "2023",
  },
  {
    id: "short-3",
    title: "Short Film III",
    category: "short-films",
    role: "Cinematographer",
    thumbnail: "/images/SHORTFILM/SHORT 5.jpg",
    year: "2024",
  },

  // ── DOCUMENTARIES ──
  {
    id: "doc-1",
    title: "Documentary I",
    category: "docs",
    role: "Director / Cinematographer",
    thumbnail: "/images/DOCUMENTARY/DOC1.jpg",
    year: "2023",
  },
  {
    id: "doc-2",
    title: "Documentary II",
    category: "docs",
    role: "Cinematographer",
    thumbnail: "/images/DOCUMENTARY/DOC2.png",
    year: "2023",
  },
  {
    id: "doc-3",
    title: "Documentary III",
    category: "docs",
    role: "DP / Director",
    thumbnail: "/images/DOCUMENTARY/DOC3.png",
    year: "2024",
  },
  {
    id: "doc-4",
    title: "Documentary IV",
    category: "docs",
    role: "Director / Cinematographer",
    thumbnail: "/images/DOCUMENTARY/DOC 4.jpg",
    year: "2024",
  },
  {
    id: "doc-5",
    title: "Documentary V",
    category: "docs",
    role: "Cinematographer",
    thumbnail: "/images/DOCUMENTARY/DOC5.png",
    year: "2024",
  },

  // ── SOCIAL MEDIA ──
  {
    id: "social-1",
    title: "Promo Campaign",
    category: "social-media",
    role: "Director / DP",
    thumbnail: "/images/SOCIAL MEDIA MARKETING/PROMO ADS.jpg",
    year: "2023",
  },
  {
    id: "social-2",
    title: "Social Campaign I",
    category: "social-media",
    role: "Cinematographer",
    thumbnail: "/images/SOCIAL MEDIA MARKETING/SOCM.jpg",
    year: "2023",
  },
  {
    id: "social-3",
    title: "Social Campaign II",
    category: "social-media",
    role: "Director / DP",
    thumbnail: "/images/SOCIAL MEDIA MARKETING/Screenshot 2026-01-25 at 5.04.25 PM.png",
    year: "2024",
  },
  {
    id: "social-4",
    title: "Social Campaign III",
    category: "social-media",
    role: "Cinematographer",
    thumbnail: "/images/SOCIAL MEDIA MARKETING/Screenshot 2026-01-25 at 5.11.16 PM.png",
    year: "2024",
  },
  {
    id: "social-5",
    title: "Social Campaign IV",
    category: "social-media",
    role: "DP / Director",
    thumbnail: "/images/SOCIAL MEDIA MARKETING/Screenshot 2026-01-25 at 5.28.05 PM.png",
    year: "2024",
  },
  {
    id: "social-6",
    title: "Social Campaign V",
    category: "social-media",
    role: "Director / Cinematographer",
    thumbnail: "/images/SOCIAL MEDIA MARKETING/Screenshot 2026-01-25 at 5.28.25 PM.png",
    year: "2024",
  },
  {
    id: "social-7",
    title: "Social Campaign VI",
    category: "social-media",
    role: "Cinematographer",
    thumbnail: "/images/SOCIAL MEDIA MARKETING/Screenshot 2026-01-25 at 5.32.28 PM.png",
    year: "2024",
  },
  // ── PRODUCT MARKETING ──
  {
    id: "product-1",
    title: "Product Campaign I",
    category: "product-marketing",
    role: "Director / DP",
    thumbnail: "/images/PRODUCT MARKETING/PRODUCT.jpg",
    year: "2023",
  },
  {
    id: "product-2",
    title: "Product Campaign II",
    category: "product-marketing",
    role: "Cinematographer",
    thumbnail: "/images/PRODUCT MARKETING/PRODUCT 2.jpg",
    year: "2024",
  },
  {
    id: "product-3",
    title: "Product Campaign III",
    category: "product-marketing",
    role: "Director / DP",
    thumbnail: "/images/PRODUCT MARKETING/PRODUCT 4.jpg",
    year: "2024",
  },
];

export const reels = [
  {
    id: "film-tv-reel",
    title: "FILM/TV COMMERCIAL REEL",
    role: "CINEMATOGRAPHER / DIRECTOR",
    videoUrl: "",
    thumbnail: "/images/FULL LENGTH FILM/FILM 5.jpg",
  },
  {
    id: "music-video-reel",
    title: "MUSIC VIDEO REEL",
    role: "DP / DIRECTOR / LIGHTING DIRECTOR",
    videoUrl: "",
    thumbnail: "/images/MUSIC VIDEO/MSCV8.jpg",
  },
];

export const credentials = [
  "NYFA ALUMNI",
  "KING OF BOYS (NETFLIX)",
  "TIWA SAVAGE",
  "2FACE",
  "NEW YORK FILM ACADEMY",
  "BROOKLYN, NY",
];
