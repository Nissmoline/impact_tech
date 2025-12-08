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
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Tailwind", color: "#38B2AC" },
  { name: "Three.js", color: "#FFFFFF" },
  { name: "Figma", color: "#F24E1E" },
  { name: "GraphQL", color: "#E10098" },
];
