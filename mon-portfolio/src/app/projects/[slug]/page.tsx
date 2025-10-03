import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = (await params) as { slug: string }
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/projects" className="text-sm text-blue-600 hover:underline">
        ← Retour à la liste des projets
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-4">{project!.title}</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-gray-700 mb-4">{project!.longDescription}</p>

          <div className="flex gap-3 mb-4 flex-wrap">
            {project!.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project!.githubUrl && (
              <a
                href={project!.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white bg-gray-800 px-4 py-2 rounded hover:opacity-90"
              >
                Voir le code
              </a>
            )}

            {project!.liveUrl && (
              <a
                href={project!.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-800 border px-4 py-2 rounded hover:bg-gray-100"
              >
                Version live
              </a>
            )}
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="w-full rounded overflow-hidden bg-gray-100">
            {project!.image ? (
              <Image
                src={project!.image}
                alt={project!.title}
                width={800}
                height={600}
                className="object-cover w-full h-48"
              />
            ) : (
              <div className="h-48 flex items-center justify-center text-gray-400">
                Pas d'image
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
