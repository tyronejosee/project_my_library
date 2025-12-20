"use client";

import { motion } from "motion/react";

import { useMorphingDialog } from "@/context/morphing-dialog-context";
import { cn } from "@/lib/utils";
import type { SVGProps } from "@/types";

type MorphingDialogImageProps = {
  icon: React.FC<SVGProps>;
  isFlat: boolean;
  className?: string;
  svgClassName?: string;
  style?: React.CSSProperties;
};

export function MorphingDialogIcon({
  icon,
  isFlat,
  className,
  svgClassName,
  style,
}: MorphingDialogImageProps) {
  const { uniqueId } = useMorphingDialog();
  const Icon = icon;

  return (
    <motion.figure
      className={cn("w-full h-full p-4", className)}
      layoutId={`dialog-icon-${uniqueId}`}
      style={style}
    >
      <Icon className={cn(svgClassName, isFlat && "text-white")} />
    </motion.figure>
  );
}
