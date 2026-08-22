import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,#000_35%,transparent_75%)]" />
      <div
        className="orb h-72 w-72 -top-20 -left-10 bg-primary"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb h-80 w-80 top-40 right-0 bg-violet"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="orb h-56 w-56 bottom-0 left-1/3 bg-cyan opacity-30"
        style={{ animationDelay: "-11s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-cyan" />
              Open to internships & collaborations
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              Building Modern <span className="text-gradient">Experiences</span> With Code.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-4 text-sm font-medium text-foreground/80">{profile.role}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-[1.03]"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                Let's Connect
              </a>
              <a
                href={profile.resumeUrl || "#contact"}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="justify-self-center">
          <div className="relative grid h-64 w-64 place-items-center sm:h-80 sm:w-80">
            <div className="spin-ring absolute inset-0 rounded-full bg-[image:conic-gradient(from_0deg,transparent_0%,var(--primary)_25%,var(--violet)_55%,var(--cyan)_75%,transparent_100%)] opacity-70 blur-[1px]" />
            <div className="absolute inset-[6px] rounded-full bg-background" />
            <div className="absolute inset-[14px] rounded-full border border-dashed border-border" />
            <div className="glass absolute inset-[22px] grid place-items-center overflow-hidden rounded-full">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="text-center">
                  <span className="text-gradient font-display text-5xl font-bold">
                    {profile.initials}
                  </span>
                  <p className="mt-2 px-6 text-[11px] leading-snug text-muted-foreground">
                    Add your profile photo here
                  </p>
                </div>
              )}
            </div>
            <div className="glass absolute -bottom-2 -right-2 rounded-2xl px-4 py-2 text-center">
              <p className="font-display text-sm font-bold text-cyan">3rd Year</p>
              <p className="text-[11px] text-muted-foreground">B.Tech Student</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
