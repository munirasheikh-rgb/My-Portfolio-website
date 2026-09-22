import { techStack } from "../data/techStack";

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
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                {technologies.map(({ name: technology, mark }) => (
                  <li
                    key={technology}
                    tabIndex={0}
                    className="flex min-h-18 max-w-full items-center gap-3 rounded-lg border border-[#26658C]/60 bg-[#023859] px-4 py-3 text-sm leading-6 font-medium text-slate-100 hover:border-[#54ACBF] focus-visible:border-[#54ACBF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#54ACBF] motion-safe:transition-[transform,border-color] motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 sm:gap-4 sm:px-5 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#54ACBF]/15 font-mono text-xs font-semibold text-[#A7EBF2]"
                    >
                      {mark}
                    </span>
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
