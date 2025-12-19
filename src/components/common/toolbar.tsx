"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Skeleton,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";

import { SearchBar } from "@/components/common";
import { Logo } from "@/components/icons";
import { NAV_ITEMS } from "@/config/constants";

export default function Toolbar() {
  // Hooks
  const pathname = usePathname();

  // States
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Functions
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const shouldBlur = isScrolled || isMenuOpen;
  const isHomePage = pathname === "/";

  return (
    <Navbar
      maxWidth="full"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered={isHomePage ? shouldBlur : true}
      isBlurred={shouldBlur}
      className={`fixed z-50 transition-colors duration-300 border-none ${shouldBlur ? "" : "bg-transparent blur-0"
        }`}
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
  );
}
