export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-20 bg-[#011C40] font-sans text-slate-100"
    >
      <div className="mx-auto grid min-h-[calc(100svh-69px)] max-w-6xl items-center gap-12 px-5 py-16 md:px-6 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-8 lg:py-24">
        <div className="min-w-0">
          <h1
            id="hero-heading"
            className="max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I’m <span className="text-[#A7EBF2]">Munira Hassan.</span>
          </h1>
          <p className="mt-5 text-xl leading-snug font-medium sm:text-2xl">
            Full-Stack Software Developer
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            I build responsive web applications and backend APIs using modern
            frontend and backend technologies, with a focus on usability and
            maintainable code.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#54ACBF] px-6 py-3 text-sm font-semibold text-[#011C40] hover:bg-[#A7EBF2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A7EBF2] motion-safe:transition-colors motion-safe:duration-150"
            >
              View Projects
            </a>
            {/* Add the real CV at public/Munira-Hassan-CV.pdf. */}
            <a
              href="/Munira-Hassan-CV.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#54ACBF]/70 px-6 py-3 text-sm font-semibold hover:border-[#A7EBF2] hover:bg-[#023859] hover:text-[#A7EBF2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A7EBF2] motion-safe:transition-colors motion-safe:duration-150"
            >
              Download CV
            </a>
          </div>
        </div>

        <figure className="w-full min-w-0 max-w-lg overflow-hidden rounded-xl border border-[#26658C]/60 bg-[#023859]/50 lg:justify-self-end">
          <figcaption className="border-b border-[#26658C]/40 px-5 py-4 font-mono text-xs tracking-wide text-slate-300 sm:px-6">
            developer.js
          </figcaption>
          <pre className="p-5 font-mono text-sm leading-7 whitespace-pre-wrap text-slate-300 sm:p-6 sm:text-base">
            <code>
              <span className="text-[#54ACBF]">const</span>
              {" developer = {\n  name: "}
              <span className="text-[#A7EBF2]">{'"Munira Hassan"'}</span>
              {",\n  role: "}
              <span className="text-[#A7EBF2]">{'"Full-Stack Developer"'}</span>
              {",\n  technologies: [\n    "}
              <span className="text-[#A7EBF2]">{'"Next.js", "React",'}</span>
              {"\n    "}
              <span className="text-[#A7EBF2]">{'"JavaScript",'}</span>
              {"\n    "}
              <span className="text-[#A7EBF2]">{'"Python", "Flask"'}</span>
              {"\n  ]\n};"}
            </code>
          </pre>
        </figure>
      </div>
    </section>
  );
}
