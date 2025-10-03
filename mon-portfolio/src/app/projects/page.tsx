import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Mes Projets</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <Link 
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48 bg-gray-200">
                {/* Image à ajouter plus tard */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Image du projet
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
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
