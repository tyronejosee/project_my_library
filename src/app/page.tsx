import { Dashboard } from "@/components/dashboard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Tyrone's Collection",
  description:
    "A place to store and organize a personal collection of movies and series. Keep track of favorites, discover new titles, and manage what you've watched.",
  keywords: "collection, movies, series",
  openGraph: {
    title: "Tyrone's Collection",
    description:
      "A place to store and organize a personal collection of movies and series. Keep track of favorites, discover new titles, and manage what you've watched.",
    url: "https://tyones-collection.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1727889010/Atlanta%20Ink%20API/atlanta-ink-seo.webp",
        width: 1280,
        height: 720,
        alt: "Tyrone's Collection Seo",
      },
    ],
    siteName: "Tyrone's Collection",
  },
};

export default function HomePage() {
  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Dashboard />
    </main>
  );
}
