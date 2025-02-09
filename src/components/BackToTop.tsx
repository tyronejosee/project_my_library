"use client";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@heroui/button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const BackToTop = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [showing, setShowing] = useState(false);

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
        className={cn(
          "flex max-w-fit z-50 fixed bottom-4 inset-x-0 mx-auto",
        )}
      >
        <Button
          onClick={scrollToTop}
          className="bg-primary text-neutral-dark font-medium rounded-xl animate-bounce"
        >
          <ChevronUp />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
