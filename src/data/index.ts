import { Compass, Zap, Shield } from "lucide-react";
import type { FutureItem, StatItem } from "@/types";

export const FUTURE_ITEMS: FutureItem[] = [
  { icon: Compass, title: "情境感知", desc: "理解你当下的场景，主动提供建议。" },
  { icon: Zap, title: "即时响应", desc: "在毫秒级的时间内完成推理与生成。" },
  { icon: Shield, title: "隐私优先", desc: "本地化模型与端侧能力，守护数据安全。" },
];

export const HERO_STATS: StatItem[] = [
  { k: "每日陪伴", v: "24h" },
  { k: "应用场景", v: "10+" },
  { k: "用户覆盖", v: "亿级" },
  { k: "响应速度", v: "秒级" },
];
