import { Coffee, Car, ShoppingBag, BookOpen, Stethoscope, Palette } from "lucide-react";
import type { Feature } from "@/types";

export const FEATURES: Feature[] = [
  { icon: Coffee, title: "晨间提醒", when: "07:00 · 清晨", desc: "根据天气与日程，为你定制今日工作节奏和穿搭建议。" },
  { icon: Car, title: "通勤导航", when: "08:30 · 出行", desc: "实时预测路况与公共交通，智能规划最省心的出行路径。" },
  { icon: BookOpen, title: "学习辅助", when: "10:00 · 工作学习", desc: "解释概念、生成摘要、翻译对照，是你的知识辅助伙伴。" },
  { icon: ShoppingBag, title: "生活采购", when: "12:00 · 午后", desc: "比价、优惠券、清单整理，购物从此告别选择困难。" },
  { icon: Palette, title: "创意灵感", when: "15:00 · 创作", desc: "生成文案、配图与配色，让创意从想法更快走向作品。" },
  { icon: Stethoscope, title: "健康关怀", when: "22:00 · 深夜", desc: "睡眠分析、情绪记录，温柔陪伴你每一天的收尾时刻。" },
];
