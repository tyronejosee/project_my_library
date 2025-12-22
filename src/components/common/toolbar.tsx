"use client";

import { Button, Input, Kbd, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { SearchModal } from "@/components/common/search-modal";
import { Logo } from "@/components/icons/logo";
import { NAV_ITEMS } from "@/config/constants";
import { cn } from "@/lib/utils";

function Toolbar() {
  // Hooks
  const pathname = usePathname();

  // States
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const shouldBlur = isScrolled || isMenuOpen;
  const isHomePage = pathname === "/";

  return (
    <>
      <Navbar
        maxWidth="full"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isBordered={isHomePage ? shouldBlur : true}
        isBlurred={shouldBlur}
        className={`transition-colors duration-300 border-b border-content2 ${
          shouldBlur ? "" : "bg-transparent blur-0 border-none"
        }`}
      >
        <NavbarContent justify="start" className="hidden sm:flex gap-4">
          <Link color="foreground" href="/">
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </Link>
        </NavbarContent>
        <NavbarContent justify="center" className="sm:hidden">
          <Link color="foreground" href="/">
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </Link>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden sm:flex gap-4">
          <div onClick={() => setSearchOpen(true)} className="cursor-pointer">
            <Input
              readOnly
              type="text"
              size="sm"
              radius="sm"
              variant="bordered"
              placeholder="Buscar..."
              startContent={
                <Search size={16} className="text-white pointer-events-none shrink-0" />
              }
              endContent={<Kbd keys={["command"]}>K</Kbd>}
              classNames={{
                inputWrapper:
                  "border-content2 data-[hover=true]:border-content2 group-data-[focus=true]:border-content2 group-data-[focus=true]:data-[hover=true]:border-content2",
              }}
            />
          </div>
          <Button
            isIconOnly
            variant="ghost"
            className="sm:hidden"
            onPress={() => setSearchOpen(true)}
          >
            <Search className="w-5 h-5" />
          </Button>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.key}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-medium hover:underline underline-offset-3",
                    isActive && "text-primary font-semibold underline"
                  )}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end" className="sm:hidden">
          <Button isIconOnly variant="ghost" onPress={() => setSearchOpen(true)}>
            <Search className="w-5 h-5" />
          </Button>
        </NavbarContent>
      </Navbar>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export { Toolbar };
