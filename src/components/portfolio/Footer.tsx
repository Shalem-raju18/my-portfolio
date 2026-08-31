import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="mt-2 text-sm text-gradient font-medium">Building. Learning. Creating.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">Contact</p>
          <a href={`mailto:${profile.email}`} className="mt-3 block hover:text-foreground">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="mt-1 block hover:text-foreground">
            {profile.phone}
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">Links</p>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-3 block hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border pt-6">
        <p className="truncate text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a
          href="#home"
          aria-label="Back to top"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/40 transition-colors hover:border-primary/50"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
