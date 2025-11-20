import React from 'react'
import { Home, Info, Sparkles, Cpu, FlaskConical, Mail } from 'lucide-react'

const items = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'about', label: 'About', icon: Info },
  { key: 'features', label: 'Features', icon: Sparkles },
  { key: 'technology', label: 'Technology', icon: Cpu },
  { key: 'usecases', label: 'Use Cases', icon: FlaskConical },
  { key: 'contact', label: 'Contact', icon: Mail },
]

export default function OrbitalNav({ activeKey, onSelect }) {
  return (
    <div className="pointer-events-auto">
      <div className="relative w-[260px] h-[260px]">
        {/* Orbit ring */}
        <div className="absolute inset-0 rounded-full border border-white/20 shadow-[0_0_80px_rgba(59,130,246,0.35)]" />
        {items.map((item, idx) => {
          const angle = (idx / items.length) * Math.PI * 2 - Math.PI / 2
          const radius = 120
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const Icon = item.icon
          const isActive = activeKey === item.key
          return (
            <button
              key={item.key}
              onClick={() => onSelect(item.key)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-md border transition-all duration-300 flex items-center justify-center ${
                isActive
                  ? 'bg-white/20 border-white/60 text-white scale-110 shadow-lg shadow-blue-500/30'
                  : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
              style={{ left: 130 + x, top: 130 + y, width: 52, height: 52 }}
              aria-label={item.label}
              title={item.label}
            >
              <Icon size={22} />
            </button>
          )
        })}
      </div>
    </div>
  )
}
