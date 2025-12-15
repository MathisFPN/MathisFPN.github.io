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
          <a href="#ancrage-pedagogique" className="hover:underline underline-offset-4">Voir l’ancrage pédagogique</a>
          <Link href="/projects" className="hover:underline underline-offset-4">Explorer les projets</Link>
        </div>
      </header>

      <section id="competences-grid">
        <Competences />
      </section>

      <section id="ancrage-pedagogique" className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-balance">Ancrage pédagogique</h2>
        <p className="text-slate-300 mt-2 text-pretty">
          Les ressources du BUT sont structurées par niveaux. Chaque brique listée ci-dessous correspond aux UE/ressources que je mobilise dans mes projets.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {resources.map((block) => (
            <div key={block.title} className="rounded-2xl border border-white/10 bg-[#0b0d12] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{block.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {block.items.map((item) => {
                  // Mapping manuel ressource → compétence
                  let competence = '';
                  if (item.includes('Bases dev')) competence = 'Réaliser';
                  else if (item.includes('Architecture')) competence = 'Administrer';
                  else if (item.includes('SQL')) competence = 'Gérer';
                  else if (item.includes('PPP')) competence = 'Collaborer';
                  else if (item.includes('Web')) competence = 'Réaliser';
                  else if (item.includes('optimisation')) competence = 'Optimiser';
                  else if (item.includes('Programmation système')) competence = 'Administrer';
                  else if (item.includes('Virtualisation')) competence = 'Administrer';
                  else if (item.includes('DevOps')) competence = 'Administrer';
                  else if (item.includes('Management SI')) competence = 'Conduire';
                  else if (item.includes('droit')) competence = 'Conduire';
                  else if (item.includes('Projets complexes')) competence = 'Conduire';
                  else if (item.includes('Qualité algorithmique')) competence = 'Optimiser';
                  else if (item.includes('IA')) competence = 'Optimiser';
                  else if (item.includes('CI/CD')) competence = 'Administrer';
                  else if (item.includes('Leadership')) competence = 'Collaborer';
                  else competence = '';
                  return (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-emerald-300">→</span>
                      <span>{item}</span>
                      {competence && (
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-900/40 text-emerald-300 text-xs font-semibold">
                          {competence}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
