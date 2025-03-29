"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface Props {
  className?: string;
  text?: string;
}

export default function ScrollIndicator({
  className,
  text = "Desliza",
}: Props) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-40 z-10 left-1/2 -translate-x-1/2 flex justify-center flex-col items-center animate-pulse text-white",
        className
      )}
    >
      <span>{text}</span>
      <ChevronDown className="size-4" />
    </div>
  );
}
