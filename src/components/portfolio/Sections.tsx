import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Github,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MonitorSmartphone,
  Phone,
  Server,
  Image as ImageIcon,
} from "lucide-react";
import { toast } from "sonner";
import {
  education,
  learningNow,
  profile,
  projects,
  services,
  skillGroups,
} from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Student today, developer in the making"
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="glass glass-hover rounded-3xl p-7 sm:p-9">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.about}
          </p>
          <p className="mt-6 border-l-2 border-primary/60 pl-4 text-sm text-foreground/85">
            {profile.objective}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Code2, label: "Web Development", note: "Main focus" },
              { icon: Cpu, label: "Problem Solving", note: "Python · Java · C++" },
              { icon: Layers, label: "Full-Stack", note: "React + Node.js" },
            ].map((f) => (
              <div key={f.label} className="rounded-2xl border border-border bg-secondary/30 p-4">
                <f.icon className="h-5 w-5 text-cyan" />
                <p className="mt-3 text-sm font-semibold">{f.label}</p>
                <p className="text-xs text-muted-foreground">{f.note}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={100} className="gradient-border glass rounded-3xl p-7">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <p className="mt-4 text-sm font-semibold">B.Tech</p>
            <p className="text-sm text-muted-foreground">Acharya Nagarjuna University</p>
            <p className="mt-1 text-sm text-muted-foreground">2024 – 2028 · Currently pursuing</p>
          </Reveal>

          <Reveal delay={180} className="glass glass-hover rounded-3xl p-7">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Currently Learning / Building
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {learningNow.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-foreground/85"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Editable list — update as your focus changes.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Education"
        title="Academic Journey"
        subtitle="Currently in the third year of a four-year engineering program."
      />
      <div className="relative mx-auto mt-14 max-w-3xl pl-8">
        <div className="shimmer-line absolute left-[7px] top-2 bottom-2 w-[2px] rounded-full opacity-70" />
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 100}>
            <div className="relative">
              <span className="absolute -left-8 top-8 grid h-4 w-4 place-items-center rounded-full bg-[image:var(--gradient-brand)] shadow-[var(--glow-primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-background" />
              </span>
              <div className="glass glass-hover gradient-border rounded-3xl p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold sm:text-xl">{e.degree}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-cyan">
                    {e.period}
                  </span>
                </div>
                <p className="mt-5 text-sm text-foreground/80">Status: {e.status}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const levelTone: Record<string, string> = {
  "Building With": "text-cyan border-cyan/40 bg-cyan/10",
  Developing: "text-primary border-primary/40 bg-primary/10",
  Learning: "text-violet border-violet/40 bg-violet/10",
  Familiar: "text-muted-foreground border-border bg-secondary/40",
};

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I Work With"
        subtitle="Honest progress labels instead of invented percentages."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 120} className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            <ul className="mt-6 grid gap-3">
              {group.items.map((s) => (
                <li
                  key={s.name}
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-secondary/25 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary/50"
                >
                  <span className="truncate text-sm font-medium">{s.name}</span>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-medium ${levelTone[s.level]}`}
                  >
                    {s.level}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Project Showcase"
        subtitle="Editable placeholders — replace each card with a real project as you build it."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 90}>
            <article className="glass glass-hover group h-full overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-[image:linear-gradient(135deg,oklch(0.3_0.08_270),oklch(0.24_0.05_240))]">
                <div className="grid-bg absolute inset-0 opacity-60" />
                <div className="absolute inset-0 grid place-items-center text-center transition-transform duration-500 group-hover:scale-105">
                  <div>
                    <ImageIcon className="mx-auto h-7 w-7 text-cyan/80" />
                    <p className="mt-2 text-xs text-muted-foreground">Add project thumbnail</p>
                  </div>
                </div>
                <span className="absolute left-4 top-4 font-display text-xs font-bold tracking-widest text-foreground/70">
                  PROJECT {p.id}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[11px] text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a
                    href={profile.github || "#contact"}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-2 text-xs font-semibold transition-colors hover:border-primary/50"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const serviceIcons = [Layout, MonitorSmartphone, Server];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Services"
        title="What I'm Building Toward"
        subtitle="I create modern, responsive, and user-friendly websites using current web technologies — and I'm expanding into complete full-stack applications."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = serviceIcons[i] ?? Layout;
          return (
            <Reveal key={s.title} delay={i * 110} className="h-full">
              <div className="glass glass-hover h-full rounded-3xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)]">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={200}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
          These are skills and services I'm actively developing as a student — not past client work.
        </p>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24">
      <div className="orb h-72 w-72 left-1/2 -translate-x-1/2 bg-violet opacity-30" />
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Great."
        subtitle="I'm always interested in learning, collaborating, building projects, and connecting with people in technology."
      />
      <div className="relative mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="glass gradient-border rounded-3xl p-7">
          <ul className="grid gap-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-cyan"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-cyan"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                {profile.phone}
              </a>
            </li>
          </ul>
          <div className="mt-7 border-t border-border pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Links</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>GitHub — add later</li>
              <li>LinkedIn — add later</li>
              <li>Other professional links — add later</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120} className="glass rounded-3xl p-7">
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              const form = e.currentTarget;
              setTimeout(() => {
                setSending(false);
                form.reset();
                toast.success("Thanks! Your message is ready to send.", {
                  description: `Reach out directly at ${profile.email}.`,
                });
              }, 600);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <label className="grid gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit more..."
                className="w-full resize-none rounded-2xl border border-input bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-input bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
      />
    </label>
  );
}
