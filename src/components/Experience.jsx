import { motion } from 'framer-motion';

const items = [
  {
    role: 'Data Migration Specialist',
    org: 'Equisoft',
    period: 'May 2025 – Present',
    desc: 'Designing and executing reliable, auditable data migration pipelines with SQL and Python. Building tools that ensure accuracy, lineage, and performance.',
  },
  {
    role: 'Web Developer & Digital Marketing Manager',
    org: 'V Media & Advertising',
    period: 'May 2024 – Apr 2025',
    desc: 'Developed responsive web experiences and managed digital campaigns. Focused on performance, SEO, and brand consistency.',
  },
  {
    role: 'B.Tech CSE (AI & ML)',
    org: 'MLRITM',
    period: '2020 – 2024',
    desc: 'Coursework in AI/ML, data structures, and systems programming with hands-on projects in Python and computer vision.',
  },
];

export default function Experience() {
  return (
    <section id="timeline" className="relative py-24 bg-black text-white">
      <div className="mx-auto w-11/12 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
          <p className="text-white/70">A concise, holographic timeline of work and education.</p>
        </div>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-2 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/60 via-white/10 to-emerald-300/60" />

          <div className="space-y-10">
            {items.map((it, idx) => (
              <motion.div
                key={it.role}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                className="relative ml-4 md:ml-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6"
              >
                <div className="absolute -left-5 top-6 w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-emerald-300 shadow-[0_0_20px_rgba(234,179,8,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">{it.role}</h3>
                    <p className="text-white/70">{it.org}</p>
                  </div>
                  <p className="text-white/60 text-sm">{it.period}</p>
                </div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
