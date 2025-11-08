import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_100%,rgba(6,182,212,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-white text-center"
          >
            Let’s collaborate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-center text-white/70"
          >
            Tell me about your idea and I’ll respond shortly.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl shadow-black/30"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
                  placeholder="jane@studio.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70">Message</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
                placeholder="Project goals, timeline, and budget..."
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-fuchsia-500/80 via-amber-400/80 to-cyan-400/80 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_30px_-6px_rgba(251,191,36,0.5)] hover:shadow-[0_0_35px_-4px_rgba(251,191,36,0.6)] transition"
              >
                Send message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
