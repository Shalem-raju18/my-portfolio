import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 pb-16 sm:pt-36"
    >
      {/* Ambient background */}
      <div className="orb -top-[10%] -left-[10%] h-[45vh] w-[45vh] bg-primary opacity-25" />
      <div
        className="orb -bottom-[10%] -right-[10%] h-[45vh] w-[45vh] bg-cyan opacity-20"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          {/* Status */}
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-cyan/80">
                Open to internships &amp; collaborations
              </span>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-8 text-lg font-light tracking-wide text-muted-foreground">
              Hello, I'm
            </h2>
          </Reveal>

          <Reveal delay={130}>
            <h1 className="mt-2 text-5xl font-bold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl">
              Shalemraju
              <br />
              <span className="bg-[image:linear-gradient(90deg,var(--foreground),var(--foreground)_45%,var(--muted-foreground))] bg-clip-text text-transparent">
                Janga
              </span>
            </h1>
          </Reveal>

          <Reveal delay={190}>
            <div className="my-7 h-px w-12 bg-cyan/50" />
          </Reveal>

          <Reveal delay={230}>
            <p className="max-w-[34ch] text-lg leading-relaxed text-muted-foreground">
              Building modern experiences with code — a B.Tech student crafting{" "}
              <span className="text-foreground">responsive, engaging</span> digital interfaces.
            </p>
          </Reveal>

          <Reveal delay={290}>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
              {profile.role}
            </p>
          </Reveal>

          {/* Actions */}
          <Reveal delay={350}>
            <div className="mt-10 flex flex-col gap-4 sm:max-w-md">
              <a
                href="#projects"
                className="w-full rounded-sm bg-foreground px-6 py-4 text-center text-sm font-semibold uppercase tracking-widest text-background transition-colors duration-300 hover:bg-cyan hover:text-primary-foreground"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="w-full rounded-sm border border-border px-6 py-4 text-center text-sm font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50"
              >
                Let's Connect
              </a>
              <a
                href={profile.resumeUrl || "#contact"}
                className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Download Resume
              </a>
            </div>
          </Reveal>

          {/* Meta footer */}
          <Reveal delay={410}>
            <div className="mt-12 flex items-center justify-between border-t border-border pt-6 sm:max-w-md">
              <div className="flex gap-4">
                {[
                  { code: "GH", href: profile.github },
                  { code: "LN", href: profile.linkedin },
                ].map((s) => (
                  <a
                    key={s.code}
                    href={s.href || "#contact"}
                    aria-label={s.code === "GH" ? "GitHub" : "LinkedIn"}
                    className="grid h-8 w-8 place-items-center rounded-full border border-border font-mono text-[10px] text-muted-foreground transition-colors hover:border-cyan/50 hover:text-foreground"
                  >
                    {s.code}
                  </a>
                ))}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                B.Tech 2024 — 2028
              </span>
            </div>
          </Reveal>
        </div>

        {/* Profile placeholder */}
        <Reveal delay={220} className="justify-self-center lg:justify-self-end">
          <div className="relative grid h-60 w-60 place-items-center sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <div className="spin-ring absolute inset-0 rounded-full bg-[image:conic-gradient(from_0deg,transparent_0%,var(--primary)_30%,var(--cyan)_60%,transparent_100%)] opacity-50 blur-[1px]" />
            <div className="absolute inset-[5px] rounded-full bg-background" />
            <div className="absolute inset-[13px] rounded-full border border-border" />
            <div className="absolute inset-[24px] grid place-items-center overflow-hidden rounded-full border border-border bg-secondary/20 backdrop-blur-sm">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover"
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
        </Reveal>
      </div>
    </section>
  );
}
