"use client";

import type { Transition } from "motion/react";
import { MotionConfig } from "motion/react";

import { MorphingDialogProvider } from "@/context/morphing-dialog-context";

type MorphingDialogProps = {
  children: React.ReactNode;
  transition?: Transition;
};

export function MorphingDialog({ children, transition }: MorphingDialogProps) {
  return (
    <MorphingDialogProvider>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </MorphingDialogProvider>
  );
}
