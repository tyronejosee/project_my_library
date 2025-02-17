"use client";
import { Chip } from "@heroui/react";
import { ALL_DISKS } from "@/config/constants";
import { Heading } from "./Heading";
import { DiskSummary } from "./DiskSummary";
import { PieChart } from "./PieChart";

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <Heading title="Dashboard" />
      <DiskSummary />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ALL_DISKS.map((disk, index) => {
          return (
            <article
              key={index}
              className="bg-neutral-950 rounded-2xl border border-neutral-800 p-4 group"
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-left text-xl font-medium">
                    {disk.volume_label}
                  </h2>
                  <ul className="text-left mt-4">
                    <li>Total: {disk.total}</li>
                    <li>Libre: {disk.free}</li>
                    <li>Usado: {disk.used}</li>
                  </ul>
                  <Chip className="mt-auto group-hover:bg-primary group-hover:text-neutral-950">
                    Disco {disk.drive_name}
                  </Chip>
                </div>
                <PieChart percent={disk.percent_used} />
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};
