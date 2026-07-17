import { Sparkles, ArrowRight, Circle } from "lucide-react";
import { HERO_STATS } from "@/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(46,245,163,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(46,245,163,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="container pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex items-center gap-2 text-sm text-neon-300 animate-fade-in">
          <Circle className="w-2 h-2 fill-neon-400 text-neon-400 animate-shimmer" />
          <span>AI 正融入生活的每一个角落</span>
        </div>

        <h1 className="mt-6 font-display text-4xl md:text-6xl leading-tight text-ink-50 animate-slide-up text-balance">
          AI 在身边，
          <br className="hidden md:block" />
          让每一刻都更
          <span className="bg-gradient-to-r from-neon-300 to-neon-500 bg-clip-text text-transparent"> 从容、智能</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-ink-300 leading-relaxed animate-slide-up" style={{ animationDelay: "80ms" }}>
          从清晨的第一句问候，到深夜的最后一行代码；从通勤的导航建议，到餐桌上的灵感推荐——
          人工智能不再是遥远的技术概念，而是此刻就在你身边的伙伴。
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: "160ms" }}>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full bg-neon-500 px-6 py-3 text-sm font-medium text-ink-950 hover:bg-neon-400 transition shadow-glow"
          >
            <Sparkles className="w-4 h-4" />
            探索应用场景
          </a>
          <a
            href="#cases"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-ink-100 hover:border-neon-400/40 hover:text-neon-300 transition"
          >
            查看真实案例
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: "240ms" }}>
          {HERO_STATS.map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-neon-400/20 transition"
            >
              <div className="font-display text-2xl md:text-3xl text-neon-300">{item.v}</div>
              <div className="mt-1 text-sm text-ink-300">{item.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
