import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact – Mathis Frappin',
  description: '',
}

const channels = [
  {
    title: 'Email direct',
    value: 'contact@mathisfrappin.dev',
    href: 'mailto:contact@mathisfrappin.dev',
    detail: 'Mon adresse mail universitaire.',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/mathis-frappin',
    href: 'https://linkedin.com/in/mathis-frappin',
    detail: 'Pour voir mon magnifique profil.',
  },
]

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-white">
      <header className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-500">Contact</p>
        <h1 className="text-4xl font-bold text-balance">Pour encore plus d&rsquo;informations sur moi</h1>
        <p className="text-white/75 text-pretty">Si vous souhaitez me contacter, vous pouvez le faire à l&rsquo;adresse mail suivante.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {channels.map((channel) => (
          <a
            key={channel.title}
            href={channel.href}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 hover:shadow-lg transition text-white break-words"
            target={channel.href.startsWith('http') ? '_blank' : undefined}
            rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <p className="text-sm uppercase text-emerald-300 mb-2">{channel.title}</p>
            <p className="text-xl font-semibold text-white text-pretty break-all">{channel.value}</p>
            <p className="text-white/70 text-sm mt-2 text-pretty">{channel.detail}</p>
          </a>
        ))}
      </section>

      <section className="rounded-3xl bg-white/5 border border-white/10 p-8 text-white">
        <h2 className="text-2xl font-semibold mb-6">Checklist découverte</h2>
        <ul className="space-y-3 text-white/80">
          <li>• Objectif métier (KPI, adoption, revenu, dette à résorber).</li>
          <li>• Stack actuelle et contraintes (infra, équipe, délais).</li>
          <li>• Budget / énergie disponible et jalons déjà fixés.</li>
        </ul>
      </section>
    </main>
  )
}
