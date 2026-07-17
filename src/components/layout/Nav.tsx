import { Sparkles } from "lucide-react";

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-ink-950/60 border-b border-white/5">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-ink-50">
          <Sparkles className="w-5 h-5 text-neon-400" />
          <span className="font-display text-lg tracking-wide">AI在身边</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-200">
          <a href="#features" className="hover:text-neon-300 transition">应用场景</a>
          <a href="#cases" className="hover:text-neon-300 transition">真实案例</a>
          <a href="#future" className="hover:text-neon-300 transition">未来展望</a>
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-2 rounded-full border border-neon-400/40 bg-neon-500/10 px-4 py-2 text-sm text-neon-300 hover:bg-neon-500/20 transition"
        >
          开始体验
        </a>
      </div>
    </header>
  );
}
