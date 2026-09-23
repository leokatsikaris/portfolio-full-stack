import type { Experience } from "../types";
// Experience facts and deliverables supplied by Leonel. No invented metrics.
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
      "Spring Boot",
      "Scrum",
    ],
    content: {
      es: {
        role: "Fullstack Developer",
        project: "Mi Escuela",
        headline:
          "Hacer evolucionar un producto del que dependen procesos reales.",
        description:
          "Mi Escuela, plataforma del Ministerio de Educación de la Ciudad de Buenos Aires para la gestión académica y administrativa de instituciones públicas. Trabajo en sistemas de backoffice, interfaces complejas para datos institucionales y certificaciones, y control de acceso basado en roles.",
        context:
          "Múltiples perfiles de usuario, grandes volúmenes de información, reglas de negocio complejas y funcionalidades críticas en evolución constante.",
        work: [
          "Desarrollo funcionalidades de punta a punta: interfaces React, APIs REST y lógica backend con Node.js.",
          "Implemento reglas de negocio, roles y permisos, conectando frontend, backend y datos.",
          "Trabajo con PostgreSQL y TypeORM para optimizar consultas, investigar problemas y mejorar performance.",
          "Mantengo y hago evolucionar funcionalidades existentes con foco en estabilidad, escala y mantenibilidad.",
          "Diseño y ejecuto migraciones de base de datos cuidando la integridad transaccional y la optimización de consultas SQL.",
          "Desarrollo sistemas administrativos y funcionalidades para gestionar datos institucionales y certificaciones.",
        ],
        impact:
          "Sistemas de backoffice con roles y permisos, gestión de datos institucionales y certificaciones, y migraciones de base de datos con integridad transaccional.",
      },
      en: {
        role: "Fullstack Developer",
        project: "Mi Escuela",
        headline: "Evolving a product that real processes depend on.",
        description:
          "Mi Escuela, a platform for the Ministry of Education of the City of Buenos Aires supporting academic and administrative management in public institutions. I work on backoffice systems, complex interfaces for institutional data and certifications, and role-based access control.",
        context:
          "Multiple user profiles, large volumes of information, complex business rules and critical features that continually evolve.",
        work: [
          "Build end-to-end features: React interfaces, REST APIs and Node.js backend logic.",
          "Implement business rules, roles and permissions, connecting frontend, backend and data.",
          "Work with PostgreSQL and TypeORM to optimize queries, investigate issues and improve performance.",
          "Maintain and evolve existing features with stability, scale and maintainability in mind.",
          "Design and execute database migrations with attention to transactional integrity and SQL query optimization.",
          "Develop administrative systems and features for managing institutional data and certifications.",
        ],
        impact:
          "Backoffice systems with roles and permissions, institutional data and certification management, and database migrations with transactional integrity.",
      },
    },
  },
  {
    id: "aulasneo",
    company: "Aulasneo",
    start: "2022-10",
    end: "2024-11",
    stack: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Node.js",
      "Python",
      "CSS",
      "AWS",
    ],
    content: {
      es: {
        role: "Fullstack Developer",
        project: "Open edX y plataformas educativas",
        headline: "Modernizar la arquitectura. Acompañar al producto.",
        description:
          "Personalización y extensión de Open edX, la plataforma educativa open source creada por MIT y Harvard. Desarrollé módulos de interfaz, dashboards estadísticos y herramientas de analytics para clientes institucionales, junto con entornos educativos configurables.",
        context:
          "Una solución monolítica basada en HTML que debía evolucionar hacia una arquitectura de microservicios.",
        work: [
          "Participé en la migración del monolito hacia una arquitectura moderna basada en microservicios.",
          "Trabajé con React y Python en la evolución del frontend y backend de la plataforma.",
          "Desarrollé módulos frontend con React y TypeScript, dashboards estadísticos y sistemas de analytics.",
          "Construí funcionalidades para configurar y personalizar entornos educativos.",
          "Implementé funcionalidades backend con Node.js y Python e integraciones con servicios de AWS.",
        ],
        impact:
          "Dashboards estadísticos y herramientas de analytics para clientes institucionales, junto con módulos para configurar y personalizar entornos educativos en Open edX.",
      },
      en: {
        role: "Fullstack Developer",
        project: "Open edX and education platforms",
        headline: "Modernize the architecture. Move the product forward.",
        description:
          "Customization and extension of Open edX, the open-source learning platform created by MIT and Harvard. I developed interface modules, statistical dashboards and analytics tools for institutional clients, alongside configurable learning environments.",
        context:
          "An HTML-based monolithic solution evolving toward a microservices architecture.",
        work: [
          "Participated in the migration from the monolith to a modern microservices architecture.",
          "Worked with React and Python as the platform’s frontend and backend evolved.",
          "Developed frontend modules with React and TypeScript, statistical dashboards and analytics tools.",
          "Built features for configuring and customizing learning environments.",
          "Implemented backend features with Node.js and Python and integrations with AWS services.",
        ],
        impact:
          "Statistical dashboards and analytics tools for institutional clients, alongside modules for configuring and customizing Open edX learning environments.",
      },
    },
  },
  {
    id: "htrace",
    company: "H+Trace",
    start: "2022-02",
    end: "2022-10",
    stack: ["React", "GraphQL", "Recharts", "CSS", "TypeScript"],
    content: {
      es: {
        role: "Frontend Developer",
        project: "Seguimiento de operaciones logísticas",
        headline: "Dar forma a la información operativa.",
        description:
          "Desarrollo de dashboards para el seguimiento de operaciones logísticas, conectando datos de APIs GraphQL con tablas de reportes operativos y visualizaciones en React. Las interfaces incluían gráficos de barras, donas e indicadores de progreso con Recharts.",
        context:
          "Visualización de datos y reportes operativos en interfaces de seguimiento.",
        work: [
          "Desarrollé dashboards y tablas de reportes operativos.",
          "Implementé visualizaciones de datos: gráficos de barras, donas e indicadores de progreso.",
          "Integré datos mediante el consumo de APIs GraphQL.",
        ],
        impact:
          "Dashboards que reúnen datos de APIs GraphQL en tablas de reportes, gráficos de barras, donas e indicadores de progreso para el seguimiento de operaciones logísticas.",
      },
      en: {
        role: "Frontend Developer",
        project: "Logistics operations monitoring",
        headline: "Making operational information visible.",
        description:
          "Developed dashboards for monitoring logistics operations, connecting data from GraphQL APIs to operational reporting tables and React visualizations. The interfaces included bar charts, donut charts and progress indicators built with Recharts.",
        context:
          "Data visualization and operational reports in monitoring interfaces.",
        work: [
          "Developed dashboards and operational reporting tables.",
          "Implemented data visualizations: bar charts, donut charts and progress indicators.",
          "Integrated data by consuming GraphQL APIs.",
        ],
        impact:
          "Dashboards bringing GraphQL API data into reporting tables, bar charts, donut charts and progress indicators for monitoring logistics operations.",
      },
    },
  },
  {
    id: "somos-olea",
    company: "Somos Olea",
    start: "2021-09",
    end: "2021-10",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Express",
      "Node.js",
      "Sequelize",
      "PostgreSQL",
      "JWT",
      "Bootstrap",
      "Git",
      "Scrum",
    ],
    content: {
      es: {
        role: "Desarrollo fullstack · foco en backend",
        project: "E-commerce de productos naturales",
        headline:
          "Conectar la compra, la atención y la gestión en un mismo producto.",
        description:
          "Desarrollo en equipo de una plataforma responsive de e-commerce para productos naturales. Además del carrito, autenticación con JWT, panel de administración, órdenes y pagos, el producto incluía chat entre usuarios y administración, interacciones con mapas, recomendaciones personalizadas y gestión de turnos.",
        context:
          "Una plataforma que reúne la compra online y la atención al cliente con las herramientas administrativas necesarias para gestionar productos, pedidos y turnos. Trabajamos con metodología Scrum y Git.",
        work: [
          "Participé principalmente en el backend del carrito de compras, la lista de deseos y la gestión de órdenes.",
          "Desarrollé componentes frontend conectados mediante React y Redux, y funcionalidades de filtrado y ordenamiento de productos.",
          "Implementé interacciones mediante el envío de emails.",
          "Desarrollé el sistema de gestión de turnos para usuarios y administración.",
        ],
        impact:
          "Funcionalidades de carrito, lista de deseos y órdenes, filtros y ordenamiento de productos, interacciones por email y gestión de turnos para usuarios y administración.",
      },
      en: {
        role: "Fullstack development · backend focus",
        project: "Natural products e-commerce",
        headline:
          "Bringing shopping, customer service and management into one product.",
        description:
          "Worked with a team to build a responsive e-commerce platform for natural products. Alongside the cart, JWT authentication, admin panel, orders and payments, the product included chat between customers and administrators, map interactions, personalized recommendations and appointment management.",
        context:
          "A platform combining online shopping and customer service with the administrative tools needed to manage products, orders and appointments. We worked with Scrum and Git.",
        work: [
          "Contributed primarily to the backend for the shopping cart, wishlist and order management.",
          "Built frontend components connected through React and Redux, along with product filtering and sorting features.",
          "Implemented interactions through email delivery.",
          "Developed the appointment management system for users and administrators.",
        ],
        impact:
          "Shopping cart, wishlist and order features, product filtering and sorting, email interactions and appointment management for users and administrators.",
      },
    },
  },
];
