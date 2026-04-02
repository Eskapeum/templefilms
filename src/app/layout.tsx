import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olabode Lawal | Cinematographer & Director — TempleFilms Productions",
  description:
    "Olabode Lawal is a cinematographer and director based in Brooklyn, New York. Crafting stunning motion pictures across music videos, films, documentaries & commercials.",
  keywords: [
    "cinematographer",
    "director",
    "Brooklyn",
    "New York",
    "music videos",
    "films",
    "documentaries",
    "commercials",
    "Olabode Lawal",
    "TempleFilms",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Olabode Lawal | Cinematographer & Director",
    description:
      "Crafting stunning motion pictures across music videos, films, documentaries & commercials.",
    type: "website",
    locale: "en_US",
    siteName: "TempleFilms Productions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="film-grain">{children}</body>
    </html>
  );
}
