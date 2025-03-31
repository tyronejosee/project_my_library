import { Metadata } from "next";
import { Dashboard } from "@/components/dashboard";
import { PROJECT_NAME, SITE_URL } from "@/config/constants";

export const metadata: Metadata = {
  title: `Dashboard - ${PROJECT_NAME}`,
  description: `Página de Dashboard - ${PROJECT_NAME}.`,
  metadataBase: SITE_URL,
  keywords: ["dashboard", "collection"],
  robots: "index, follow",
  openGraph: {
    title: `Dashboard - ${PROJECT_NAME}`,
    description: `Página de Dashboard - ${PROJECT_NAME}.`,
    url: "/dashboard",
    siteName: PROJECT_NAME,
    type: "website",
  },
  twitter: {
    title: `Dashboard - ${PROJECT_NAME}`,
    card: "summary_large_image",
    description: `Página de Dashboard - ${PROJECT_NAME}.`,
  },
};

export default function DashboardPage() {
  return (
    <main className="max-w-screen-2xl mx-auto text-center py-6 px-6">
      <Dashboard />
    </main>
  );
}
