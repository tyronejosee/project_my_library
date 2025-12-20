"use client";

import { Image } from "@heroui/react";
import { motion } from "motion/react";

import { useMorphingDialog } from "@/context/morphing-dialog-context";
import { cn } from "@/lib/utils";

type MorphingDialogImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
  height?: number;
  width?: number;
};

export function MorphingDialogImage({
  src,
  alt,
  className,
  imgClassName,
  style,
  height,
  width,
}: MorphingDialogImageProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.figure
      className={cn("overflow-hidden", className)}
      layoutId={`dialog-img-${uniqueId}`}
      style={style}
    >
      <Image
        removeWrapper
        src={src}
        alt={alt}
        title={alt}
        height={height}
        width={width}
        className={cn("w-full h-full object-cover", imgClassName)}
        loading="lazy"
        radius="none"
      />
    </motion.figure>
  );
}
