import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Projet introuvable',
    }
  }

  return {
    title: `${project.title} – Mathis Frappin`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 text-slate-100">
      <Link href="/projects" className="text-sm text-purple-600 hover:underline">
        ← Retour aux études de cas
      </Link>

      <div className="mt-6 mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Projet</p>
        <h1 className="text-4xl font-bold mt-2 mb-4 text-balance">{project.title}</h1>
        <p className="text-slate-200 max-w-3xl text-pretty break-words">{project.longDescription}</p>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
        <article className="space-y-6">
          <section className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Objectif</h2>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Stack et livrables</h2>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold hover:bg-gray-50"
                >
                  Voir le code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-700"
                >
                  Version live
                </a>
              )}
            </div>
          </section>

          {project.caseStudySections && project.caseStudySections.length > 0 && (
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Étude de cas</h2>
              <div className="space-y-4">
                {project.caseStudySections.map((section) => (
                  <div key={section.title}>
                    <p className="text-xs uppercase tracking-[0.3em] text-purple-500">{section.title}</p>
                    <p className="text-gray-700 mt-2 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>

        <aside className="space-y-6">
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="h-72 w-full object-cover"
              priority
            />
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Livraison</dt>
                <dd className="font-semibold">
                  {new Date(project.date).toLocaleDateString('fr-FR', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Rôle</dt>
                <dd className="font-semibold">Lead Developer</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Scope</dt>
                <dd className="font-semibold">Architecture → livraison</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </main>
  )
}
