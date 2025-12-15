export type Project = {
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
  acPrincipaux?: string[]
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
    acPrincipaux: [
      "AC11.01 | Implémenter des conceptions simples",
      "AC21.01 | Élaborer et implémenter une architecture logicielle",
      "AC16.01 | Travailler efficacement en équipe",
    ],
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
    // githubUrl removed for IoT Among Us
    date: '2025-02-20',
    badge: 'Projet IoT',
    acPrincipaux: [
      "AC12.01 | Analyser un problème avec méthode",
      "AC22.03 | Analyser et optimiser un code existant",
      "AC16.01 | Travailler efficacement en équipe",
    ],
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
    title: 'Galactic Shooter (Jeu WPF)',
    description: "Jeu de tir spatial à défilement vertical demandant réflexes et précision, développé sans moteur de jeu (tout est codé en C# natif).",
    longDescription:
      "Projet de 1ère année (SAE S1.01) : développement d'un 'Shoot'em up' type Bullet Hell en C# et WPF. Application lourde, architecture événementielle, gestion des états du jeu et optimisation de l'affichage dynamique.",
    image: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80',
    technologies: ['C#', 'WPF', 'XAML', 'Algorithmie'],
    liveUrl: '/wpf-galactic-shooter.pdf', // PDF à placer dans public/
    date: '2024-11-05',
    acPrincipaux: [
      "AC11.04 | Développer des interfaces utilisateurs",
      "AC21.01 | Élaborer et implémenter une architecture logicielle",
      "AC12.01 | Analyser un problème avec méthode",
    ],
    caseStudySections: [
      {
        title: 'Contexte',
        content: "Projet de 1ère année (SAE S1.01) : développement d'un Shoot'em up type Bullet Hell en C# et WPF. Jeu codé sans moteur, architecture événementielle, gestion des états du jeu et optimisation de l'affichage dynamique.",
      },
      {
        title: 'Preuve de compétence',
        content: "Développement d'une application lourde en C# avec le framework WPF. J'ai été responsable de l'architecture événementielle (communication entre les fenêtres Menu et Jeu) et de la logique algorithmique des tirs du joueur. J'ai également implémenté la gestion des états du jeu (Boucle de jeu, Pause, Game Over) et l'optimisation de l'affichage dynamique (Parallax des fonds).",
      },
    ],
  },
  {
    slug: 'unity-platformer',
    title: 'Escape from Quasar',
    description: 'Jeu 3D spatial de type Runner/Parkour où le joueur doit échapper à un trou noir.',
    longDescription: "Projet universitaire en équipe de 4 : développement d'un jeu de parcours 3D spatial à la première personne. Le joueur doit échapper à l'attraction d'un trou noir.",
    image: '/trou-noir-supermassif.jpg', // Place l'image dans public/
    technologies: ['Unity', 'C#', 'Physique du jeu', 'Level Design'],
    liveUrl: '/unity-escape-quasar.pdf', // PDF à placer dans public/
    date: '2024-07-22',
    acPrincipaux: [
      "AC12.01 | Analyser un problème avec méthode",
      "AC22.02 | Utiliser des techniques algorithmiques avancées",
      "AC16.01 | Travailler efficacement en équipe",
    ],
    caseStudySections: [
      {
        title: 'Contexte',
        content: "Projet universitaire réalisé en équipe de 4. Objectif : créer un jeu de parcours 3D spatial immersif."
      },
      {
        title: 'Gameplay',
        content: "Jeu de type Runner/Parkour spatial à la première personne où le joueur doit échapper à l'attraction d'un trou noir."
      },
      {
        title: 'Technologies',
        content: "Unity, C#, Physique du jeu (Gravity), Level Design."
      },
      {
        title: 'Preuve de compétence',
        content: "Développement de scripts C# pour la logique du jeu sous Unity. J'ai spécifiquement conçu et implémenté le système physique de gravité et d'attraction (simulation de la force du trou noir sur le joueur) ainsi que la gestion du cycle de vie du joueur (Respawn). J'ai également participé à 50% du Level Design pour créer des parcours adaptés aux mécaniques de déplacement (Wall ride, Grappin)."
      },
    ],
  },
  {
    slug: 'refonte-e-business',
    title: 'Upway – Site de vélos électriques reconditionnés',
    description: 'Projet universitaire : solutions de transport plus efficaces et écologiques pour les utilisateurs.',
    longDescription: "Upway est un projet universitaire de site de vélos électriques reconditionnés, mené en équipe de 5. Ce travail m’a permis de développer mes compétences en communication, organisation et gestion de projet.",
    image: '/upway.png', // Place ton image dans public/upway.jpg
    technologies: ['Laravel', 'PHP', 'PostgreSQL', 'SQL', 'JavaScript', 'Bootstrap'],
    date: '2024-03-14',
    acPrincipaux: [
      "AC15.01 | Identifier les besoins métiers",
      "AC25.02 | Planifier et suivre un projet informatique",
    ],
    caseStudySections: [
      {
        title: 'Présentation',
        content: "Upway propose des solutions de transport plus efficaces et écologiques pour les utilisateurs, en se concentrant sur la vente de vélos électriques reconditionnés."
      },
      {
        title: 'Travail universitaire',
        content: "Projet réalisé en groupe de 5 étudiants. Ce travail d’équipe a renforcé mes compétences en communication, organisation et gestion de projet."
      },
      {
        title: 'Stack technique',
        content: "Laravel, PHP, PostgreSQL, SQL, JavaScript, Bootstrap."
      },
      {
        title: 'Organisation et méthode',
        content: "Le projet a été mené en suivant une méthodologie agile, avec des réunions régulières et une répartition claire des tâches."
      },
      {
        title: 'Conception',
        content: "La conception s’est appuyée sur des diagrammes UML, une base de données relationnelle et une gestion des données conforme aux bonnes pratiques."
      },
      {
        title: 'Fonctionnalités',
        content: "Le site permet de parcourir les offres de vélos, de simuler un achat, et de gérer les commandes côté administrateur."
      },
    ],
  },
]