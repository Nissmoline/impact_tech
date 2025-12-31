import { Layers, Monitor, Palette, Code2, Database, Cpu, Globe, Zap } from 'lucide-react';
import { Project, Service, Testimonial, TechItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "3D & Interactive Experiences",
    description: "WebGL/Three.js product configurators, showrooms, and technical visualizations optimized for Core Web Vitals.",
    icon: Layers
  },
  {
    id: 2,
    title: "Web Development",
    description: "High-performance marketing sites, SaaS portals, and dashboards on React/Next.js with SEO and speed baked in.",
    icon: Code2
  },
  {
    id: 3,
    title: "UX/UI & Design Systems",
    description: "User-centric interfaces designed with empathy and precision, focused on conversion.",
    icon: Palette
  },
  {
    id: 4,
    title: "Mobile Apps",
    description: "Cross-platform apps with React Native/Flutter, from build to store publish and ongoing maintenance.",
    icon: Monitor
  },
  {
    id: 5,
    title: "Backend & APIs",
    description: "Secure REST/GraphQL services on Node.js/Nest/Express, data models, and integrations with payments/CRM/ERP..",
    icon: Database
  },
  {
    id: 6,
    title: "DevOps & Reliability",
    description: "CI/CD, AWS cloud foundations, observability, security hardening, and cost/performance optimization.",
    icon: Cpu
  },
  {
    id: 7,
    title: "QA & Test Automation",
    description: "Test pyramids with unit/integration/E2E, regression gates in CI, and stable environments.",
    icon: Zap
  },
  {
    id: 8,
    title: "SEO - Discovery & Strategy",
    description: "Outcome-focused workshops, roadmaps, KPIs, and risk framing before we write code.",
    icon: Globe
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/Nissmoline/Lumina-E-Commerce-Demo",
    live: "https://lumina-e-commerce-demo.vercel.app/"
  },
  {
    id: 2,
    title: "Creative Portfolio",
    category: "Website",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    stack: ["React", "Three.js", "Framer Motion"],
    github: "https://github.com/Nissmoline/cosmos-demo",
    live: "https://cosmos-demo-jade.vercel.app/"
  },
  {
    id: 3,
    title: "CRM System",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stack: ["React", "TypeScript", "Firebase", "Charts"],
    github: "https://github.com/Nissmoline/Rent-Car-CRM",
    live: "https://rent-car-crm.vercel.app/"
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    stack: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com/Nissmoline/fittrack-ai",
    live: "https://fittrack-ai-six.vercel.app/"
  },
  {
    id: 5,
    title: "ServiceTree",
    category: "Website",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    stack: ["Next.js", "React", "TypeScript", "i18n"],
    github: "https://github.com/Nissmoline/servicetree",
    live: "https://www.servicetree.online/"
  },
  {
    id: 6,
    title: "Milawyer Legal Services",
    category: "Website",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    stack: ["React", "PWA", "i18n", "SEO"],
    github: "https://github.com/Nissmoline/lawmi",
    live: "https://milawyer.gr/"
  },
  {
    id: 7,
    title: "Yana Photography Portfolio",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    stack: ["Next.js", "Sanity CMS", "React", "Analytics"],
    github: "https://github.com/aquamarineru/portfolioYana",
    live: "https://www.yanakorobeinykphoto.com/"
  },
  {
    id: 8,
    title: "Handyman24 Services",
    category: "Website",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    stack: ["Vue.js", "SEO", "i18n", "Analytics"],
    github: "https://github.com/Nissmoline/handyman",
    live: "https://www.handyman24.gr/"
  },
  {
    id: 9,
    title: "Sales Tracker - Deutsche Telekom",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    stack: ["Flutter", "Provider", "Hive", "Mobile"],
    github: "https://github.com/Nissmoline/sales_tracker"
  },
  {
    id: 10,
    title: "Modern Login Form",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    stack: ["HTML", "CSS", "JavaScript", "UI Design"],
    live: "https://codepen.io/Nissmoline/pen/xbVMdqv"
  },
  {
    id: 11,
    title: "3D Modern Carousel",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    stack: ["React", "Vite 6", "Tailwind CSS", "UI Design"],
    github: "https://github.com/Nissmoline/orbit-3d",
    live: "https://orbit-3d-smoky.vercel.app/"
  },
  {
    id: 12,
    title: "ModernStore - Premium Shop",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    stack: ["React", "E-Commerce", "Tailwind CSS", "Responsive"],
    github: "https://github.com/Nissmoline/web-app-store",
    live: "https://web-app-store-nu.vercel.app/"
  },
  {
    id: 13,
    title: "Lumina Store",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    stack: ["React", "React Router", "Tailwind CSS", "E-Commerce"],
    github: "https://github.com/Nissmoline/modern-lifestyle-store",
    live: "https://modern-lifestyle-store.vercel.app/"
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
