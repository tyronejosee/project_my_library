import { CircularProgress } from "@heroui/progress";

type PieChartProps = {
  percent: number;
};

function PieChart({ percent }: PieChartProps) {
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

export { PieChart };
