import {
  faReact,
  faAngular,
  faNodeJs,
  faJs,
  faCss3Alt,
  faHtml5,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export const technologies = {
  react: { name: "React", color: "#61DAFB", icon: faReact },
  angular: { name: "Angular", color: "#DD0031", icon: faAngular },
  nodejs: { name: "Node.js", color: "#339933", icon: faNodeJs },
  javascript: { name: "JavaScript", color: "#F7DF1E", icon: faJs },
  typescript: { name: "TypeScript", color: "#3178C6", icon: faJs },
  tailwind: { name: "Tailwind", color: "#06B6D4", icon: faCss3Alt },
  postgresql: { name: "PostgreSQL", color: "#4169E1", icon: faDatabase },
  mariadb: { name: "MariaDB", color: "#003545", icon: faDatabase },
  html: { name: "HTML", color: "#E34F26", icon: faHtml5 },
  css: { name: "CSS", color: "#1572B6", icon: faCss3Alt },
  git: { name: "Git", color: "#F05032", icon: faGitAlt },
};
