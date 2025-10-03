'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-purple-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <h1 className="text-6xl font-bold mb-4">
          Salut, je suis <span className="text-blue-600">Mathis FRAPPIN</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Développeur Full Stack passionné par la création d'expériences web modernes
          avec Laravel, Vue.js et maintenant React/Next.js
        </p>
        
        <div className="flex gap-4 justify-center mb-8">
          <Link 
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Voir mes projets
          </Link>
          <Link 
            href="/contact"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Me contacter
          </Link>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/MathisFPN" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-blue-600 transition cursor-pointer" />
          </a>
          <a href="https://linkedin.com/in/mathis-frappin" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-600 transition cursor-pointer" />
          </a>
          <a href="mailto:ton@email.com">
            <Mail className="w-6 h-6 hover:text-blue-600 transition cursor-pointer" />
          </a>
        </div>
      </motion.div>
    </main>
  )
}