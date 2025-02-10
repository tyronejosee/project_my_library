"use client";
import { Suspense } from "react";
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
import { NAV_ITEMS } from "../config/constants";
import SearchBar from "./SearchBar";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Toolbar() {
  const pathname = usePathname();

  return (
    <Navbar disableAnimation isBordered maxWidth="2xl">
      <NavbarContent justify="start">
        <Link color="foreground" href="/">
          <NavbarBrand>
            <AcmeLogo />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar />
        </Suspense>
      </NavbarContent>

      <NavbarContent
      justify="end"
      className="hidden sm:flex gap-4"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.id} className="font-medium">
              <Link href={item.href} className={isActive ? "text-primary" : ""}>
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
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar />
        </Suspense>
        {NAV_ITEMS.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.href} className={isActive ? "text-primary" : ""}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
