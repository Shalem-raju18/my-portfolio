import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  index,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  index?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <div className="flex items-center gap-3">
        {index ? (
          <span className="font-mono text-[10px] tracking-[0.25em] text-cyan/70">{index}</span>
        ) : null}
        <span className="h-px w-8 bg-cyan/40" />
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
