"use client";

import Link from "next/link";
import { NAV_ITEMS, PROJECT_NAME } from "../config/constants";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
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
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar disableAnimation isBordered maxWidth="2xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent justify="start">
        <Link color="foreground" href="/">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">{PROJECT_NAME}</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <SearchBar />
      </NavbarContent>

      <NavbarContent justify="end">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.id}>
              <Link
                href={item.href}
                className={
                  isActive ? "font-bold text-primary" : "hover:font-bold"
                }
              >
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Random
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
