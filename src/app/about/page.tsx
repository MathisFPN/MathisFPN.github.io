import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'À propos – Mathis Frappin',
  description: 'Parcours, compétences et personnalité de Mathis Frappin, étudiant BUT Informatique.',
}

const softSkills = [
  {
    title: 'Autonomie',
    description: 'Capable de reprendre un prototype seul (Flutter) et de le livrer jusqu’en production.',
  },
  {
    title: 'Rigueur',
    description: 'Architecture MVC, documentation et pipelines GitLab pour sécuriser chaque livrable.',
  },
  {
    title: 'Adaptation',
    description: 'Travail en binôme avec les linguistes CD74 et autonomie complète sur la partie DevOps.',
  },
]

const educationPath = [
  {
    period: '2023 → 2026',
    title: 'BUT Informatique (Bachelor Universitaire de Technologie)',
    subtitle: 'Université Savoie Mont Blanc — IUT Annecy (Annecy-le-Vieux)',
    details:
      'BUT Informatique (Baccalauréat technique en informatique) Diplôme en 3 ans - Troisième année en cours',
    highlights: [
      'Projets tutorés : IoT Among Us, refonte Upway',
      'Stages et SAE alignés sur les 6 compétences nationales',
    ],
  },
  {
    period: '2022',
    title: 'Baccalauréat général (Mathématiques & Physique-Chimie) — Mention Assez Bien',
    subtitle: 'Lycée Mme de Staël — Saint-Julien-en-Genevois',
    details: 'Baccalauréat français (diplôme d’études secondaires spécialisées en sciences et en mathématiques) avec mention assez bien.',
    highlights: [
      'Projet de spécialité sur la visualisation de données',
      'Option mathématiques expertes pour consolider l’analyse et la modélisation',
    ],
  },
]

const languages = [
  {
    flag: 'FR',
    title: 'Français',
    detail: 'Langue maternelle',
  },
  {
    flag: 'GB',
    title: 'Anglais',
    detail: 'Niveau intermédiaire B2+',
  },
  {
    flag: 'ES',
    title: 'Espagnol',
    detail: 'Niveau élémentaire',
  },
]

const hardSkills = [
  {
    group: 'Frontend & Mobile',
    skills: ['Flutter / Dart', 'Vue.js & Tailwind CSS', 'Next.js / React'],
  },
  {
    group: 'Backend & Données',
    skills: ['Node.js / Express', 'PostgreSQL & SQL avancé', 'API REST sécurisées (JWT)'],
  },
  {
    group: 'DevOps & Qualité',
    skills: ['Docker & auto-hébergement Debian', 'Git / GitLab CI/CD', 'SonarQube, monitoring et logs'],
  },
]

