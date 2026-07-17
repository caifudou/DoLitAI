import { FEATURES } from "@/data/features";

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <div className="text-sm text-neon-300 tracking-wider uppercase">应用场景</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink-50 leading-tight">
            从清晨到深夜，AI 都在做什么？
          </h2>
          <p className="mt-4 text-ink-300 leading-relaxed">
            六个日常时刻，六次无感的智能介入。技术隐于无形，便利真实可感。
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, idx) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-900/60 p-6 transition hover:border-neon-400/30 hover:bg-ink-800/60"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-neon-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon-500/10 text-neon-300 ring-1 ring-neon-400/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-ink-400 font-mono">{f.when}</span>
                </div>
                <h3 className="mt-5 font-display text-xl text-ink-50">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-300 leading-relaxed">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
