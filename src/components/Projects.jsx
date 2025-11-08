import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Commerce',
    desc: 'Headless storefront with animated product reveals and GPT-powered search.',
    tags: ['Next.js', 'Stripe', 'Framer Motion'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Aura OS',
    desc: 'Minimal desktop UI kit with holographic system widgets and 3D transitions.',
    tags: ['React', 'Three.js', 'Tailwind'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Signal Studio',
    desc: 'Audio-reactive visuals and gesture controls for live sets.',
    tags: ['WebGL', 'WebAudio', 'Vite'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 24, rotateX: -12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 * index }}
      href={project.link}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
           style={{ background: 'radial-gradient(800px 200px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.14), transparent 60%)' }} />

      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <span className="text-xs text-white/60">Case Study →</span>
        </div>
        <p className="mt-2 text-sm text-white/70">{project.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  // Mouse position spotlight effect per card
  const handleMouseMove = (e) => {
    const target = e.target.closest('[data-spotlight]');
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty('--x', `${x}%`);
    target.style.setProperty('--y', `${y}%`);
  };

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-white/70"
          >
            Select work with an emphasis on motion, clarity, and performance.
          </motion.p>
        </div>

        <div onMouseMove={handleMouseMove} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.title} data-spotlight>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
