'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/projects', label: 'Projets' },
    { href: '/competences', label: 'Compétences' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ]
  
  return (
    <nav className="sticky top-0 z-30 bg-[#0b0d12]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center text-slate-100">
          <Link href="/" className="text-2xl font-bold text-emerald-300">
            Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {links.map(link => {
              const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition hover:text-emerald-300 ${isActive ? 'text-emerald-300 font-semibold' : 'text-slate-300'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <div className="hidden md:flex">
            <Link href="/contact" className="rounded-full bg-emerald-400 text-black px-4 py-2 font-semibold hover:bg-emerald-300">
              Discutons
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            {links.map(link => {
              const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full px-3 py-2 ${isActive ? 'bg-emerald-400/20 text-emerald-200 font-semibold' : 'text-slate-200'}`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-emerald-400 text-center text-black px-3 py-2 font-semibold"
            >
              Discutons
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}