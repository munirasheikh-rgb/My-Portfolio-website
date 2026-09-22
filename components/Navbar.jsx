"use client";

import { useRef, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  function handleEscape(event) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#26658C]/40 bg-[#011C40]/95 font-sans text-slate-100 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        onKeyDown={handleEscape}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-5 md:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="my-3 inline-flex min-h-11 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A7EBF2]"
        >
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-lg border border-[#26658C]/60 bg-[#023859] text-sm font-semibold tracking-wide text-[#A7EBF2]"
          >
            MH
          </span>
          <span className="text-base font-semibold tracking-tight">
            Munira Hassan
          </span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="navbar-links"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-md hover:bg-[#023859] hover:text-[#A7EBF2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A7EBF2] motion-safe:transition-colors motion-safe:duration-150 md:hidden"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d={isOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <ul
          id="navbar-links"
          className={`${isOpen ? "flex" : "hidden"} w-full flex-col gap-1 border-t border-[#26658C]/40 py-3 md:flex md:w-auto md:flex-row md:items-center md:gap-1 md:border-0 md:py-0 lg:gap-3`}
        >
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium hover:bg-[#023859]/60 hover:text-[#54ACBF] active:text-[#A7EBF2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A7EBF2] motion-safe:transition-colors motion-safe:duration-150 md:px-2"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
