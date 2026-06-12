import { Compass, Zap, Shield } from "lucide-react";

export default function Future() {
  return (
    <section id="future" className="relative py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-ink-900 to-ink-950 p-8 md:p-14">
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-neon-500/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-sm text-neon-300 tracking-wider uppercase">未来展望</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink-50 leading-tight">
                下一个十年，AI 将如何继续走入生活？
              </h2>
              <p className="mt-4 text-ink-300 leading-relaxed">
                更自然的交互、更深度的理解、更严谨的安全边界。我们相信，最好的技术是被感知最少的技术。
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Compass, title: "情境感知", desc: "理解你当下的场景，主动提供建议。" },
                { icon: Zap, title: "即时响应", desc: "在毫秒级的时间内完成推理与生成。" },
                { icon: Shield, title: "隐私优先", desc: "本地化模型与端侧能力，守护数据安全。" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-ink-950/60 p-5"
                  >
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neon-500/10 text-neon-300 ring-1 ring-neon-400/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-ink-50 font-medium">{item.title}</div>
                      <div className="text-sm text-ink-300 mt-1">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