const hobbies = [
  {
    title: 'Judo',
    detail: 'Discipline, respect et gestion du stress.',
  },
  {
    title: 'Escalade',
    detail: 'Lecture de voie = analyse de problème.',
  },
  {
    title: 'Culture japonaise & jeux vidéo',
    detail: 'Curiosité tech, créativité et storytelling.',
  },
]

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12 text-white">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-500">À propos</p>
        <h1 className="text-4xl font-bold text-balance">Développement d&rsquo;applications</h1>
        <p className="text-white/80 max-w-3xl text-pretty">
          Je suis Mathis Frappin, étudiant en 3ᵉ année de BUT Informatique à l’IUT d’Annecy. Passionné par les technologies de l&rsquo;information, je
          suis enthousiaste à l&rsquo;idée de mettre à profit mes compétences et ma créativité pour stimuler l&rsquo;innovation et contribuer à des solutions
          efficaces.
        </p>
      </header>


      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-500">Expériences Professionnelles</p>
          <h2 className="text-2xl font-semibold text-balance">Mon parcours professionnel</h2>
        </div>
        <div className="space-y-6">
          <article className="relative border-l border-white/10 pl-8">
            <span className="absolute left-[-6px] top-4 h-3 w-3 rounded-full border-2 border-[#0b0d12] bg-emerald-400" />
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between text-white">
              <h3 className="text-xl font-semibold">Département de la Haute-Savoie (Stage)</h3>
              <span className="text-sm font-semibold text-emerald-300">2025</span>
            </div>
            <p className="text-white/80 mt-2">Développement d&rsquo;une application mobile en Flutter pour l&rsquo;apprentissage du patois savoyard, accompagnée d’une interface web d’administration (Vue.js + API). Mise en place d’une intégration continue (GitLab CI/CD, SonarQube).</p>
          </article>
          <article className="relative border-l border-white/10 pl-8">
            <span className="absolute left-[-6px] top-4 h-3 w-3 rounded-full border-2 border-[#0b0d12] bg-emerald-400" />
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between text-white">
              <h3 className="text-xl font-semibold">Université Savoie Mont Blanc - Annecy, France</h3>
              <span className="text-sm font-semibold text-emerald-300">2024 - 2025</span>
            </div>
            <p className="text-white/80 mt-2">Refonte d&rsquo;un site web de commerce en ligne, en l&rsquo;adaptant aux besoins d&rsquo;un client.</p>
          </article>
          <article className="relative border-l border-white/10 pl-8">
            <span className="absolute left-[-6px] top-4 h-3 w-3 rounded-full border-2 border-[#0b0d12] bg-emerald-400" />
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between text-white">
              <h3 className="text-xl font-semibold">Carrefour Provencia (Supermarché, 50 à 99 employés) - Cruseilles, France</h3>
              <span className="text-sm font-semibold text-emerald-300">Étés 2023 - 2024</span>
            </div>
            <p className="text-white/80 mt-2">Missions : Caissier, réception des paiements et émission des reçus, suivi de toutes les opérations de caisse et de crédit.</p>
          </article>
        </div>
      </section>


      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-500">Éducation</p>
          <h2 className="text-2xl font-semibold text-balance">Un parcours académique structuré et professionnalisant</h2>
        </div>
        <div className="space-y-6">
          {educationPath.map((stage) => (
            <article key={stage.title} className="relative border-l border-white/10 pl-8">
              <span className="absolute left-[-6px] top-4 h-3 w-3 rounded-full border-2 border-[#0b0d12] bg-emerald-400" />
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between text-white">
                <h3 className="text-xl font-semibold">{stage.title}</h3>
                <span className="text-sm font-semibold text-emerald-300">{stage.period}</span>
              </div>
              <p className="text-sm text-white/60">{stage.subtitle}</p>
              <p className="text-white/80 mt-3">{stage.details}</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-white/80">
                {stage.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-500">Soft skills</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {softSkills.map((skill) => (
            <article key={skill.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/90">
              <h3 className="text-lg font-semibold mb-2 text-white">{skill.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-500">Langues</p>
          <h2 className="text-2xl font-semibold text-balance">Naviguer entre trois cultures</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {languages.map((language) => (
            <div key={language.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 flex flex-col gap-2 text-left">
              <span className="text-3xl" aria-hidden="true">{language.flag}</span>
              <p className="text-lg font-semibold text-white">{language.title}</p>
              <p className="text-white/70 text-sm">{language.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Parcours</h2>
        <div className="space-y-4">
          {timeline.map((item) => (
            <article key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="text-sm text-purple-500 font-semibold">{item.date}</span>
              </div>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </article>
          ))}
        </div>
      </section> */}

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Compétences techniques</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {hardSkills.map((group) => (
            <article key={group.group} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/90">
              <h3 className="text-lg font-semibold text-emerald-300">{group.group}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {group.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8">
        <h2 className="text-2xl font-semibold mb-4">Loisirs & équilibre</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {hobbies.map((hobby, idx) => (
            <div key={hobby.title} className="rounded-2xl bg-white/10 p-4 flex flex-col items-center">
              {/* Espace image discipline */}
              <div className="w-full flex justify-center mb-3">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-white/20 border border-white/20">
                  {/* Remplacez /hobby1.jpg, /hobby2.jpg, /hobby3.jpg par vos images */}
                  <Image
                    src={`/hobby${idx + 1}.jpg`}
                    alt={`Photo ${hobby.title}`}
                    className="object-cover w-full h-full"
                    width={128}
                    height={128}
                    priority={idx === 0}
                  />
                </div>
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">{hobby.title}</p>
              <p className="mt-2 text-white">{hobby.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
