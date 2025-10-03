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
    { href: '/about', label: 'À propos' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600">
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
                  className={`hover:text-purple-600 transition ${isActive ? 'text-purple-600 font-semibold' : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
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
                  className={isActive ? 'text-blue-600 font-semibold' : ''}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}