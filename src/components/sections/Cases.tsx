import { Quote } from "lucide-react";
import { CASES } from "@/data/cases";

export default function Cases() {
  return (
    <section id="cases" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-sm text-neon-300 tracking-wider uppercase">真实声音</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink-50 leading-tight">
              他们，已经让 AI 走入日常
            </h2>
          </div>
          <p className="text-ink-300 max-w-md">
            不是宏大叙事，而是普通人在真实生活里的点滴改变。
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CASES.map((c) => (
            <figure
              key={c.name}
              className="relative flex flex-col gap-6 rounded-2xl border border-white/5 bg-ink-900/60 p-6 hover:border-neon-400/30 transition"
            >
              <Quote className="w-7 h-7 text-neon-400/60" />
              <blockquote className="text-ink-100 leading-relaxed">「{c.quote}」</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neon-500/20 text-neon-200 font-medium">
                  {c.avatar}
                </div>
                <div>
                  <div className="text-sm text-ink-50">{c.name}</div>
                  <div className="text-xs text-ink-400">#{c.tag}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
