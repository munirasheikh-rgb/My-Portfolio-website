export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-[#26658C]/30 bg-[#023859] font-sans text-slate-100"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 md:px-6 md:py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <h2
            id="about-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            About Me
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              I’ve completed software engineering training and am growing as a
              full-stack software developer. I enjoy building practical web
              applications and solving real problems through code, working across
              both frontend and backend development.
            </p>
            <p>
              Through my projects, I’ve built responsive interfaces, REST APIs,
              database-backed applications, authentication flows, API integrations,
              and automated tests. I value clean, maintainable code and continue
              to strengthen my problem-solving and software development skills
              with each project.
            </p>
          </div>
        </div>

        <dl className="divide-y divide-[#26658C]/40 rounded-xl border border-[#26658C]/60 bg-[#011C40]/60 px-6 sm:px-8">
          <div className="py-6">
            <dt className="text-base font-semibold text-[#A7EBF2]">
              Frontend Development
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate-300">
              Responsive and user-focused interfaces.
            </dd>
          </div>
          <div className="py-6">
            <dt className="text-base font-semibold text-[#A7EBF2]">
              Backend Development
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate-300">
              APIs, authentication and database-backed applications.
            </dd>
          </div>
          <div className="py-6">
            <dt className="text-base font-semibold text-[#A7EBF2]">
              Testing &amp; Quality
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate-300">
              Testing, debugging and maintainable code.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
