import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  // Add your confirmed email address and LinkedIn profile URL here.
  const email = "hassanmunira30@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/munira-hassan-a271b3417";
  const contacts = [
    { label: "Email", icon: FiMail, href: email ? `mailto:${email}` : null},
    {
      label: "GitHub",
      icon: FiGithub,
      href: "https://github.com/munirasheikh-rgb",
      external: true,
    },
    { label: "LinkedIn", icon: FiLinkedin, 
      href:linkedInUrl,
       external: true },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 font-sans"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-5 md:py-4 ">
        <h2
          id="contact-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Get in Touch
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          I’m open to software development opportunities, collaborations, and
          conversations about building useful web applications. Feel free to reach
          out.
        </p>

        <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {contacts.map(({ label, icon: Icon, href, external }) => (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center gap-3 rounded-sm py-2 text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] motion-safe:transition-colors motion-safe:duration-200"
                >
                  <Icon aria-hidden="true" focusable="false" className="size-5 shrink-0 text-[var(--accent)]" />
                  {label}
                  {external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex min-h-11 items-center gap-3 py-2 text-base font-medium text-[var(--text-secondary)]"
                >
                  <Icon aria-hidden="true" focusable="false" className="size-5 shrink-0" />
                  {label}
                  <span className="sr-only"> (contact details pending)</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
