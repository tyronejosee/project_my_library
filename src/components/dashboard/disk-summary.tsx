import { PieChart } from "@/components/dashboard/pie-chart";
import { ALL_DISKS } from "@/config/constants";
import { getDiskSummary } from "@/lib/utils";

function DiskSummary() {
  const { total, used, free, percentUsed } = getDiskSummary(ALL_DISKS);

  return (
    <section className="relative p-4 border border-neutral-700 rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://wallpapers.com/images/hd/black-blur-background-b21117e1rgm111p3.jpg")',
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
      <h2 className="text-2xl font-semibold">Resumen</h2>
      <div className="flex justify-center items-center">
        <PieChart percent={percentUsed} />
        <ul>
          <li>Total: {total} GB</li>
          <li>Usado: {used} GB</li>
          <li>Libre: {free} GB</li>
        </ul>
      </div>
    </section>
  );
}

export { DiskSummary };
