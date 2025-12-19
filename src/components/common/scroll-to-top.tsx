"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type ScrollToTopProps = {
  children: React.ReactNode;
};

function ScrollToTop({ children }: ScrollToTopProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export { ScrollToTop };
