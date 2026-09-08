import { profile } from "@/lib/portfolio-data";
import { TypingRoles } from "./TypingRoles";

const PARTICLES = [
  { left: "12%", top: "70%", size: 3, delay: 0, dur: 15 },
  { left: "28%", top: "85%", size: 2, delay: 2.5, dur: 18 },
  { left: "44%", top: "60%", size: 2, delay: 5, dur: 16 },
  { left: "62%", top: "80%", size: 3, delay: 1.2, dur: 20 },
  { left: "76%", top: "65%", size: 2, delay: 6.5, dur: 17 },
  { left: "88%", top: "88%", size: 2, delay: 3.8, dur: 19 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 pb-24 sm:pt-36"
    >
      {/* Ambient background */}
      <div className="orb -top-[10%] -left-[10%] h-[45vh] w-[45vh] bg-primary opacity-25" />
      <div
        className="orb -bottom-[10%] -right-[10%] h-[45vh] w-[45vh] bg-cyan opacity-20"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="orb top-[30%] left-[45%] h-[30vh] w-[30vh] bg-violet opacity-[0.14]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="grid-pan absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              height: `${p.size}px`,
              width: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          {/* Status */}
          <div className="hero-in" style={{ animationDelay: "80ms" }}>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-cyan/80">
                Open to internships &amp; collaborations
              </span>
            </div>
          </div>

          <div className="hero-in" style={{ animationDelay: "220ms" }}>
            <h2 className="mt-8 text-lg font-light tracking-wide text-muted-foreground">
              Hello, I'm
            </h2>
          </div>

          <div className="hero-in" style={{ animationDelay: "380ms" }}>
            <h1 className="mt-2 text-5xl font-bold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl">
              Shalemraju
              <br />
              <span className="bg-[image:linear-gradient(90deg,var(--foreground),var(--foreground)_45%,var(--muted-foreground))] bg-clip-text text-transparent">
                Janga
              </span>
            </h1>
          </div>

          <div className="hero-in" style={{ animationDelay: "560ms" }}>
            <div className="my-7 h-px w-12 bg-cyan/50" />
            <p className="max-w-[34ch] text-lg leading-relaxed text-muted-foreground">
              Building modern experiences with code — a B.Tech student crafting{" "}
              <span className="text-foreground">responsive, engaging</span> digital interfaces.
            </p>
            <TypingRoles />
          </div>

          <div className="hero-in" style={{ animationDelay: "700ms" }}>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
              {profile.role}
            </p>
          </div>

          {/* Actions */}
          <div className="hero-in" style={{ animationDelay: "840ms" }}>
            <div className="mt-10 flex flex-col gap-4 sm:max-w-md">
              <a
                href="#projects"
                className="cta-motion w-full rounded-sm bg-foreground px-6 py-4 text-center text-sm font-semibold uppercase tracking-widest text-background hover:bg-cyan hover:text-primary-foreground"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="cta-motion w-full rounded-sm border border-border px-6 py-4 text-center text-sm font-medium uppercase tracking-widest text-foreground backdrop-blur-sm hover:border-primary/50 hover:bg-secondary/50"
              >
                Let's Connect
              </a>
              <a
                href={profile.resumeUrl || "#contact"}
                className="cta-motion inline-block text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Meta footer */}
          <div className="hero-in" style={{ animationDelay: "960ms" }}>
            <div className="mt-12 flex items-center justify-between border-t border-border pt-6 sm:max-w-md">
              <div className="flex gap-4">
                {[
                  { code: "GH", href: profile.github },
                  { code: "LN", href: profile.linkedin },
                ].map((s) => (
                  <a
                    key={s.code}
                    href={s.href || "#contact"}
                    target={s.href ? "_blank" : undefined}
                    rel={s.href ? "noopener noreferrer" : undefined}
                    aria-label={s.code === "GH" ? "GitHub" : "LinkedIn"}
                    className="cta-motion grid h-8 w-8 place-items-center rounded-full border border-border font-mono text-[10px] text-muted-foreground hover:border-cyan/50 hover:text-foreground"
                  >
                    {s.code}
                  </a>
                ))}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                B.Tech 2024 — 2028
              </span>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div
          className="hero-in justify-self-center lg:justify-self-end"
          style={{ animationDelay: "460ms" }}
        >
          <div className="float-soft group relative grid h-60 w-60 place-items-center sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <div className="spin-ring absolute inset-0 rounded-full bg-[image:conic-gradient(from_0deg,transparent_0%,var(--primary)_30%,var(--cyan)_60%,transparent_100%)] opacity-50 blur-[1px] transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute inset-[5px] rounded-full bg-background" />
            <div className="absolute inset-[13px] rounded-full border border-border" />
            <div className="absolute inset-[24px] grid place-items-center overflow-hidden rounded-full border border-border bg-secondary/20 backdrop-blur-sm transition-shadow duration-500 group-hover:shadow-[0_0_60px_-10px_var(--cyan)]">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
              ) : (
                <div className="text-center">
                  <span className="font-display text-5xl font-bold tracking-tighter text-foreground">
                    {profile.initials}
                  </span>
                  <p className="mt-2 px-8 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                    Add profile photo
                  </p>
                </div>
              )}
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-sm border border-border bg-background px-4 py-2 text-center backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                3rd Year · B.Tech
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="scroll-bounce grid h-8 w-5 justify-center rounded-full border border-border pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-cyan" />
        </span>
      </a>
    </section>
  );
}
