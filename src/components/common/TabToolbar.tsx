"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, Film, Tv, MonitorPlay, PieChart, Search } from "lucide-react";

export const NAV_ITEMS_MOBILE = [
  { id: 1, href: "/", label: "Dashboard", icon: Home },
  { id: 2, href: "/search", label: "Search", icon: Search },
  { id: 3, href: "/movies", label: "Películas", icon: Film },
  { id: 4, href: "/series", label: "Series", icon: MonitorPlay },
  { id: 5, href: "/tv", label: "Televisión", icon: Tv },
  { id: 6, href: "/dashboard", label: "Dashboard", icon: PieChart },
];

export default function TabToolbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center z-50 fixed bottom-0 w-full rounded-t-full border-t border-t-neutral-700 py-2 backdrop-blur-xl backdrop-saturate-150 bg-black/50 md:hidden px-16">
      {NAV_ITEMS_MOBILE.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === item.href
            : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <Button
              aria-label={item.label}
              color="default"
              variant="light"
              as={Link}
              href={item.href}
              isIconOnly
              className={isActive ? "text-primary" : ""}
            >
              <Icon className="h-6 w-6" />
            </Button>
            {isActive && (
              <span className="bg-primary w-4 h-1 rounded-full absolute bottom-0"></span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
