'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0d12] via-[#0e131d] to-[#141928] text-white">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-wide">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Annecy · Cruseilles — BUT Informatique 3ᵉ année
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="space-y-6 max-w-3xl text-pretty">
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">Mathis Frappin – Developper</p>

              <p className="text-lg text-white/100 break-words">
                Étudiant en 3ᵉ année de BUT Informatique (IUT Annecy). Passionné par les technologies de l&rsquo;information, je suis enthousiaste à
                l&rsquo;idée de mettre à profit mes compétences et ma créativité pour stimuler l&rsquo;innovation et contribuer à des solutions efficaces. Je suis
                actuellement une alternance au Département de la Haute Savoie · Développeur Mobile.
              </p>

              <div className="flex flex-wrap gap-4">

                <Link href="/contact" className="bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-emerald-300"
                >
                  Me contacter
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                { label: 'Année 2025 - 2026', value: 'Alternance Développement Mobile et DevOps', detail: '' },
                { label: 'Expérience phare', value: 'Stage CD74', detail: 'Patois Savoyard : Application mobile + PEVN + DevOps' },
                { label: 'Soft skills', value: 'Autonomie · Rigueur', detail: 'Travail en duo pendant 3 mois et en totale autonomie' },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-pretty">
                  <p className="text-sm text-white/60">{item.label}</p>
                  <p className="text-3xl font-semibold mt-3">{item.value}</p>
                  <p className="text-white/70 mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 text-pretty">
              <p className="text-sm text-white/60 mb-3">Projet phare</p>
              <p className="text-lg font-semibold">“Patois Savoyard”</p>
              <p className="text-white/70 mt-2 mb-4">
                Stage avril → juin 2025 : Application Flutter et interface d&rsquo;administration PEVN pour le CD74.
              </p>
              <Link href="/projects/patois-savoyard" className="text-emerald-300 font-semibold hover:underline">
                Voir le projet →
              </Link>
            </div>
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 text-pretty">
              <p className="text-sm text-white/60 mb-3">Compétences clés</p>
              <p className="text-lg font-semibold">Flutter · Vue.js · Docker</p>
              <p className="text-white/70 mt-2 mb-4">
                Réaliser (mobile), Gérer/Sécuriser (API PEVN), Administrer (GitLab CI/CD, SonarQube, auto-hébergement Debian).
              </p>
              <Link href="/about" className="text-emerald-300 font-semibold hover:underline">
                Voir mon parcours →
              </Link>
            </div>
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 text-pretty">
              <p className="text-sm text-white/60 mb-3">Hors-écran</p>
              <p className="text-lg font-semibold">Judo · Escalade · Culture japonaise</p>
              <p className="text-white/70 mt-2 mb-4">
                Discipline, dépassement de soi et curiosité tech — les mêmes ingrédients que j’emmène sur les projets.
              </p>
              <Link href="/contact" className="text-emerald-300 font-semibold hover:underline">
                Échanger →
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="https://github.com/MathisFPN" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white break-words">
              <Github className="w-6 h-6" /> Github
            </a>
            <a href="https://linkedin.com/in/mathis-frappin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white break-words">
              <Linkedin className="w-6 h-6" /> Linkedin
            </a>
            <a href="mailto:contact@mathisfrappin.dev" className="inline-flex items-center gap-2 text-white/80 hover:text-white break-words">
              <Mail className="w-6 h-6" /> mathis.frappin@etu.univ-smb.fr
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  )
}