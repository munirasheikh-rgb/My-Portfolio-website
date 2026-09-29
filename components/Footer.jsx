import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
const email = "hassanmunira30@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/munira-hassan-a271b3417";
  const githubUrl = "https://github.com/munirasheikh-rgb"
  const contacts = [
    { icon: FiMail, href: email ? `mailto:${email}` : null},
    {
      
      icon: FiGithub,
      href: githubUrl,
      external: true,
    },
    { icon: FiLinkedin, 
      href:linkedInUrl,
       external: true },
  ];

export default function Footer() {

  return(
    <>
    <footer className="border-t border-white/10 bg-[#021536]">
  
    <div className="mx-auto max-w-6xl px-5 py-10 text-center md:px-6 md:py-12 lg:px-8 ">
      <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 justify-center" >
          {contacts.map(({ icon: Icon, href, external }) => (
            <li key={href}>
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center gap-3 rounded-sm py-2 text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] motion-safe:transition-colors motion-safe:duration-200"
                >
                  <Icon aria-hidden="true" focusable="false" className="size-5 shrink-0 text-[var(--accent)]" />
                  
                  {external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex min-h-11 items-center gap-3 py-2 text-base font-medium text-[var(--text-secondary)]"
                >
                  <Icon aria-hidden="true" focusable="false" className="size-5 shrink-0" />
                  
                  <span className="sr-only"> (contact details pending)</span>
                </span>
              )}
            </li>
          ))}
        </ul>
    <p className="mt-4">&copy; 2026 Munira Hassan</p>
    <p className="mt-2 font-serif "><em>Built with React · Next.js · modern web technologies.</em></p>
    </div>
    </footer>
    </>

  )
}
