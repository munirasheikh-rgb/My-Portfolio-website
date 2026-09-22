import {
  SiBootstrap,
  SiCss,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiNextdotjs,
  SiPostman,
  SiPytest,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiSqlite,
  SiTailwindcss,
  SiTestinglibrary,
  SiVitest,
} from "react-icons/si";
import { FiDatabase, FiServer } from "react-icons/fi";

export const techStack = [
  {
    id: "frontend",
    name: "Frontend",
    technologies: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "Flask-RESTful", icon: SiFlask },
      { name: "REST APIs", icon: FiServer },
      { name: "JWT Authentication", icon: SiJsonwebtokens },
    ],
  },
  {
    id: "database",
    name: "Database",
    technologies: [
      { name: "SQL", icon: FiDatabase },
      { name: "SQLite", icon: SiSqlite },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
    ],
  },
  {
    id: "tools-testing",
    name: "Testing & Tools",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "pytest", icon: SiPytest },
      { name: "Vitest", icon: SiVitest },
      { name: "React Testing Library", icon: SiTestinglibrary },
    ],
  },
];
