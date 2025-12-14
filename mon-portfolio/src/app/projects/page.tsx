import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'

const orderedProjects = [...projects].sort((a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 text-white">
      <header className="max-w-3xl mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Case studies</p>
        <h1 className="text-4xl font-bold mt-3 mb-4 text-balance">Mes Projets</h1>
        <p className="text-white/70 text-pretty">
          Sélection de projets académiques, professionnels et personnels illustrant les six compétences du BUT : IoT, DevOps, mobile et UX.
        </p>
      </header>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orderedProjects.map(project => (
          <Link 
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group"
          >
            <div
              className={`rounded-2xl border overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition bg-white/5 text-white/90 border-white/10 ${
                project.badge ? 'ring-1 ring-emerald-400/40 shadow-emerald-400/30' : ''
              }`}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0b0d12]/80 backdrop-blur px-3 py-1 text-xs font-semibold rounded-full text-white">
                  {new Date(project.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                </div>
                {project.badge && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    {project.badge}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-emerald-300 transition text-white">
                  {project.title}
                </h2>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
