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
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind'],
    githubUrl: 'https://github.com/ton-username/ecommerce',
    liveUrl: 'https://demo.com',
    date: '2024-01'
  },
  {
    slug: 'portfolio-next',
    title: 'Portfolio Next.js',
    description: 'Portfolio moderne avec Next.js et Framer Motion',
    longDescription: 'Création de ce portfolio avec les dernières technologies React...',
    image: '/projects/portfolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    githubUrl: 'https://github.com/ton-username/portfolio',
    date: '2024-03'
  }
]