"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Skeleton,
} from "@heroui/react";
import { SearchBar } from "@/components/common";
import { Logo } from "@/components/icons";
import { NAV_ITEMS } from "@/config/constants";

export default function Toolbar() {
  const pathname = usePathname();

  return (
    <>
      <Navbar
        disableAnimation
        isBordered
        maxWidth="2xl"
        className="invisible md:visible"
      >
        <NavbarContent justify="start">
          <Link color="foreground" href="/">
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </Link>
        </NavbarContent>

        <NavbarContent justify="center">
          <Suspense
            fallback={<Skeleton className="h-10 w-[720px] rounded-xl" />}
          >
            <SearchBar />
          </Suspense>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden sm:flex gap-4">
          <Dropdown>
            <DropdownTrigger>
              <Button
                color="primary"
                className="text-medium text-neutral-950"
                aria-label="Collection"
              >
                Collection
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Navigation menu">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <DropdownItem
                    as={Link}
                    key={item.key}
                    href={item.href}
                    className={isActive ? "text-primary" : ""}
                  >
                    {item.label}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div className="fixed top-4 z-50 w-full px-4 shadow-2xl md:hidden">
        <Suspense fallback={<Skeleton className="h-10 w-full rounded-xl" />}>
          <SearchBar />
        </Suspense>
      </div>
      <div className="fixed top-0 z-20 bg-gradient-to-b from-neutral-950/80 to-neutral-950/0 h-20 w-full"></div>
    </>
  );
}
