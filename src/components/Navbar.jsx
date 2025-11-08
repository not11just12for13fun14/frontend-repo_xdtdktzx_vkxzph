import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-black/20">
          <a href="#home" className="px-5 py-3 text-sm font-semibold tracking-wide text-white/90 hover:text-white">
            <span className="bg-gradient-to-r from-amber-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">AURON</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 pr-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-white/80 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-3 text-white/90 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
