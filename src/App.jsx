import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
      <footer className="py-10 text-center text-white/50 border-t border-white/10 bg-black/60">
        <p>© {new Date().getFullYear()} Jagadeesh Kokkula • Built with React</p>
      </footer>
    </div>
  );
}

export default App;
