import Link from 'next/link'

import Competences from '@/components/Competences'

const resources = [
  {
    title: 'Semestres 1-2',
    items: ['Bases dev (R1.01 → R2.02)', 'Architecture & OS (R1.03/R1.04)', 'SQL & statistiques (R1.05/R2.08)', 'PPP & communication (R1.12)'],
  },
  {
    title: 'Semestres 3-4',
    items: ['Web moderne & optimisation (R3.01 → R4.04)', 'Programmation système & réseaux (R3.05/R3.06)', 'Virtualisation & DevOps (R4.Real.08)', 'Management SI / droit (R3.10/R3.11)'],
  },
  {
    title: 'Semestre 5',
    items: ['Projets complexes (R5.Real.xx)', 'Qualité algorithmique & IA', 'Automatisation CI/CD', 'Leadership d’équipe & économie durable'],
  },
]

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
