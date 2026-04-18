'use client'

import { useState } from 'react'
import { X, Leaf, Truck, Package } from 'lucide-react'

const items = [
  { icon: Leaf, text: 'First-flush Uji matcha, shade-grown 21 days' },
  { icon: Truck, text: 'Complimentary shipping on orders over $75' },
  { icon: Package, text: 'Ships within 24 hours — cold-sealed for freshness' },
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-[hsl(var(--matcha-deep))] text-[hsl(var(--matcha-cream))]">
      <div className="container-custom py-2.5">
        <div className="flex items-center justify-center gap-8 text-[11px] uppercase tracking-[0.18em]">
          {items.map(({ icon: Icon, text }, idx) => (
            <div
              key={idx}
              className={`items-center gap-2 ${idx === 0 ? 'flex' : 'hidden md:flex'}`}
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
