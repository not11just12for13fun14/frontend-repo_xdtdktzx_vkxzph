import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto w-11/12 max-w-6xl pt-40 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs tracking-wide text-white/80">Hyderabad, Telangana, India</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white/90">Jagadeesh </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-200">
              Kokkula
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Data Migration Specialist & Web Developer
          </p>
          <p className="text-white/70 max-w-xl">
            Data Migration Specialist at Equisoft. Strong in SQL, Python, and modern web development. Previously at V Media & Advertising. B.Tech in CSE (AI & ML) from MLRITM.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="mailto:jagadeeshkokkula123@gmail.com" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-medium shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:shadow-[0_0_45px_rgba(234,179,8,0.5)] transition-shadow">
              Contact Me
            </a>
            <a href="#projects" className="px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/15 transition-colors">
              View Projects
            </a>
          </div>

          <div className="text-sm text-white/60">
            <p>Phone: +91 97010 18462 • Email: jagadeeshkokkula123@gmail.com</p>
            <a href="https://nani8501.github.io/new.github.io/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-white">Website</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative h-[360px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-emerald-200/10 pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-white/80 text-sm">
            <p>“Clean, efficient systems with data at the core.”</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
