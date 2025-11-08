import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black via-black to-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto w-11/12 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Get in touch</h2>
          <p className="text-white/70">Let’s talk data migrations, web systems, or collaborations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <input required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
              <textarea required placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-medium shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:shadow-[0_0_45px_rgba(234,179,8,0.5)] transition-shadow">
                Send Message
              </button>
              {status && <p className="text-emerald-300 text-sm">{status}</p>}
            </form>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 space-y-3 text-white/80">
            <p><span className="text-white/60">Name:</span> Jagadeesh Kokkula</p>
            <p><span className="text-white/60">Role:</span> Data Migration Specialist & Web Developer</p>
            <p><span className="text-white/60">Location:</span> Hyderabad, Telangana, India</p>
            <p><span className="text-white/60">Birthday:</span> 8 May 2001</p>
            <p><span className="text-white/60">Phone:</span> +91 97010 18462</p>
            <p><span className="text-white/60">Email:</span> <a className="underline" href="mailto:jagadeeshkokkula123@gmail.com">jagadeeshkokkula123@gmail.com</a></p>
            <a className="underline" href="https://nani8501.github.io/new.github.io/" target="_blank" rel="noreferrer">Personal Website</a>
          </div>
        </div>
      </div>
    </section>
  );
}
