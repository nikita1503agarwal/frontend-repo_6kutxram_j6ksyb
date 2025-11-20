import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thank you — your request has been received. We will be in touch shortly.')
  }

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact</h2>
          <p className="mt-4 text-slate-600">Request access, partnerships, or a demo tailored to your research.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl">
          <input required placeholder="Full name" className="px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-400" />
          <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-400" />
          <input placeholder="Organization" className="px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-400 md:col-span-2" />
          <textarea required placeholder="What would you like to achieve?" rows={4} className="px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-400 md:col-span-2" />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-slate-500">We respect data privacy. Your information is used only to respond to your request.</p>
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-colors">Send</button>
          </div>
          {status && <p className="md:col-span-2 text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">{status}</p>}
        </form>
      </div>
    </section>
  )
}
