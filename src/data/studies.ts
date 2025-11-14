import type { Study } from "../components/Studies";

export const studiesData: Study[] = [
  {
    id: 1,
    institution: "Universidad O&M",
    program: "Ingeniería en Sistemas",
    status: "Cursando",
    type: "Carrera Universitaria",
    logo: "/logos/oym.jpg",
    description:
      "Formación para definir, mejorar, implementar y administrar sistemas de información en organizaciones.",
  },
  {
    id: 2,
    institution: "Cincinnatus Institute of Craftmanship",
    program: "Desarrollo de software y tecnologías web",
    status: "Cursando",
    type: "Carrera Técnica",
    logo: "/logos/cincinnatus.jpg",
    description:
      "Desarrollo de software, tecnologías web y metodologías de gestión de proyectos.",
    certificates: [
      {
        name: "Inteligencia artificial para todos",
        url: "/certs/CV-3.pdf",
      },
      { name: "Fundamentos de pensamiento critico", url: "/certs/CV-4.pdf" },
    ],
  },
  {
    id: 3,
    institution: "Instituto de Idiomas Madison",
    program: "Inglés Técnico",
    status: "Finalizado",
    type: "Certificación",
    logo: "/logos/madison.png",
    description: "Certificación en inglés técnico.",
    certificates: [
      {
        name: "Ingles técnico - regular",
        url: "/certs/CV-5.pdf",
      },
    ],
  },
  {
    id: 4,
    institution: "INFOTEP",
    program: "Diseño de páginas web (HTML, CSS, JS)",
    status: "Finalizado",
    type: "Certificación",
    logo: "/logos/infotep.png",
    description: "Curso enfocado en fundamentos web: HTML, CSS y JavaScript.",
    certificates: [
      {
        name: "Diseño de páginas web, CSS y JavaScript",
        url: "/certs/CV-1.pdf",
      },
    ],
  },
  {
    id: 5,
    institution: "INFOTEP",
    program: "Manejador de programas de oficina",
    status: "Finalizado",
    type: "Certificación",
    logo: "/logos/infotep.png",
    description:
      "Dominio de herramientas de oficina para productividad profesional.",
    certificates: [
      {
        name: "Manejador de programas de oficina",
        url: "/certs/CV-2.pdf",
      },
    ],
  },
];
