import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const mainSkills = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 90 },
  { name: 'Python', value: 90 },
  { name: 'JS', value: 75 },
];

const secondarySkills = [
  { name: 'Java', value: 60 },
  { name: 'C', value: 75 },
  { name: 'Creativity', value: 90 },
  { name: 'Problem-Solving', value: 88 },
  { name: 'Adaptability', value: 85 },
  { name: 'Time Management', value: 86 },
  { name: 'Analytical Thinking', value: 90 },
];

function Radial({ value, label }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) controls.start({ strokeDashoffset: 300 - (300 * value) / 100 });
  }, [inView, value, controls]);

  return (
    <div ref={ref} className="group relative w-36 h-36 md:w-40 md:h-40 grid place-items-center">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="48" stroke="rgba(255,255,255,0.12)" strokeWidth="10" fill="none" />
        <motion.circle
          cx="60"
          cy="60"
          r="48"
          stroke="url(#grad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
          animate={controls}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{value}%</p>
          <p className="text-xs text-white/70">{label}</p>
        </div>
      </div>
      <div className="absolute -inset-2 rounded-2xl bg-emerald-300/0 group-hover:bg-emerald-300/10 blur-xl transition" />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-black to-black/95 text-white">
      <div className="mx-auto w-11/12 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>
          <p className="text-white/70">Balanced between engineering precision and design clarity.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg mb-4 text-white/90">Core Stack</h3>
            <div className="flex flex-wrap gap-6">
              {mainSkills.map((s) => (
                <Radial key={s.name} value={s.value} label={s.name} />
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg mb-4 text-white/90">Secondary & Soft Skills</h3>
            <div className="space-y-4">
              {secondarySkills.map((s) => (
                <div key={s.name} className="">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-white/80">{s.name}</span>
                    <span className="text-white/60">{s.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
