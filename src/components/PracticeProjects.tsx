import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PracticeProjectProps {
  projects: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    liveUrl: string;
    codeUrl: string;
  }[];
  technologies: Record<
    string,
    { name: string; color: string; icon: IconDefinition }
  >;
}

export default function PracticeProjects({
  projects,
  technologies,
}: PracticeProjectProps) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-slate-700 dark:text-white">
        Proyectos de Práctica 📘
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-4 rounded-xl bg-gray-100 dark:bg-gray-700 flex flex-col gap-1 hover:scale-104 hover:shadow-md transition-transform duration-300 delay-60"
          >
            <h3 className="text-lg font-semibold text-slate-700 dark:text-white">
              {p.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {p.tech.map((tech) => {
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

            <div className="flex gap-2 mt-3">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  className="px-3 py-1 text-sm rounded-lg bg-emerald-200 dark:bg-emerald-500 text-emerald-700 dark:text-white font-semibold hover:scale-105 transition-transform"
                >
                  Ver Demo
                </a>
              )}
              {p.codeUrl && (
                <a
                  href={p.codeUrl}
                  target="_blank"
                  className="px-3 py-1 text-sm rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold hover:scale-105 transition-transform"
                >
                  Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
