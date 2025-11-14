import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Header({ darkMode, setDarkMode, scrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg">
      <div className="px-5 py-4 flex items-center justify-end gap-4">
        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden px-5 pb-4 flex flex-col gap-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-500 py-2 text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
