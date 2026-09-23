import Image from "next/image";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 font-sans"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
        <h2
          id="projects-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              aria-labelledby={`project-${project.id}`}
              className={`${styles.card} flex min-w-0 flex-col overflow-hidden rounded-xl border`}
            >
              <div className="relative aspect-video overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1152px) 347px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3
                  id={`project-${project.id}`}
                  className="text-xl font-semibold tracking-tight"
                >
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>
                <ul
                  aria-label={`${project.name} technologies`}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-[var(--surface-light)] px-2 py-1 text-xs leading-5 text-[var(--accent-light)]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
                      className={styles.githubLink}
                    >
                      View on GitHub
                    </a>
              
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
