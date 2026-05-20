import { navLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-9xl px-5 md:px-8 lg:px-16 flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-display text-sm font-semibold">
          Midhun Krishna<span className="text-accent">.</span>
        </p>
        <ul className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-muted transition hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">
          © {year} Midhun Krishna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
