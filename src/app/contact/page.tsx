
const channels = [
  {
    title: 'Email direct',
    value: 'mathis.frappin@etu.univ-smb.fr',
    href: 'mailto:mathis.frappin@etu.univ-smb.fr',
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

      <section className="contact-form-sect mt-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Contactez-moi</h2>
        <form className="contact-form flex flex-col gap-4 bg-white/5 p-8 rounded-3xl border border-white/10" action="https://formspree.io/f/xrbnvggw" method="POST">
          <label htmlFor="name" className="font-semibold">Votre nom et votre prénom</label>
          <input type="text" id="name" name="name" placeholder="Votre nom et prénom" required className="p-2 rounded bg-white/10 border border-white/20 text-white" />

          <label htmlFor="company" className="font-semibold">Votre entreprise</label>
          <input type="text" id="company" name="company" placeholder="Votre entreprise" className="p-2 rounded bg-white/10 border border-white/20 text-white" />

          <div className="flex gap-4 items-center">
            <input type="checkbox" id="stage" name="stage" className="accent-purple-500" />
            <label htmlFor="stage">Opportunité de stage</label>
            <input type="checkbox" id="alternance" name="alternance" className="accent-purple-500 ml-6" />
            <label htmlFor="alternance">Opportunité d&rsquo;alternance</label>
          </div>

          <label htmlFor="email" className="font-semibold">Votre e-mail</label>
          <input type="email" id="email" name="email" placeholder="Votre e-mail" required className="p-2 rounded bg-white/10 border border-white/20 text-white" />

          <label htmlFor="subject" className="font-semibold">Objet</label>
          <input type="text" id="subject" name="subject" placeholder="Objet" required className="p-2 rounded bg-white/10 border border-white/20 text-white" />

          <label htmlFor="message" className="font-semibold">Votre message</label>
          <textarea id="message" name="message" rows={5} placeholder="Votre message" required className="p-2 rounded bg-white/10 border border-white/20 text-white" />

          <button type="submit" className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition">Envoyer</button>
        </form>
      </section>

    </main>
  )
}
