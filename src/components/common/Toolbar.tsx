"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { SearchBar } from "@/components/common";
import { Logo } from "@/components/icons";
import { NAV_ITEMS } from "@/config/constants";
import { Suspense } from "react";

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
          <Suspense fallback={<div>Cargando...</div>}>
            <SearchBar />
          </Suspense>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex gap-4">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.id} className="font-medium">
                <Link
                  href={item.href}
                  className={isActive ? "text-primary" : ""}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <Suspense fallback={<div>Cargando...</div>}>
            <SearchBar />
          </Suspense>
          {NAV_ITEMS.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  href={item.href}
                  className={isActive ? "text-primary" : ""}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </Navbar>
      <div className="fixed top-4 z-50 w-full px-4 shadow-2xl md:hidden">
        <Suspense fallback={<div>Cargando...</div>}>
          <SearchBar />
        </Suspense>
      </div>
      <div className="fixed top-0 z-20 bg-gradient-to-b from-neutral-950/80 to-neutral-950/0 h-20 w-full"></div>
    </>
  );
}
