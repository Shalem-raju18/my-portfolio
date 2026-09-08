import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Web Developer",
  "Flutter Developer",
  "AI Enthusiast",
  "Aspiring Software Developer",
];

export function TypingRoles() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setText(ROLES[0]);
  }, []);

  useEffect(() => {
    if (reduced.current) return;
    const full = ROLES[index];
    let delay = deleting ? 45 : 85;

    if (!deleting && text === full) delay = 1600;
    if (deleting && text === "") delay = 350;

    const t = window.setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % ROLES.length);
      } else {
        setText(full.slice(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <p
      className="mt-4 font-mono text-sm tracking-tight text-foreground sm:text-base"
      aria-live="polite"
    >
      <span className="text-cyan">&gt;</span> {text}
      <span className="caret-blink ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[2px] bg-cyan align-middle" />
    </p>
  );
}
