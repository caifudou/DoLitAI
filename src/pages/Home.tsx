import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Cases from "@/components/Cases";
import Future from "@/components/Future";
import Footer from "@/components/Footer";

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
