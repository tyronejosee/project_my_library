"use client";

import type { Transition } from "motion/react";
import { MotionConfig } from "motion/react";
import type { JSX } from "react";
import React, { useContext, useId, useMemo, useRef, useState } from "react";

type MorphingDialogContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const MorphingDialogContext = React.createContext<MorphingDialogContextType | null>(null);

export function useMorphingDialog(): MorphingDialogContextType {
  const context = useContext(MorphingDialogContext);
  if (!context) {
    throw new Error("useMorphingDialog must be used within a MorphingDialogProvider");
  }
  return context;
}

type MorphingDialogProviderProps = {
  children: React.ReactNode;
  transition?: Transition;
};

export function MorphingDialogProvider({
  children,
  transition,
}: MorphingDialogProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null!);

  const contextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      uniqueId,
      triggerRef,
    }),
    [isOpen, uniqueId]
  );

  return (
    <MorphingDialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </MorphingDialogContext.Provider>
  );
}
