import React from 'react'
import { Brain, Dna, Activity, FlaskConical, LineChart, Settings, Microscope, Ruler } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Machine learning models',
    desc: 'Protein language models and nucleotide transformers capture biological grammar from massive sequence corpora.'
  },
  {
    icon: Dna,
    title: 'Biological sequence analysis',
    desc: 'Alignment‑free embeddings, motif discovery, structure‑aware features, and homology search tools.'
  },
  {
    icon: Activity,
    title: 'Variant effect prediction',
    desc: 'Assess missense and indel impacts on stability, binding, expression, and fitness landscapes.'
  },
  {
    icon: Microscope,
    title: 'Protein analysis toolkit',
    desc: 'Domain annotation, secondary structure signals, contact maps, and functional site prioritization.'
  },
  {
    icon: LineChart,
    title: 'Mutation impact modeling',
    desc: 'Context‑aware scoring of substitutions using zero‑shot and fine‑tuned models informed by assays.'
  },
  {
    icon: Settings,
    title: 'Workflow automation',
    desc: 'Composable pipelines for QC, feature extraction, training, and reporting with reproducible outputs.'
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Capabilities designed for modern biology</h2>
          <p className="mt-4 text-slate-600">From raw sequences to decisions, unify analysis across proteins and nucleotides.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center text-white mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
