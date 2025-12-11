import { Layers, Monitor, Palette, Code2, Database, Cpu, Globe, Zap } from 'lucide-react';
import { Project, Service, Testimonial, TechItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "3D Web Experiences",
    description: "Immersive WebGL and Three.js implementations that captivate users and increase dwell time.",
    icon: Layers
  },
  {
    id: 2,
    title: "Front-End Engineering",
    description: "Scalable, performant architectures using React, Next.js and modern state management.",
    icon: Code2
  },
  {
    id: 3,
    title: "UX/UI Design",
    description: "User-centric interfaces designed with empathy and precision, focused on conversion.",
    icon: Palette
  },
  {
    id: 4,
    title: "Design Systems",
    description: "Comprehensive component libraries that bridge the gap between design and engineering.",
    icon: Monitor
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Lumina E-Commerce",
    category: "E-Commerce",
    image: "https://picsum.photos/600/400?random=1",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/Nissmoline/Lumina-E-Commerce-Demo",
    live: "https://lumina-e-commerce-demo.vercel.app/",
    demo: "https://lumina-e-commerce-demo.vercel.app/"
  },
  {
    id: 2,
    title: "Neon Finance Dashboard",
    category: "FinTech",
    image: "https://picsum.photos/600/400?random=2",
    stack: ["React", "D3.js", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 3,
    title: "Orbit Social Platform",
    category: "Social",
    image: "https://picsum.photos/600/400?random=3",
    stack: ["TypeScript", "Node.js", "WebSockets"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 4,
    title: "Zenith Architecture",
    category: "Portfolio",
    image: "https://picsum.photos/600/400?random=4",
    stack: ["WebGL", "Three.js", "GSAP"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "CTO",
    company: "Nexus Tech",
    quote: "Vertex Studio transformed our outdated platform into a cutting-edge visual experience. The 3D integration is seamless."
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead Designer",
    company: "Atmosphere",
    quote: "Finally, a dev team that understands design nuance. They didn't just implement our Figma files; they elevated them."
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Product Owner",
    company: "SaaS Flow",
    quote: "Incredible attention to detail. The animations are buttery smooth and the code quality is top-tier."
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Vue.js", color: "#42B883" },
  { name: "Angular", color: "#DD0031" },
  { name: "Svelte", color: "#FF3E00" },
  { name: "Astro", color: "#FF5D01" },
  { name: "Vite", color: "#646CFF" },
  { name: "Webpack", color: "#8DD6F9" },
  { name: "Sass", color: "#CC6699" },
  { name: "Styled Components", color: "#DB7093" },
  { name: "Framer Motion", color: "#0055FF" },
  { name: "GSAP", color: "#88CE02" },
  { name: "Express", color: "#000000" },
  { name: "NestJS", color: "#E0234E" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Redis", color: "#DC382D" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
  { name: "Jest", color: "#C21325" },
  { name: "Vitest", color: "#729B1B" },
  { name: "Vercel", color: "#000000" },
  { name: "AWS", color: "#FF9900" },
  { name: "Sanity", color: "#F03E2F" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Zustand", color: "#443E38" },
  { name: "Redux", color: "#764ABC" },
];
