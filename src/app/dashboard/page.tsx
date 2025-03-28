import { Metadata } from "next";
import { Dashboard } from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Dashboard - Tyrone's Collection",
  description:
    "A place to store and organize a personal collection of movies and series. Keep track of favorites, discover new titles, and manage what you've watched.",
};

export default function DashboardPage() {
  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Dashboard />
    </main>
  );
}
