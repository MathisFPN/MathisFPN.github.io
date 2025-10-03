export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  date: string
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-laravel',
    title: 'E-commerce Laravel',
    description: 'Plateforme e-commerce complète avec Laravel et Vue.js',
    longDescription: 'Développement d\'une plateforme e-commerce from scratch avec gestion des produits, panier, paiement Stripe, espace admin...',
    image: '/projects/ecommerce.jpg',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    githubUrl: 'https://github.com/MathisFPN/Poke-mon-Trainer-Manager',
    date: '2025-0'
  }
]