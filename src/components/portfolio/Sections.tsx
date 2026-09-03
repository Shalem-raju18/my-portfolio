import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Github,
  Layers,
  Layout,
  Linkedin,
  Mail,
  MonitorSmartphone,
  Phone,
  Server,
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
import { sendContactEmail } from "@/lib/email";
import { Reveal, SectionHeading } from "./Reveal";

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-sm border border-border bg-secondary/15 backdrop-blur-sm transition-colors duration-300 hover:border-cyan/30 ${className}`}
    >
      {children}
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28"
    >
      <SectionHeading
        index="01"
        eyebrow="About Me"
        title="Student today, developer in the making"
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <Panel className="h-full p-7 sm:p-9">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.about}
            </p>
            <p className="mt-7 border-l border-cyan/50 pl-5 text-sm leading-relaxed text-foreground/85">
              {profile.objective}
            </p>
            <div className="mt-9 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
              {[
                { icon: Code2, label: "Web Development", note: "Main focus" },
                { icon: Cpu, label: "Problem Solving", note: "Python · Java · C++" },
                { icon: Layers, label: "Full-Stack", note: "React + Node.js" },
              ].map((f) => (
                <div key={f.label} className="bg-background/60 p-5">
                  <f.icon className="h-4 w-4 text-cyan" />
                  <p className="mt-4 text-sm font-semibold">{f.label}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {f.note}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={100}>
            <Panel className="p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Education
              </p>
              <p className="mt-5 text-lg font-semibold tracking-tight">B.Tech</p>
              <p className="mt-1 text-sm text-muted-foreground">Acharya Nagarjuna University</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-[10px] tracking-widest text-cyan">2024 — 2028</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                  Pursuing
                </span>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={180}>
            <Panel className="p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Currently Learning
              </p>
              <ul className="mt-5 grid gap-3">
                {learningNow.map((item, i) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="font-mono text-[10px] text-cyan/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section
      id="experience"
      aria-label="Experience and education"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28"
    >
      <SectionHeading
        index="04"
        eyebrow="Experience & Education"
        title="Academic Journey"
        subtitle="Currently in the third year of a four-year engineering program."
      />

      <div className="mt-14 grid gap-6">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 100}>
            <Panel className="grid gap-6 p-7 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-9">
              <span className="font-mono text-xs tracking-[0.25em] text-cyan/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                  Status · {e.status}
                </p>
              </div>
              <span className="justify-self-start rounded-sm border border-border px-3 py-1.5 font-mono text-[10px] tracking-widest text-cyan sm:justify-self-end">
                {e.period}
              </span>
            </Panel>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const levelTone: Record<string, string> = {
  "Building With": "text-cyan border-cyan/40",
  Developing: "text-primary border-primary/40",
  Learning: "text-violet border-violet/40",
  Familiar: "text-muted-foreground border-border",
};

const skillIcons: Record<string, { Icon: IconType; color: string }> = {
  python: { Icon: SiPython, color: "#3776AB" },
  java: { Icon: FaJava, color: "#E76F00" },
  cpp: { Icon: SiCplusplus, color: "#00599C" },
  dart: { Icon: SiDart, color: "#0175C2" },
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss3, color: "#1572B6" },
  react: { Icon: SiReact, color: "#61DAFB" },
  node: { Icon: SiNodedotjs, color: "#5FA04E" },
  flutter: { Icon: SiFlutter, color: "#02569B" },
  firebase: { Icon: SiFirebase, color: "#FFCA28" },
  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: "#E6EDF3" },
  vscode: { Icon: TbBrandVscode, color: "#007ACC" },
};

const groupIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Web Development": Globe,
  "Mobile & Tools": Smartphone,
};

function SkillCard({ name, level, icon }: { name: string; level: string; icon?: string }) {
  const entry = icon ? skillIcons[icon] : undefined;
  const Icon = entry?.Icon;

  return (
    <div
      className="group/skill relative flex flex-col items-center gap-3 overflow-hidden rounded-sm border border-border bg-secondary/20 p-4 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/45 hover:bg-secondary/30 hover:shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--cyan)_45%,transparent)] sm:p-5"
    >
      <span
        className="pointer-events-none absolute inset-x-0 -top-16 h-24 opacity-0 blur-2xl transition-opacity duration-500 group-hover/skill:opacity-40"
        style={{ background: entry?.color ?? "var(--cyan)" }}
        aria-hidden="true"
      />
      {Icon ? (
        <Icon
          className="relative h-8 w-8 shrink-0 transition-transform duration-300 group-hover/skill:scale-115 sm:h-10 sm:w-10"
          style={{ color: entry?.color }}
          aria-hidden="true"
        />
      ) : null}
      <span className="relative text-xs font-semibold tracking-tight sm:text-sm">{name}</span>
      <span
        className={`relative shrink-0 rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] sm:text-[10px] ${levelTone[level]}`}
      >
        {level}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28"
    >
      <SectionHeading
        index="02"
        eyebrow="Skills"
        title="Tools I Work With"
        subtitle="Honest progress labels instead of invented percentages."
      />

      <div className="mt-14 grid gap-10 sm:gap-12">
        {skillGroups.map((group, gi) => {
          const GroupIcon = groupIcons[group.title] ?? Code2;
          return (
            <Reveal key={group.title} delay={gi * 120}>
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h3 className="flex items-center gap-3 text-base font-semibold tracking-tight">
                    <GroupIcon className="h-4 w-4 text-cyan" aria-hidden="true" />
                    {group.title}
                  </h3>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                  {group.items.map((s) => (
                    <SkillCard key={s.name} name={s.name} level={s.level} icon={s.icon} />
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}


function ProjectCover({ p }: { p: (typeof projects)[number] }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[2/1] overflow-hidden border-b border-border bg-background/60">
      {/* Fallback placeholder */}
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-6xl font-bold tracking-tighter text-foreground/10 transition-transform duration-500 group-hover:scale-110">
          {p.id}
        </span>
      </div>
      {/* Cover image overlays the placeholder; hides itself on load error */}
      {p.image && !failed && (
        <img
          src={p.image}
          alt={`${p.title} repository cover`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <span className="absolute left-5 top-5 z-10 rounded-sm bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-sm">
        Project {p.id}
      </span>
      <span className="absolute bottom-0 left-0 z-10 h-px w-0 bg-cyan transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28"
    >
      <SectionHeading
        index="03"
        eyebrow="Projects"
        title="Project Showcase"
        subtitle="Real projects from my GitHub — each card links to its repository."
      />
      <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 90} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-secondary/10 transition-colors duration-300 hover:border-cyan/40">
              <ProjectCover p={p} />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <ul aria-label={`${p.title} technologies`} className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-sm border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
                  <a
                    href={p.github || profile.github || "#contact"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} GitHub repository`}
                    className="inline-flex min-h-9 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-cyan"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={p.image || p.github || "#projects"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="inline-flex min-h-9 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
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
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionHeading
        index="05"
        eyebrow="Services"
        title="What I'm Building Toward"
        subtitle="I create modern, responsive, and user-friendly websites using current web technologies — and I'm expanding into complete full-stack applications."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = serviceIcons[i] ?? Layout;
          return (
            <Reveal key={s.title} delay={i * 110} className="h-full bg-background/60">
              <div className="group h-full p-7 transition-colors duration-300 hover:bg-secondary/20 sm:p-8">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-cyan" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground/50">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <span className="mt-7 block h-px w-8 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-cyan" />
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={200}>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
          Skills and services actively in development — not past client work.
        </p>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28"
    >
      <div className="orb h-72 w-72 left-1/2 -translate-x-1/2 bg-primary opacity-20" />
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title="Let's Build Something Great."
        subtitle="I'm always interested in learning, collaborating, building projects, and connecting with people in technology."
      />
      <div className="relative mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <Panel className="h-full p-6 sm:p-7">
            <ul className="grid">
              <li className="border-b border-border/60 py-4 first:pt-0">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex min-h-11 items-center gap-3 text-sm transition-colors hover:text-cyan"
                >
                  <Mail className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  <span className="truncate">{profile.email}</span>
                </a>
              </li>
              <li className="py-4">
                <a
                  href={`tel:${profile.phone}`}
                  className="flex min-h-11 items-center gap-3 text-sm transition-colors hover:text-cyan"
                >
                  <Phone className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  {profile.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Links
              </p>
              <ul className="mt-4 grid gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-3 transition-colors hover:text-cyan"
                  >
                    <Github className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                    GitHub
                  </a>
                </li>
                <li>
                  {profile.linkedin ? (
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center gap-3 transition-colors hover:text-cyan"
                    >
                      <Linkedin className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                      LinkedIn
                    </a>
                  ) : (
                    <span className="flex min-h-11 items-center gap-3 text-muted-foreground/80">
                      <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
                      LinkedIn — coming soon
                    </span>
                  )}
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex min-h-11 items-center gap-3 transition-colors hover:text-cyan"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={120}>
          <Panel className="p-7 sm:p-8">
            <form
              className="grid gap-5"
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = {
                  name: String(formData.get("name") ?? "").trim(),
                  email: String(formData.get("email") ?? "").trim(),
                  subject: String(formData.get("subject") ?? "").trim(),
                  message: String(formData.get("message") ?? "").trim(),
                };

                try {
                  await sendContactEmail(data);
                  form.reset();
                  toast.success("Message sent!", {
                    description: "Thanks for reaching out — I'll get back to you soon.",
                  });
                } catch (err) {
                  console.error(err);
                  toast.error("Something went wrong.", {
                    description: "Please try again or email me directly.",
                  });
                } finally {
                  setSending(false);
                }
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" />
              <label className="grid gap-2">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit more..."
                  className="w-full resize-none rounded-sm border-b border-input bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan"
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="mt-2 w-full rounded-sm bg-foreground px-6 py-4 text-sm font-semibold uppercase tracking-widest text-background transition-colors duration-300 hover:bg-cyan hover:text-primary-foreground disabled:opacity-70"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Panel>
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
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-sm border-b border-input bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan"
      />
    </label>
  );
}
