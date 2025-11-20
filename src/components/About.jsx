import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for scientists, engineered for reliability</h2>
            <p className="mt-4 text-slate-700">Our platform integrates AI models with rigorous bioinformatics to deliver trustworthy insights. We focus on interpretability, validation against curated datasets, and practical tools that fit existing lab workflows.</p>
            <ul className="mt-6 space-y-3 text-slate-700 list-disc pl-5">
              <li>Transparent scoring with clear evidence and confidence intervals</li>
              <li>Reproducible pipelines and versioned datasets</li>
              <li>Enterprise‑grade security and compliance</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="font-semibold text-slate-900">What makes it different</h3>
            <p className="mt-3 text-sm text-slate-700">We bring together cutting‑edge protein language models, nucleotide transformers, and domain‑specific features to create a unified system that understands biological sequences at scale.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="text-xs text-slate-500">Focus</div>
                <div className="font-medium text-slate-900">Protein + DNA/RNA</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="text-xs text-slate-500">Approach</div>
                <div className="font-medium text-slate-900">Foundation models</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="text-xs text-slate-500">Trust</div>
                <div className="font-medium text-slate-900">Validated & explainable</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="text-xs text-slate-500">Delivery</div>
                <div className="font-medium text-slate-900">APIs & workflows</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
