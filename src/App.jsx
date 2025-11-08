import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Your Name — Minimal • Futuristic • Animated
      </footer>
    </div>
  );
}
