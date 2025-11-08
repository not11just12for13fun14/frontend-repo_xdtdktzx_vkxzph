import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'timeline', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[80%] transition-all ${
      scrolled ? 'drop-shadow-2xl' : ''
    }`}>
      <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
        <button
          className="text-lg font-semibold tracking-tight text-white/90 hover:text-white"
          onClick={() => scrollTo('home')}
        >
          JK • Portfolio
        </button>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {n.label}
            </button>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-2 backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl px-4 py-3 flex flex-col">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="py-2 text-left text-white/80 hover:text-white"
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
