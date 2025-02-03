"use client";

import { CircularProgress, Chip } from "@heroui/react";
import folderMainInfo from "../data/disks/folders-main-info.json";
import systemsMainInfo from "../data/disks/systems-main-info.json";

export const Dashboard = () => {
  const allDisks = [...folderMainInfo, ...systemsMainInfo];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {allDisks.map((disk, index) => {
        const strokeColor =
          disk.percent_used > 90 ? "stroke-red-600" : "stroke-primary";

        return (
          <article
            key={index}
            className="bg-neutral-950 rounded-2xl border border-neutral-800 p-4"
          >
            <h2 className="text-lg font-medium pb-4">{disk.volume_label}</h2>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <ul className="text-left">
                  <li>Total: {disk.total}</li>
                  <li>Libre: {disk.free}</li>
                  <li>Usado: {disk.used}</li>
                </ul>
                <Chip className="mt-auto">Disco {disk.drive_name}</Chip>
              </div>
              <CircularProgress
                classNames={{
                  svg: "w-36 h-36 drop-shadow-md",
                  indicator: strokeColor,
                  track: "stroke-white/10",
                  value: "text-3xl font-semibold text-white",
                }}
                showValueLabel={true}
                strokeWidth={4}
                value={disk.percent_used}
              />
            </div>
          </article>
        );
      })}
    </section>
  );
};
