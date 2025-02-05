import { Dashboard } from "@/components/Dashboard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlanta Ink - Tattoo Studio",
  description:
    "Welcome to Atlanta Ink, your premier tattoo studio. We specialize in custom tattoo designs, ensuring every piece is unique and tailored to your vision. Book your session today!",
  keywords:
    "atlanta ink, tattoo studio, custom tattoos, tattoo designs, tattoo artists, atlanta",
  openGraph: {
    title: "Atlanta Ink - Tattoo Studio",
    description:
      "Welcome to Atlanta Ink, your premier tattoo studio. We specialize in custom tattoo designs, ensuring every piece is unique and tailored to your vision. Book your session today!",
    url: "https://atlanta-ink-studio.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1727889010/Atlanta%20Ink%20API/atlanta-ink-seo.webp",
        width: 1280,
        height: 720,
        alt: "Atlanta Ink Seo",
      },
    ],
    siteName: "Atlanta Ink",
  },
};

export default function HomePage() {
  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Dashboard />
    </main>
  );
}
