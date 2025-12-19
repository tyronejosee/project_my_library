"use client";

import { Button } from "@heroui/button";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

function BackToTop() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);
  const [showing, setShowing] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
        setShowing(true);
      } else {
        if (direction < 0) {
          setVisible(true);
          setShowing(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    if (showing) {
      const timer = setTimeout(() => {
        setVisible(false);
        setShowing(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showing]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 200,
        }}
        animate={{
          y: visible ? 0 : 200,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn("flex max-w-fit z-30 fixed bottom-16 md:bottom-4 inset-x-0 mx-auto")}
      >
        <Button
          size="sm"
          onPress={scrollToTop}
          aria-label="Back to top"
          className="bg-none backdrop-blur-xl backdrop-saturate-150 bg-black/50 border border-neutral-700"
        >
          <ChevronUp />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}

export { BackToTop };
