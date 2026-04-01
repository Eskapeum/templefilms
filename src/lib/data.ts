export type ProjectCategory =
  | "all"
  | "films"
  | "commercials"
  | "music-videos"
  | "short-films"
  | "docs"
  | "social-media";

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
];

export const projects: Project[] = [
  {
    id: "king-of-boys",
    title: "King of Boys",
    category: "films",
    role: "Cinematographer",
    thumbnail: "/images/FULL LENGTH FILM/FILM 1.jpg",
    year: "2018",
  },
  {
    id: "commercial-reel",
    title: "TV Commercial Reel",
    category: "commercials",
    role: "Cinematographer / Director",
    thumbnail: "/images/commercial/COMM 1.jpg",
    year: "2024",
  },
  {
    id: "wizkid-mv",
    title: "Wizkid Music Video",
    category: "music-videos",
    role: "DP / Lighting Director",
    thumbnail: "/images/MUSIC VIDEO/MSC VIDEO.jpg",
    year: "2023",
  },
  {
    id: "burna-boy-mv",
    title: "Burna Boy Music Video",
    category: "music-videos",
    role: "Cinematographer / Director",
    thumbnail: "/images/MUSIC VIDEO/MSCV 2.jpg",
    year: "2023",
  },
  {
    id: "tiwa-savage-mv",
    title: "Tiwa Savage Music Video",
    category: "music-videos",
    role: "DP / Director",
    thumbnail: "/images/MUSIC VIDEO/MSCV4.jpg",
    year: "2022",
  },
  {
    id: "doc-film-1",
    title: "Documentary Film",
    category: "docs",
    role: "Director / Cinematographer",
    thumbnail: "/images/DOCUMENTARY/DOC1.jpg",
    year: "2024",
  },
  {
    id: "short-film-1",
    title: "Short Film",
    category: "short-films",
    role: "Cinematographer",
    thumbnail: "/images/SHORTFILM/SHORT.jpg",
    year: "2023",
  },
  {
    id: "social-campaign-1",
    title: "Social Media Campaign",
    category: "social-media",
    role: "Director / DP",
    thumbnail: "/images/SOCIAL MEDIA MARKETING/SOCM.jpg",
    year: "2024",
  },
  {
    id: "tuface-mv",
    title: "2Face Music Video",
    category: "music-videos",
    role: "DP / Lighting Director",
    thumbnail: "/images/MUSIC VIDEO/MSCV5.jpg",
    year: "2021",
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
  "WIZKID",
  "BURNA BOY",
  "TIWA SAVAGE",
  "2FACE",
  "NEW YORK FILM ACADEMY",
  "BROOKLYN, NY",
];
