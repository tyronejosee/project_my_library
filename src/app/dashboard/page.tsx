import type { Metadata } from "next";

import { Dashboard } from "@/components/dashboard/dashboard";
import { PROJECT_DOMAIN, PROJECT_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Dashboard - ${PROJECT_NAME}`,
  description: `Página de Dashboard - ${PROJECT_NAME}.`,
  metadataBase: PROJECT_DOMAIN,
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
