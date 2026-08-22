import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Contact,
  Education,
  Projects,
  Services,
  Skills,
} from "@/components/portfolio/Sections";
import { Footer } from "@/components/portfolio/Footer";

const title = "Shalemraju Janga — Aspiring Web Developer Portfolio";
const description =
  "Portfolio of Shalemraju Janga, a B.Tech student at Acharya Nagarjuna University building modern, responsive web experiences with React, Node.js, Python and more.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
