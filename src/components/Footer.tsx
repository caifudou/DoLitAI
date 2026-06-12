import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer id="cta" className="relative py-16 border-t border-white/5">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-2 text-ink-100">
          <Sparkles className="w-5 h-5 text-neon-400" />
          <span className="font-display text-lg">AI 在身边</span>
        </div>
        <div className="text-sm text-ink-400">
          © {new Date().getFullYear()} AI 在身边 · 一个关于智能与生活的展示页面
        </div>
      </div>
    </footer>
  );
}
