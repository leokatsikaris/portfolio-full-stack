import type { Experience, ExperienceCopy } from "../types";
// Dates and H+Trace facts: user-provided CV_Leonel_Katsikaris.pdf, page 1.
// Phinxlab and Aulasneo descriptions follow the brief. No inferred metrics.
const pendingCopy: ExperienceCopy = {
  role: null,
  project: null,
  headline: null,
  description: null,
  context: null,
  work: [],
  impact: null,
};
export const experience: Experience[] = [
  {
    id: "phinxlab",
    company: "Phinxlab",
    start: "2024-11",
    end: null,
    current: true,
    stack: [
      "React",
      "TypeScript / JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TypeORM",
      "Material UI",
      "AWS",
      "Git",
    ],
    content: {
      es: {
        role: "Fullstack Developer",
        project: "Mi Escuela",
        headline:
          "Hacer evolucionar un producto del que dependen procesos reales.",
        description:
          "Plataforma educativa de gran escala para la gestión académica de instituciones públicas de la Ciudad de Buenos Aires.",
        context:
          "Múltiples perfiles de usuario, grandes volúmenes de información, reglas de negocio complejas y funcionalidades críticas en evolución constante.",
        work: [
          "Desarrollo funcionalidades de punta a punta: interfaces React, APIs REST y lógica backend con Node.js.",
          "Implemento reglas de negocio, roles y permisos, conectando frontend, backend y datos.",
          "Trabajo con PostgreSQL y TypeORM para optimizar consultas, investigar problemas y mejorar performance.",
          "Mantengo y hago evolucionar funcionalidades existentes con foco en estabilidad, escala y mantenibilidad.",
        ],
        impact:
          "Contribuyo a la evolución, estabilidad y performance de una plataforma del ámbito educativo público, cuidando tanto su uso diario como su mantenimiento a largo plazo.",
      },
      en: {
        role: "Fullstack Developer",
        project: "Mi Escuela",
        headline: "Evolving a product that real processes depend on.",
        description:
          "A large-scale education platform for academic management in public institutions in the City of Buenos Aires.",
        context:
          "Multiple user profiles, large volumes of information, complex business rules and critical features that continually evolve.",
        work: [
          "Build end-to-end features: React interfaces, REST APIs and Node.js backend logic.",
          "Implement business rules, roles and permissions, connecting frontend, backend and data.",
          "Work with PostgreSQL and TypeORM to optimize queries, investigate issues and improve performance.",
          "Maintain and evolve existing features with stability, scale and maintainability in mind.",
        ],
        impact:
          "Contribute to the evolution, stability and performance of a public education platform, considering both daily use and long-term maintenance.",
      },
    },
  },
  {
    id: "aulasneo",
    company: "Aulasneo",
    start: "2022-10",
    end: "2024-11",
    stack: ["React", "Java", "Python"],
    content: {
      es: {
        role: "Fullstack Developer",
        project: "Plataforma educativa",
        headline: "Modernizar la arquitectura. Acompañar al producto.",
        description:
          "Evolución técnica de una plataforma educativa hacia una arquitectura más moderna.",
        context:
          "Una solución monolítica basada en HTML que debía evolucionar hacia una arquitectura de microservicios.",
        work: [
          "Participé en la migración del monolito hacia una arquitectura moderna basada en microservicios.",
          "Trabajé con React, Java y Python en la evolución del frontend y backend de la plataforma.",
        ],
        impact:
          "Contribuí a la modernización técnica y a la evolución del producto educativo.",
      },
      en: {
        role: "Fullstack Developer",
        project: "Education platform",
        headline: "Modernize the architecture. Move the product forward.",
        description:
          "Technical evolution of an educational platform toward a more modern architecture.",
        context:
          "An HTML-based monolithic solution evolving toward a microservices architecture.",
        work: [
          "Participated in the migration from the monolith to a modern microservices architecture.",
          "Worked with React, Java and Python as the platform’s frontend and backend evolved.",
        ],
        impact:
          "Contributed to the technical modernization and evolution of the educational product.",
      },
    },
  },
  {
    id: "htrace",
    company: "H+Trace",
    start: "2022-02",
    end: "2022-10",
    stack: ["React", "GraphQL", "Recharts", "CSS", "TypeScript"],
    pending: {
      impact: "TODO_IMPACT: add only an outcome you can substantiate.",
    },
    content: {
      es: {
        role: "Frontend Developer",
        project: "Seguimiento de operaciones logísticas",
        headline: "Dar forma a la información operativa.",
        description:
          "Desarrollo de dashboards para el seguimiento de operaciones logísticas.",
        context:
          "Visualización de datos y reportes operativos en interfaces de seguimiento.",
        work: [
          "Desarrollé dashboards y tablas de reportes operativos.",
          "Implementé visualizaciones de datos: gráficos de barras, donas e indicadores de progreso.",
          "Integré datos mediante el consumo de APIs GraphQL.",
        ],
        impact: null,
      },
      en: {
        role: "Frontend Developer",
        project: "Logistics operations monitoring",
        headline: "Making operational information visible.",
        description:
          "Dashboard development for monitoring logistics operations.",
        context:
          "Data visualization and operational reports in monitoring interfaces.",
        work: [
          "Developed dashboards and operational reporting tables.",
          "Implemented data visualizations: bar charts, donut charts and progress indicators.",
          "Integrated data by consuming GraphQL APIs.",
        ],
        impact: null,
      },
    },
  },
  {
    id: "somos-olea",
    company: "Somos Olea",
    start: null,
    end: null,
    stack: [],
    // Complete both localized records. Null fields render translated pending states.
    // Keep last in the requested order until actual dates are supplied.
    pending: {
      role: "TODO_COMPANY_ROLE",
      period: "TODO_PERIOD",
      description: "TODO_DESCRIPTION",
      project: "TODO_PROJECT",
      headline: "TODO_HEADLINE",
      context: "TODO_CONTEXT",
      work: "TODO_CONTRIBUTION",
      impact: "TODO_IMPACT",
      technologies: "TODO_TECHNOLOGIES",
    },
    content: { es: { ...pendingCopy }, en: { ...pendingCopy } },
  },
];
