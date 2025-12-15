import Link from 'next/link'

import Competences from '@/components/Competences'

export default function CompetencesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-100 space-y-16">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Compétences</p>
        <h1 className="text-4xl font-bold text-balance">Les 6 compétences du BUT Informatique</h1>
        <p className="text-slate-300 max-w-3xl text-pretty">
          Chaque projet mené (CD74, IoT Among Us, WPF, Unity…) valide au moins une des six compétences officielles du BUT. Voici comment elles ont été
          réparties dans mon parcours.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-emerald-300">
          <a href="#competences-grid" className="hover:underline underline-offset-4">Aller aux compétences</a>
          <Link href="/projects" className="hover:underline underline-offset-4">Explorer les projets</Link>
        </div>
      </header>

      <section id="competences-grid">
        <Competences />
      </section>
    </main>
  )
}
