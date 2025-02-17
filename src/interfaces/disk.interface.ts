export interface IDisk {
  drive_name: string;
  volume_label: string;
  total: number;
  used: number;
  free: number;
  percent_used: number;
}

export type IMinimalDisk = Omit<IDisk, "drive_name" | "volume_label" | "percent_used">;
