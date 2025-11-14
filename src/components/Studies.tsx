import { useState } from "react";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

export interface Certificate {
  name: string;
  url: string;
}

export interface Study {
  id: number;
  logo: string;
  institution: string;
  program: string;
  type: "Carrera Universitaria" | "Carrera Técnica" | "Certificación";
  status: "Cursando" | "Finalizado";
  description: string;
  certificates?: Certificate[];
}

export default function Studies({ studies }: { studies: Study[] }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalCertificates, setModalCertificates] = useState<Certificate[]>([]);

  const statusUnderline: Record<Study["status"], string> = {
    Cursando: "underline decoration-blue-500 decoration-2 underline-offset-4",
    Finalizado:
      "underline decoration-green-500 decoration-2 underline-offset-4",
  };

  const openCertModal = (certs: Certificate[]) => {
    setModalCertificates(certs);
    setOpenModal(true);
  };

  return (
    <section id="studies" className="flex flex-col gap-5">
      {/* TÍTULO */}
      <h2 className="text-2xl font-bold text-slate-700 dark:text-white">
        Formación Académica & Certificaciones 🎓
      </h2>

      {/* GRID 2 COLUMNAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {studies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center gap-2 border border-gray-300 
                       dark:border-gray-700 rounded-xl p-4 hover:scale-[1.02] 
                       transition-transform duration-300 bg-transparent"
          >
            {/* LOGO */}
            <img
              src={study.logo}
              alt={study.institution}
              className="w-20 h-20 object-cover rounded-full border border-gray-300 dark:border-gray-600"
            />

            {/* TEXTO */}
            <h3 className="text-base font-semibold text-slate-700 dark:text-white text-center">
              {study.institution}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 text-center">
              {study.program}
            </p>

            <p className="text-[11px] italic text-slate-500 dark:text-slate-400 text-center">
              {study.type}
            </p>

            {/* ESTADO */}
            <span
              className={`text-xs font-medium text-center ${
                statusUnderline[study.status]
              }`}
            >
              {study.status}
            </span>

            {/* DESCRIPCIÓN */}
            <p className="text-xs text-slate-600 dark:text-slate-300 text-center leading-relaxed">
              {study.description}
            </p>

            {/* BOTÓN DE CERTIFICADOS */}
            {study.certificates && study.certificates.length > 0 && (
              <button
                onClick={() => openCertModal(study.certificates!)}
                className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline mt-1"
              >
                Ver certificados
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setOpenModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
        rounded-2xl p-6 
        w-[420px]            /* ancho fijo más estrecho */
        max-h-[80vh]         /* más largo tipo vertical */
        border border-white/10 
        bg-white/20 dark:bg-black/30 
        backdrop-blur-lg shadow-2xl 
        flex flex-col gap-5
      "
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER DEL MODAL */}
            <div className="flex items-center justify-center mb-2">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                Certificados
              </h3>
            </div>

            {/* LISTA */}
            <div className="flex flex-col gap-3 max-h-[55vh] overflow-y-auto pr-1">
              {modalCertificates.map((cert, i) => (
                <a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 
              bg-emerald-200 dark:bg-emerald-600/40 
              text-emerald-700 dark:text-white 
              rounded-xl text-sm font-medium 
              hover:bg-emerald-300 dark:hover:bg-emerald-600/60 
              transition shadow-sm border border-white/10"
                >
                  • {cert.name}
                </a>
              ))}
            </div>

            {/* BOTÓN INFERIOR — SOLO ESTE */}
            <button
              onClick={() => setOpenModal(false)}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 
          bg-blue-500 hover:bg-blue-600 text-white 
          rounded-xl text-sm font-semibold transition"
            >
              <LogOut size={18} /> Cerrar
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
