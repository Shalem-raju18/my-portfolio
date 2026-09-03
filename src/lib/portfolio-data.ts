// Edit this file to update the portfolio content.

export const profile = {
  name: "Shalemraju Janga",
  initials: "SJ",
  role: "B.Tech Student | Aspiring Web Developer | Full-Stack Enthusiast",
  headline: "Building Modern Experiences With Code.",
  intro:
    "I'm Shalemraju Janga, a B.Tech student and aspiring web developer passionate about creating modern, responsive, and engaging digital experiences.",
  about:
    "I'm Shalemraju Janga, a B.Tech student at Acharya Nagarjuna University. I'm currently in my third year and passionate about technology, programming, and web development. I enjoy learning new technologies, building practical projects, and turning ideas into interactive digital experiences. As a fresher, I'm focused on continuously improving my skills and creating projects that demonstrate what I can build.",
  objective:
    "Career objective: to grow into a full-stack web developer by building real, well-crafted projects and learning modern tools end to end.",
  email: "jshalemraju07@gmail.com",
  phone: "7075811054",
  // Replace with your links when ready
  github: "https://github.com/Shalem-raju18",
  linkedin: "https://www.linkedin.com/in/shalemraju-janga-19b77b380/",
  resumeUrl: "",
  // Drop an image URL here to replace the monogram placeholder
  photoUrl: "https://i.postimg.cc/y87H5xb4/my-photo.jpg",

};

export const learningNow = ["React.js", "Node.js", "REST APIs", "Git & GitHub"];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "Acharya Nagarjuna University",
    period: "2024 – 2028",
    status: "Currently pursuing",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", level: "Building With", icon: "python" },
      { name: "Java", level: "Developing", icon: "java" },
      { name: "C++", level: "Familiar", icon: "cpp" },
      { name: "Dart", level: "Developing", icon: "dart" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML5", level: "Building With", icon: "html" },
      { name: "CSS3", level: "Building With", icon: "css" },
      { name: "React", level: "Learning", icon: "react" },
      { name: "Node.js", level: "Learning", icon: "node" },
    ],
  },
  {
    title: "Mobile & Tools",
    items: [
      { name: "Flutter", level: "Building With", icon: "flutter" },
      { name: "Firebase", level: "Learning", icon: "firebase" },
      { name: "Git", level: "Building With", icon: "git" },
      { name: "GitHub", level: "Building With", icon: "github" },
      { name: "VS Code", level: "Building With", icon: "vscode" },
    ],
  },
];


// Cover images: screenshots from each repo.
// demo: set a real deployed app URL to show a Live Demo button.
// Leave "" to show the "Deployment Coming Soon" badge instead.
type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "AI Chat App",
    description:
      "A Flutter chat application with a conversational UI for interactive messaging.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/Shalem-raju18/ai_chat_app",
    demo: "",
    image:
      "https://raw.githubusercontent.com/Shalem-raju18/ai_chat_app/main/ai_caht_app.png",
  },
  {
    id: "02",
    title: "Calculator App",
    description:
      "A clean Flutter calculator app for quick arithmetic with a modern mobile UI.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/Shalem-raju18/calculator_app",
    image:
      "https://raw.githubusercontent.com/Shalem-raju18/calculator_app/main/Calculator_app.png",
  },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive and interactive interfaces built with HTML, CSS and JavaScript/React.",
  },
  {
    title: "Responsive Web Design",
    description:
      "Layouts designed to work smoothly across desktop, tablet and mobile devices.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Learning to combine React and Node.js to build complete web applications end to end.",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
