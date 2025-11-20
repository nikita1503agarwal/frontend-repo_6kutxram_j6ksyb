import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OrbitalNav from './OrbitalNav'
import Spline from '@splinetool/react-spline'

const panels = {
  home: {
    heading: 'Bioinformatics. Reimagined.',
    sub: 'A spatial interface for molecular intelligence',
    content: (
      <div className="max-w-xl text-slate-200/90">
        <p>
          Navigate a constellation of capabilities without scrolling. Each node reveals
          models, datasets, and interactive demonstrations powered by our AI stack.
        </p>
      </div>
    ),
    bg: (
      <Spline scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
    )
  },
  about: {
    heading: 'Scientific Rigor. Human Velocity.',
    sub: 'Built for labs, biotech, and translational teams',
    content: (
      <ul className="space-y-2 text-slate-200/90 list-disc pl-5">
        <li>Peer‑reviewed methodology and benchmarked models</li>
        <li>Traceable data lineage and experiment tracking</li>
        <li>Reproducible notebooks and programmatic APIs</li>
      </ul>
    ),
  },
  features: {
    heading: 'Capabilities Orbit',
    sub: 'Protein, nucleotide, and multimodal analysis',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-200/90">
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">Protein language models, structure hints</div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">Variant effect prediction at scale</div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">Nucleotide transformers for regulatory motifs</div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">Active learning on wet‑lab feedback</div>
      </div>
    ),
  },
  technology: {
    heading: 'Model Stack',
    sub: 'Training, inference, and orchestration',
    content: (
      <div className="text-slate-200/90 space-y-3">
        <p>Self‑supervised encoders, diffusion priors, and retrieval over curated corpora.</p>
        <p>GPU‑aware pipelines with vector search and hybrid symbolic reasoning.</p>
      </div>
    ),
  },
  usecases: {
    heading: 'Where It Works',
    sub: 'From discovery to development',
    content: (
      <div className="text-slate-200/90 space-y-2">
        <p>Therapeutic target triage and variant prioritization</p>
        <p>Assay design assistance and candidate ranking</p>
        <p>Synthetic biology sequence optimization</p>
      </div>
    ),
  },
  contact: {
    heading: 'Request Access',
    sub: 'Early partner program',
    content: (
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
        <input className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/60" placeholder="Name" />
        <input className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/60" placeholder="Work Email" />
        <input className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/60 sm:col-span-2" placeholder="Organization" />
        <textarea rows={4} className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/60 sm:col-span-2" placeholder="What are you exploring?" />
        <button type="button" className="sm:col-span-2 rounded-md bg-white text-slate-900 font-medium py-2.5 hover:bg-slate-100 transition">Request a demo</button>
      </form>
    ),
  },
}

export default function FuturisticShell() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handler = (e) => {
      const sequence = ['h','a','f','t','u','c']
      if (sequence.includes(e.key.toLowerCase())) {
        // simple keyboard cycle
        const keys = Object.keys(panels)
        const idx = keys.indexOf(active)
        const next = keys[(idx + 1) % keys.length]
        setActive(next)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [active])

  const current = panels[active]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#05060a] via-[#0a0f1f] to-[#0b1224] text-white">
      {/* Ambient grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%),linear-gradient(transparent,transparent),repeating-linear-gradient(0deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06)_1px,transparent_1px,transparent_40px)]" />

      {/* 3D background for home only */}
      <div className="absolute inset-0 opacity-20 -z-10">
        {active === 'home' && panels.home.bg}
      </div>

      {/* Center console */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 flex flex-col items-center">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-wide uppercase">
            {current.sub}
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
            {current.heading}
          </h1>
        </motion.div>

        <div className="relative w-full grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 items-center">
          {/* Orbital radial nav */}
          <div className="justify-self-center">
            <OrbitalNav activeKey={active} onSelect={setActive} />
          </div>

          {/* Panel content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              {current.content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hints */}
        <div className="mt-10 text-xs text-white/60">
          Tip: click orbiting icons or press any key to cycle panels.
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 pb-6">
        <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-between backdrop-blur">
          <div className="text-xs text-white/70">Latency: 12ms • Uptime: 99.99% • Models: P-LM • Nuc‑Tx • Diff‑Prior</div>
          <button onClick={() => setActive('contact')} className="text-xs px-3 py-1.5 rounded-md bg-white text-slate-900 hover:bg-slate-200">Get Access</button>
        </div>
      </div>
    </div>
  )
}
