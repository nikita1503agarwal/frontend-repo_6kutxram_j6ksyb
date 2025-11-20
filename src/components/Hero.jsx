import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-90" aria-hidden="true">
        <Spline scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-xs font-medium mb-4">
            AI for Molecular Biology
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            An integrated bioinformatics platform for next‑gen discovery
          </h1>
          <p className="mt-6 text-lg text-slate-700">
            Accelerate protein analysis, predict mutation impacts, and model nucleotide behavior with AI‑powered tools inspired by state‑of‑the‑art research.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-colors">
              Explore Features
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 border border-slate-200 hover:bg-slate-50 transition-colors">
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white" />
    </section>
  )
}
