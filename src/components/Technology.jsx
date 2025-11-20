import React from 'react'
import { Cpu, Server, Library, Binary, Atom, Network, Boxes, Sparkles } from 'lucide-react'

export default function Technology() {
  return (
    <section id="technology" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Technology foundation</h2>
          <p className="mt-4 text-slate-600">Built on advances in protein language modeling and nucleotide representation learning.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Modeling stack</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Protein language models inspired by state‑of‑the‑art research, including VenusPLM and related architectures</li>
              <li>Nucleotide transformers for DNA/RNA sequence modeling</li>
              <li>Transfer learning, zero‑shot scoring, and multi‑task fine‑tuning</li>
              <li>Confidence calibration and uncertainty estimation</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Data and pipelines</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Scalable sequence stores with provenance tracking</li>
              <li>Feature extraction for structures, motifs, and evolutionary signals</li>
              <li>GPU‑accelerated training and batch inference</li>
              <li>Versioned workflows and reproducible experiment tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
