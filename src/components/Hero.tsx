import { FileDown, Mail, Briefcase } from "lucide-react";

export default function Hero({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-5">
      <img
        src="/img/profile.jpg"
        alt="Juan Abdiel"
        className="w-44 h-44 rounded-full shadow-lg border-8 border-white dark:border-gray-800 object-cover -rotate-15"
      />

      <div className="flex flex-col items-center sm:items-start gap-3">
        {/* NOMBRE */}
        <h1 className="text-3xl font-bold text-slate-700 dark:text-white text-center sm:text-left">
          Juan Abdiel Francisco
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-slate-600 dark:text-slate-300 text-center sm:text-left">
          Soy un Desarrollador Web JS/TS. Apasionado por aprender, crear y
          mejorar cada día.
        </p>

        {/* BADGE */}
        <div
          className="flex items-center gap-2 px-3 py-1 
                        bg-gray-200 dark:bg-gray-700 
                        text-gray-700 dark:text-white 
                        rounded-xl text-xs font-medium shadow-sm"
        >
          <Briefcase size={14} />
          En busca de una oportunidad laboral
        </div>

        {/* BOTONES */}
        <div className="flex gap-3">
          <a
            href="/docs/CV Developer.pdf"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 
                       bg-emerald-200 dark:bg-emerald-500 
                       text-emerald-700 dark:text-white 
                       rounded-xl text-sm font-semibold"
          >
            <FileDown size={18} /> Descargar CV
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 px-4 py-2 
                       bg-gray-200 dark:bg-gray-700 
                       text-gray-900 dark:text-white 
                       rounded-xl text-sm font-semibold cursor-pointer"
          >
            <Mail size={18} /> Contáctame
          </button>
        </div>
      </div>
    </section>
  );
}
