import { techStack } from "../data/techStack";
import styles from "./TechStack.module.css";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="scroll-mt-20 font-sans"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
        <h2
          id="tech-stack-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Technologies I work with
        </h2>

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
          {techStack.map(({ id, name, technologies }) => (
            <div key={id}>
              <h3
                id={`tech-category-${id}`}
                className="mb-5 text-sm font-semibold tracking-widest text-[var(--accent)] uppercase sm:text-base"
              >
                {name}
              </h3>
              <ul
                aria-labelledby={`tech-category-${id}`}
                className="flex flex-wrap gap-3"
              >
                {technologies.map(({ name: technology, icon: Icon }) => (
                  <li
                    key={technology}
                    tabIndex={0}
                    className={`${styles.card} flex max-w-full items-center gap-3 rounded-lg border px-4 py-3 text-sm leading-6 font-medium sm:text-base`}
                  >
                    <Icon
                      aria-hidden="true"
                      focusable="false"
                      className="size-6 shrink-0 text-[var(--accent-light)]"
                    />
                    <span className="min-w-0 break-words">{technology}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
