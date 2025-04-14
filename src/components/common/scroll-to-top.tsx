"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function ScrollToTop({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}
