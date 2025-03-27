export interface Media {
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
}

export interface Channel {
  name: string;
  number: number | number[];
  category: string;
  image?: string;
}

export interface Disk {
  drive_name: string;
  volume_label: string;
  total: number;
  used: number;
  free: number;
  percent_used: number;
}

export type MinimalDisk = Omit<
  Disk,
  "drive_name" | "volume_label" | "percent_used"
>;

export interface MediaQueryParams {
  genre?: string;
}
