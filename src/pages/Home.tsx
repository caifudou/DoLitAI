import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Cases from "@/components/sections/Cases";
import Future from "@/components/sections/Future";

export default function Home() {
  return (
    <div className="min-h-screen text-ink-100">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Cases />
        <Future />
      </main>
      <Footer />
    </div>
  );
}
