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
  badge?: string
  caseStudySections?: {
    title: string
    content: string
  }[]
}

export const projects: Project[] = [
  {
    slug: 'patois-savoyard',
    title: 'Patois Savoyard – CD74',
    description:
      'Étude de cas : orchestrer mobile Flutter, interface PEVN et infra auto-hébergée pour apprendre une langue régionale.',
    longDescription:
      "Stage de fin d'études (avril → juin 2025) au Conseil Départemental de la Haute-Savoie. Objectif : livrer un écosystème complet — application mobile, console web pour linguistes et pipeline DevOps — afin de démocratiser l'apprentissage du patois savoyard.",
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Flutter', 'Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'GitLab CI/CD'],
    date: '2025-06-15',
    badge: 'Étude de cas',
    caseStudySections: [
      {
        title: 'Mobile — Reprendre et réaliser',
        content:
          "Reprise d'un prototype Flutter non exploitable : refonte en MVC, centralisation de l'état et couche de persistance locale/serveur. Ajout d'un système de comptes, XP et niveaux synchronisés pour suivre les progrès des apprenants.",
      },
      {
        title: 'Web & Backend — Gérer et sécuriser',
        content:
          "Conception d'une interface d'administration pour les linguistes avec la stack PEVN (PostgreSQL, Express, Vue.js, Node.js). Mise à disposition d'une API REST protégée par tokens JWT pour piloter contenus, parcours et statistiques.",
      },
      {
        title: 'DevOps & Infra — Administrer',
        content:
          "Mise en production auto-hébergée : serveurs Debian, réseau LAN isolé, conteneurisation Docker et pipelines GitLab CI/CD enrichis d'une analyse SonarQube pour renforcer la qualité et la traçabilité des livrables.",
      },
    ],
  },
  {
    slug: 'iot-among-us',
    title: 'IoT Among Us',
    description: 'Jeu de déduction connecté : Raspberry Pi, MQTT et IA locale pour traquer l’imposteur.',
    longDescription:
      "Projet académique mené à 4 : création d'un clone d'Among Us orienté IoT. Chaque Raspberry Pi incarne un capteur de ville, l'arbitre central collecte les températures et une IA Ollama aide à repérer l'imposteur.",
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'MQTT', 'Raspberry Pi', 'Ollama', 'PyGame'],
    githubUrl: 'https://github.com/MathisFPN/iot-among-us',
    date: '2025-02-20',
    badge: 'Projet IoT',
    caseStudySections: [
      {
        title: 'Architecture distribuée',
        content:
          "Broker MQTT orchestrant les topics Connexion/Role/Ville/Température/Vote : l'arbitre lance 5 rounds, attribue les villes et centralise les mesures pour alimenter les phases de vote.",
      },
      {
        title: 'Clients Raspberry Pi',
        content:
          "Scripts Python pour récupérer les vraies températures via API météo, ajouter du bruit côté imposteur et exposer une interface PyGame affichant la partie en temps réel.",
      },
      {
        title: 'IA Ollama',
        content:
          "Déploiement d'un modèle local aidant à analyser les écarts et à générer des défenses crédibles lors des votes, offrant un conseil automatisé aux joueurs comme à l'arbitre.",
      },
      {
        title: 'Compétences BUT mobilisées',
        content:
          'Réaliser (Python, PyGame), Optimiser (traitement IA), Administrer (réseau MQTT, Raspberry Pi) et Travailler en équipe (répartition des composants, intégration continue).',
      },
    ],
  },
  {
    slug: 'jeu-wpf-mvvm',
    title: 'Jeu de gestion — C#/WPF',
    description: 'Gameplay desktop structuré en MVVM avec conception objet poussée.',
    longDescription:
      "Production d'un jeu de gestion WPF : modélisation orientée objet, binding MVVM et moteur de sauvegarde permettant de sérialiser les parties. Focus sur la maintenabilité du code et les tests unitaires.",
    image: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80',
    technologies: ['C#', 'WPF', 'MVVM', 'SQLite'],
    githubUrl: 'https://github.com/MathisFPN/wpf-game',
    date: '2024-11-05',
  },
  {
    slug: 'unity-platformer',
    title: 'Prototype Unity',
    description: 'Création d’un platformer avec scripts C# et tuning physique.',
    longDescription:
      "Développement d'un prototype Unity : gestion des inputs, contrôleur physique custom et systèmes de feedback (particules, audio). Travail sur l'optimisation des scripts et l'intégration d'assets.",
    image: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Unity', 'C#', 'Cinemachine'],
    githubUrl: 'https://github.com/MathisFPN/unity-platformer',
    date: '2024-07-22',
  },
  {
    slug: 'refonte-e-business',
    title: 'Refonte e-business',
    description: 'Audit UX et intégration responsive pour un site marchand régional.',
    longDescription:
      "Mission orientée client : ateliers de co-conception, refonte de l'ergonomie, intégration responsive (Tailwind) et optimisation des parcours pour augmenter la conversion sur desktop et mobile.",
    image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Vue.js', 'Tailwind CSS', 'Netlify'],
    liveUrl: 'https://demo.mathisfrappin.dev/ebusiness',
    date: '2024-03-14',
  },
]