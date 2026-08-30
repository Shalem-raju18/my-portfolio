import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/portfolio-data";

const resumeHref =
  profile.resumeUrl ||
  `mailto:${profile.email}?subject=Resume%20request&body=Hi%20Shalemraju%2C%20could%20you%20share%20your%20resume%3F`;

function smoothScrollTo(href: string) {
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { threshold: [0.25, 0.5], rootMargin: "-20% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-6xl items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-500 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("#home");
          }}
          className="flex min-w-0 items-center gap-3"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-sm font-bold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="truncate font-display text-sm font-semibold sm:text-base">
            {profile.name}
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {navItems.slice(0, 6).map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(item.href);
                }}
                className={`relative block rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[image:var(--gradient-brand)] transition-transform duration-300 ${
                    active === item.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden shrink-0 items-center gap-2 lg:ml-0 lg:flex">
          <a
            href={resumeHref}
            target={profile.resumeUrl ? "_blank" : undefined}
            rel={profile.resumeUrl ? "noopener noreferrer" : undefined}
            download={profile.resumeUrl ? "" : undefined}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-4 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-[1.03]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#contact");
            }}
            className="inline-flex min-h-11 items-center rounded-xl border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border text-foreground lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    smoothScrollTo(item.href);
                  }}
                  className="block min-h-11 rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeHref}
                target={profile.resumeUrl ? "_blank" : undefined}
                rel={profile.resumeUrl ? "noopener noreferrer" : undefined}
                className="mt-1 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
