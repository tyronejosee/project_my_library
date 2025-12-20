"use client";

import { XIcon } from "lucide-react";
import { motion } from "motion/react";
import { useCallback } from "react";

import { useMorphingDialog } from "@/context/morphing-dialog-context";
import { cn } from "@/lib/utils";
import type { MorphingDialogVariants } from "@/types";

type MorphingDialogCloseProps = {
  children?: React.ReactNode;
  className?: string;
  variants?: MorphingDialogVariants;
};

export function MorphingDialogClose({ children, className, variants }: MorphingDialogCloseProps) {
  const { setIsOpen, uniqueId } = useMorphingDialog();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <motion.button
      onClick={handleClose}
      type="button"
      aria-label="Close dialog"
      key={`dialog-close-${uniqueId}`}
      className={cn("absolute top-4 right-4", className)}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children || <XIcon size={16} />}
    </motion.button>
  );
}
