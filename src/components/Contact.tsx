import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-slate-700 dark:text-white">
        Contacto 📞
      </h2>
      <p className="text-slate-600 dark:text-slate-300">
        Si te interesa colaborar o tienes alguna pregunta, no dudes en
        escribirme.
      </p>

      <div className="flex flex-col gap-3">
        {/* CORREO PRINCIPAL */}
        <a
          href="mailto:juanabdiel56@gmail.com"
          className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-500"
        >
          <Mail size={18} /> juanabdiel56@gmail.com
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/AbdielFco"
          target="_blank"
          className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-500"
        >
          <Github size={18} /> github.com/AbdielFco
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-500"
        >
          <Linkedin size={18} /> linkedin.com/in/noDisponible
        </a>
      </div>
    </section>
  );
}
