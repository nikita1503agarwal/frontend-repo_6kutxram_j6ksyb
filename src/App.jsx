import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Technology from './components/Technology'
import UseCases from './components/UseCases'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Technology />
        <UseCases />
        <Contact />
      </main>
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} BioAI Platform. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
