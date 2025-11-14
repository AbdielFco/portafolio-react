import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectProps {
  projects: {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl: string;
    codeUrl: string;
    mode: "default" | "details";
  }[];
  technologies: Record<string, { name: string; color: string; icon: any }>;
}

export default function Projects({ projects, technologies }: ProjectProps) {
  return (
    <section id="projects" className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-slate-700 dark:text-white">
        Proyectos Destacados 🌟
      </h2>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-2 rounded-xl overflow-hidden border p-3 border-gray-200 dark:border-gray-700  hover:scale-102 transition-transform duration-300 delay-60"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-slate-700 dark:text-white">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {project.description}
              </p>
              {/* TECNOLOGÍAS */}
              <div className="flex flex-wrap gap-3 mt-3">
                {project.tech.map((tech) => {
                  const t = technologies[tech];
                  return (
                    <span
                      key={tech}
                      className="flex items-center gap-2 text-xl px-2 py-1 rounded-full font-medium bg-opacity-20"
                      style={{
                        backgroundColor: `${t.color}25`,
                        color: t.color,
                      }}
                    >
                      <FontAwesomeIcon icon={t.icon} size="sm" />
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-3 mt-3">
                {project.mode === "details" ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Ver detalles
                  </a>
                ) : (
                  <>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Ver demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:underline"
                    >
                      Código
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
