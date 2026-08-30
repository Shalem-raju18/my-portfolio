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

const title = "Shalemraju Janga | Personal Portfolio & Developer";
const description =
  "Portfolio of Shalemraju Janga, a B.Tech student and web developer building modern, responsive interfaces with React, Node.js and Python. Projects, skills and contact.";
const url = "https://gradient-growth-grid.lovable.app/";
const image = "https://i.postimg.cc/CLRcFGJ7/IMG-20250802-114627.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
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
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
