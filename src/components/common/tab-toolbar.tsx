"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS_MOBILE } from "@/config/constants";

function TabToolbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center z-50 fixed bottom-0 w-full rounded-t-full border-t-2 border-t-content2 py-2 backdrop-blur-3xl backdrop-saturate-150 bg-black/50 md:hidden px-16">
      {NAV_ITEMS_MOBILE.map((item) => {
        const isActive =
          item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <div key={item.id} className="flex flex-col justify-center items-center">
            <Button
              as={Link}
              isIconOnly
              variant="light"
              color="default"
              href={item.href}
              aria-label={item.label}
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

export { TabToolbar };
