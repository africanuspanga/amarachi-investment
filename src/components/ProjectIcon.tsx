"use client";

import {
  Zap,
  TrainFront,
  Mountain,
  HardHat,
  Truck,
  Construction,
  Warehouse,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Train: TrainFront,
  Mountain,
  HardHat,
  Truck,
  Road: Construction,
  Warehouse,
};

export default function ProjectIcon({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name] || Zap;
  return <Icon size={size} className={className} />;
}
