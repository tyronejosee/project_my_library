import type { Variant } from "motion/react";

export type SVGProps = React.SVGProps<SVGSVGElement>;

export type MorphingDialogVariants = {
  initial: Variant;
  animate: Variant;
  exit: Variant;
};

export type Media = {
  folder_name: string;
  file_name: string;
  file_size: string;
  slug: string;
  image: string;
  genre: string;
  type: string;
  has_file: boolean;
  location: string;
  created_at: string;
  updated_at: string;
};

export type Channel = {
  name: string;
  number: number | number[];
  category: string;
  image?: string;
};

export type Disk = {
  drive_name: string;
  volume_label: string;
  total: number;
  used: number;
  free: number;
  percent_used: number;
};

export type MinimalDisk = Omit<Disk, "drive_name" | "volume_label" | "percent_used">;

export type MediaQueryParams = {
  genre?: string;
};
