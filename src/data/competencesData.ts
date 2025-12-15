import { Cpu, Target, Users, Network, Database, Book } from 'lucide-react';

export const competencesData = [
  {
    id: 1,
    title: "Réaliser un développement d'application (Réaliser)",
    icon: Cpu,
    composantesEssentielles: [
      "CE1.01 | en respectant les besoins décrits par le client",
      "CE1.03 | en appliquant les principes algorithmiques",
      "CE1.04 | en veillant à la qualité du code et à sa documentation",
      "CE1.06 | en choisissant les ressources techniques appropriées",
    ],
    situationsProfessionnelles: [
      "Élaborer une application informatique",
      "Faire évoluer une application informatique",
      "Maintenir en conditions opérationnelles une application informatique",
    ],
    niveaux: [
      {
        title: "Niveau 1 - Développer des applications informatiques simples",
        ac: [
          "AC11.01 | Implémenter des conceptions simples",
          "AC11.02 | Élaborer des conceptions simples",
          "AC11.03 | Faire des essais et évaluer leurs résultats en regard des spécifications",
          "AC11.04 | Développer des interfaces utilisateurs",
        ],
      },
      {
        title: "Niveau 2 - Partir des exigences et aller jusqu’à une application complète",
        ac: [
          "AC21.01 | Élaborer et implémenter une architecture logicielle",
          "AC21.02 | Appliquer des principes algorithmiques avancés",
          "AC21.03 | Faire évoluer une application existante",
          "AC21.04 | Intégrer des solutions dans un environnement de production",
        ],
      },
      {
        title: "Niveau 3 - Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…) :",
        ac: [
          "AC31.01 | Choisir et implémenter les architectures adaptées",
          "AC31.02 | Faire évoluer une application existante",
          "AC31.03 | Intégrer des solutions dans un environnement de production",
        ],
      },
    ],
    projetsAssocies: ["Patois Savoyard", "IoT Among Us"],
  },
  {
    id: 2,
    title: "Optimiser des applications (Optimiser)",
    icon: Target,
    composantesEssentielles: [
      "CE2.01 | en formalisant et modélisant des situations complexes",
      "CE2.02 | en recensant les algorithmes et les structures de données usuels",
      "CE2.03 | en s’appuyant sur des schémas de raisonnement",
      "CE2.04 | en justifiant les choix et validant les résultats",
    ],
    situationsProfessionnelles: [
      "Améliorer les performances des programmes dans des contextes contraints",
      "Limiter l’impact environnemental d’une application informatique",
      "Mettre en place des applications informatiques adaptées et efficaces",
    ],
    niveaux: [
      {
        title: "Niveau 1 - Appréhender et construire des algorithmes",
        ac: [
          "AC12.01 | Analyser un problème avec méthode",
          "AC12.02 | Comparer des algorithmes pour des problèmes classiques",
          "AC12.03 | Expérimenter et analyser les performances d'un programme",
        ],
      },
      {
        title: "Niveau 2 - Sélectionner les algorithmes adéquats pour répondre à un problème donné",
        ac: [
          "AC22.01 | Choisir des structures de données complexes adaptées au problème",
          "AC22.02 | Utiliser des techniques algorithmiques avancées",
          "AC22.03 | Analyser et optimiser un code existant",
        ],
      },
      {
        title: "Niveau 3 - Analyser et optimiser des applications",
        ac: [
          "AC32.01 | Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire, montée en charge)",
          "AC32.02 | Profiler, analyser et justifier le comportement d'un code existant",
          "AC32.03 | Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application",
        ],
      },
    ],
    projetsAssocies: ["IoT Among Us", "Jeu WPF MVVM"],
  },
  {
    id: 3,
    title: "Collaborer au sein d'une équipe informatique (Collaborer)",
    icon: Users,
    composantesEssentielles: [
      "CE3.01 | en sécurisant le système d’information",
      "CE3.02 | en offrant une qualité de service optimale",
      "CE3.03 | en appliquant les normes en vigueur et les bonnes pratiques architecturales et de sécurité",
      "CE3.04 | en assurant la continuité d’activité",
    ],
    situationsProfessionnelles: [
      "Lancer un nouveau projet",
      "Organiser son travail en relation avec celui de son équipe",
      "Élaborer, gérer et transmettre de l’information",
    ],
    niveaux: [
      {
        title: "Niveau 1 : Identifier ses aptitudes pour travailler dans une équipe",
        ac: [
          "AC16.01 | Travailler efficacement en équipe",
          "AC16.02 | Communiquer avec les différents acteurs",
        ],
      },
      {
        title: "Niveau 2 : Situer son rôle et ses missions au sein d’une équipe informatique",
        ac: [
          "AC26.01 | Participer à une organisation de projet",
          "AC26.02 | Développer une communication professionnelle",
        ],
      },
      {
        title: "Niveau 3 : Manager une équipe informatique",
        ac: [
          "AC36.01 | Organiser et partager une veille technologique et informationnelle",
          "AC36.02 | Identifier les enjeux de l'économie de l'innovation numérique",
          "AC36.03 | Guider la conduite du changement informatique au sein d'une organisation",
          "AC36.04 | Accompagner le management de projet informatique",
        ],
      },
    ],
    projetsAssocies: ["Patois Savoyard", "Refonte e-Business"],
  },
  {
    id: 4,
    title: "Administrer des systèmes informatiques communicants complexes (Administrer)",
    icon: Network,
    composantesEssentielles: [
      "CE4.01 | en respectant les réglementations sur le respect de la vie privée et la protection des données personnelles",
      "CE4.02 | en respectant les enjeux économiques, sociétaux et écologiques de l’utilisation du stockage de données, ainsi que des différentes infrastructures (data centers, cloud, etc.)",
      "CE4.03 | en s’appuyant sur des bases mathématiques",
      "CE4.05 | en assurant la cohérence et la qualité",
    ],
    situationsProfessionnelles: [
      "Déployer une nouvelle architecture technique",
      "Améliorer une infrastructure existante",
      "Sécuriser les applications et les services",
    ],
    niveaux: [
      {
        title: "Niveau 1 - Installer et configurer un poste de travail",
        ac: [
          "AC13.01 | Identifier les différents composants d'un système numérique",
          "AC13.02 | Utiliser les fonctionnalités de base d'un système multitâche",
          "AC13.03 | Installer et configurer un poste de travail",
        ],
      },
      {
        title: "Niveau 2 - Déployer des services dans une architecture réseau",
        ac: [
          "AC23.01 | Installer et configurer des services réseaux",
          "AC23.02 | Administrer un système informatique multi-utilisateurs",
          "AC23.03 | Mettre en œuvre des mécanismes de sécurité",
        ],
      },
    ],
    projetsAssocies: ["IoT Among Us", "Patois Savoyard"],
  },
  {
    id: 5,
    title: "Gérer des données de l'information (Gérer)",
    icon: Database,
    composantesEssentielles: [
      "CE5.04 | en adoptant une démarche proactive, créative et critique",
      "CE5.02 | en respectant les règles juridiques et les normes en vigueur",
      "CE5.01 | en communiquant efficacement avec les différents acteurs d’un projet",
      "CE5.03 | en sensibilisant à une gestion éthique, responsable, durable et interculturelle",
    ],
    situationsProfessionnelles: [
      "Lancer un nouveau projet",
      "Sécuriser des données",
      "Exploiter des données pour la prise de décisions",
    ],
    niveaux: [
      {
        title: "Niveau 1 - Concevoir et mettre en place une base de données à partir d’un cahier des charges client",
        ac: [
          "AC14.01 | Mettre en place une base de données relationnelle",
          "AC14.02 | Interroger une base de données avec un langage adapté",
        ],
      },
      {
        title: "Niveau 2 - Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
        ac: [
          "AC24.01 | Optimiser une base de données",
          "AC24.02 | Assurer la cohérence et la qualité des données",
        ],
      },
    ],
    projetsAssocies: ["Refonte e-Business", "Patois Savoyard"],
  },
  {
    id: 6,
    title: "Conduire un projet (Conduire)",
    icon: Book,
    composantesEssentielles: [
      "CE601 | en inscrivant sa démarche au sein d’une équipe pluridisciplinaire",
      "CE602 | en accompagnant la mise en œuvre des évolutions informatiques",
      "CE603 | en veillant au respect des contraintes juridiques",
      "CE604 | en développant une communication efficace et collaborative",
    ],
    situationsProfessionnelles: [
      "Lancer un nouveau projet",
      "Piloter le maintien d’un projet en condition opérationnelle",
      "Faire évoluer un système d’information",
    ],
    niveaux: [
      {
        title: "Niveau 1 : Identifier les besoins métiers des clients et des utilisateurs",
        ac: [
          "AC15.01 | Identifier les besoins métiers",
          "AC15.02 | Appliquer une démarche de gestion de projet",
        ],
      },
      {
        title: "Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
        ac: [
          "AC25.01 | Formaliser les besoins d'un client",
          "AC25.02 | Planifier et suivre un projet informatique",
        ],
      },
    ],
    projetsAssocies: ["Refonte e-Business", "IoT Among Us"],
  },
];
