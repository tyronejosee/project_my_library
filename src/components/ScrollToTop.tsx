"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface Props {
    children: React.ReactNode
}

export default function ScrollToTop({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}
