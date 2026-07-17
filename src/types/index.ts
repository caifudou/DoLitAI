import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  when: string;
};

export type CaseItem = {
  name: string;
  avatar: string;
  quote: string;
  tag: string;
};

export type FutureItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type StatItem = {
  k: string;
  v: string;
};
