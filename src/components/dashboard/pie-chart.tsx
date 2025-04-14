import { CircularProgress } from "@heroui/progress";

type Props = {
  percent: number;
};

export default function PieChart({ percent }: Props) {
  const strokeColor = percent > 90 ? "stroke-red-600" : "stroke-primary";
  return (
    <CircularProgress
      classNames={{
        svg: "w-44 h-44 drop-shadow-md",
        indicator: strokeColor,
        track: "stroke-white/10",
        value: "text-3xl font-semibold text-white",
      }}
      showValueLabel={true}
      strokeWidth={4}
      value={percent}
    />
  );
}
