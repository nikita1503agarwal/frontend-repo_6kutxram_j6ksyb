import React from 'react'
import { FlaskRound, Pill, Syringe, GraduationCap, Hospital, TestTube2, Microscope } from 'lucide-react'

const cases = [
  {
    title: 'Therapeutic protein engineering',
    desc: 'Prioritize stabilizing mutations, binding affinity, and developability attributes for biologics.'
  },
  {
    title: 'Genomic variant interpretation',
    desc: 'Score missense effects, splice disruptions, and regulatory impacts with calibrated confidence.'
  },
  {
    title: 'Assay design and optimization',
    desc: 'Guide library construction and readout analysis with embedding‑driven heuristics.'
  },
  {
    title: 'Diagnostics and screening',
    desc: 'Support panel design and variant triage for clinical and research settings.'
  },
  {
    title: 'Education and training',
    desc: 'Interactive modules to teach sequence fundamentals and AI‑driven biology.'
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Use cases</h2>
          <p className="mt-4 text-slate-600">Practical applications across research, biotech, and healthcare.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
