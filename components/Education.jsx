export default function Education() {
  const education = [
    {
      id: "software-engineering",
      program: "Software Engineering Training",
      institution: "Moringa School",
      year: "2026",
      description:
       "Completed comprehensive software engineering training focused on full-stack web development, building responsive frontend applications with JavaScript, React and Next.js, and developing backend systems with Python, Flask and REST APIs. Gained practical experience with relational databases, SQLAlchemy, authentication, API integration, automated testing and Git/GitHub workflows. Applied these skills through individual and collaborative projects, strengthening problem-solving, debugging and the development of maintainable applications.",
    },
    {
      id: "computer-packages",
      program: "Computer Packages Certificate",
      institution: "Cambridge Universal College",
      year: "2024",
      description:
        "Completed practical training in essential computer applications and digital productivity, gaining hands-on experience with Microsoft Word, Excel, PowerPoint and Publisher. Developed skills in creating and formatting professional documents, working with spreadsheets, preparing presentations and designing basic publication materials. The training also covered effective internet use and email communication, strengthening my overall digital literacy and ability to work confidently with everyday workplace technologies.",
    },
  ];

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-20 font-sans"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
        <h2
          id="education-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Education
        </h2>

        <div className="mt-10 space-y-8">
          {education.map(({ id, program, institution, year, description }) => (
            <article
              key={id}
              aria-labelledby={`education-${id}`}
              className="min-w-0 border-b border-[var(--accent)]/25 pb-8"
            >
              <h3
                id={`education-${id}`}
                className="text-xl font-semibold tracking-tight text-[var(--accent-light)]"
              >
                {program}
              </h3>
              {/* Replace these placeholders with your institution and completion year. */}
              <dl className="mt-3 flex flex-col gap-2 text-sm text-[var(--text-secondary)] sm:flex-row sm:justify-between sm:gap-6">
                <div>
                  <dt className="sr-only">Institution</dt>
                  <dd>{institution}</dd>
                </div>
                <div>
                  <dt className="sr-only">Completion year</dt>
                  <dd>{year}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
