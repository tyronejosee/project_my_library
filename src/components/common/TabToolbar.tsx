"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@heroui/react";
import { NAV_ITEMS_MOBILE } from "@/config/constants";

export default function TabToolbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center z-50 fixed bottom-0 w-full rounded-t-3xl border-t border-t-neutral-700 py-2 backdrop-blur-xl backdrop-saturate-150 bg-black/50 md:hidden">
      {NAV_ITEMS_MOBILE.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Button
            key={item.id}
            color="default"
            variant="light"
            className={isActive ? "text-primary border-b border-b-primary" : ""}
            as={Link}
            href={item.href}
          >
            {item.label}
          </Button>
        );
      })}
    </nav>
  );
}
