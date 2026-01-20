import {
  Layers, Monitor, Palette, Code2, Database, Cpu, Globe, Zap,
  Target, Smartphone, BarChart3, Users, ShieldCheck, Workflow,
  Bell, Star, Puzzle, Activity, DollarSign, FileCode, Package,
  TrendingUp, Layout, Eye, Search, FileText, Link, Map,
  Wrench, Rocket, CheckCircle2, Compass, Sparkles, Box
} from 'lucide-react';
import { Project, Service, Testimonial, TechItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "3D & Interactive Experiences",
    description: "WebGL/Three.js product configurators, showrooms, and technical visualizations optimized for Core Web Vitals.",
    icon: Layers,
    slug: "3d-interactive",

    hero: {
      headline: "Immersive 3D Experiences That Perform",
      subheadline: "WebGL/Three.js product configurators, virtual showrooms, and technical visualizations that don't compromise on speed or accessibility.",
      cta: "Start Your 3D Project"
    },

    benefits: [
      {
        title: "Performance-First 3D",
        description: "Optimized loading, LOD strategies, and Core Web Vitals compliance without sacrificing visual fidelity.",
        icon: Zap
      },
      {
        title: "Product Configurators",
        description: "Real-time 3D customization with material/color swaps, live pricing, and integrated checkout flows.",
        icon: Palette
      },
      {
        title: "Virtual Showrooms",
        description: "Interactive spaces that let customers explore products from any device with intuitive camera controls.",
        icon: Monitor
      },
      {
        title: "Technical Visualization",
        description: "Engineering-grade 3D for product demos, training simulations, and complex data visualization.",
        icon: Cpu
      },
      {
        title: "Cross-Device Ready",
        description: "Responsive 3D experiences optimized for desktop, tablet, and mobile with touch and gesture support.",
        icon: Smartphone
      },
      {
        title: "SEO & Accessibility",
        description: "Progressive enhancement, fallbacks, and semantic markup so 3D doesn't hurt discoverability.",
        icon: Globe
      }
    ],

    process: [
      {
        step: 1,
        title: "Concept & Scope",
        description: "We define use cases, performance budgets, asset complexity, and integration points with your stack.",
        icon: Compass
      },
      {
        step: 2,
        title: "Prototype & Validate",
        description: "Early WebGL proof-of-concept tested on real devices to validate frame rates and loading times.",
        icon: Sparkles
      },
      {
        step: 3,
        title: "Asset Pipeline",
        description: "3D model optimization, texture compression, LOD generation, and glTF/GLB workflows for web.",
        icon: Box
      },
      {
        step: 4,
        title: "Integration & Polish",
        description: "Embed into React/Next.js, add UI controls, analytics hooks, and ship with observability.",
        icon: CheckCircle2
      }
    ],

    technologies: [
      {
        category: "3D & Graphics",
        items: [
          { name: "Three.js", description: "WebGL rendering engine" },
          { name: "React Three Fiber", description: "React renderer for Three.js" },
          { name: "Drei", description: "Helper components & utilities" },
          { name: "GLSL Shaders", description: "Custom visual effects" },
          { name: "glTF/GLB", description: "Optimized 3D asset format" }
        ]
      },
      {
        category: "Performance",
        items: [
          { name: "Draco Compression", description: "Mesh compression" },
          { name: "KTX2 Textures", description: "GPU-optimized textures" },
          { name: "LOD Strategies", description: "Level-of-detail optimization" },
          { name: "Lazy Loading", description: "Progressive asset loading" }
        ]
      },
      {
        category: "Integration",
        items: [
          { name: "React/Next.js", description: "Framework integration" },
          { name: "TypeScript", description: "Type-safe 3D code" },
          { name: "Zustand/Redux", description: "3D state management" },
          { name: "Analytics", description: "User interaction tracking" }
        ]
      }
    ],

    seo: {
      metaTitle: "3D & Interactive Web Experiences | WebGL Development | Impact Tech",
      metaDescription: "Professional WebGL/Three.js product configurators, virtual showrooms, and technical visualizations optimized for performance and Core Web Vitals. Greece-based 3D development studio.",
      keywords: ["3D web development", "WebGL development", "Three.js development", "product configurator", "virtual showroom", "3D visualization", "React Three Fiber", "interactive 3D", "3D web experiences"]
    }
  },
  {
    id: 2,
    title: "Web Development",
    description: "High-performance marketing sites, SaaS portals, and dashboards on React/Next.js with SEO and speed baked in.",
    icon: Code2,
    slug: "web-development",

    hero: {
      headline: "Fast, Scalable Web Applications",
      subheadline: "High-performance marketing sites, SaaS portals, and dashboards built with React/Next.js, TypeScript, and modern best practices.",
      cta: "Build Your Web App"
    },

    benefits: [
      {
        title: "Performance-First Architecture",
        description: "SSR, ISR, and edge delivery strategies that keep pages loading under 2 seconds.",
        icon: Zap
      },
      {
        title: "SEO Built-In",
        description: "Server-side rendering, semantic HTML, structured data, and Core Web Vitals optimization from day one.",
        icon: Globe
      },
      {
        title: "Scalable Codebase",
        description: "Component-driven architecture with TypeScript, clear patterns, and design system integration.",
        icon: Code2
      },
      {
        title: "Conversion-Focused UI",
        description: "Data-driven UX decisions, A/B testing ready, and micro-interactions that guide users to action.",
        icon: Target
      },
      {
        title: "Mobile-First Design",
        description: "Responsive layouts tested on real devices, progressive enhancement, and touch-optimized interfaces.",
        icon: Smartphone
      },
      {
        title: "Analytics & Observability",
        description: "Built-in tracking, error monitoring, and performance metrics for continuous improvement.",
        icon: BarChart3
      }
    ],

    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description: "Define requirements, user flows, technical architecture, and success metrics before any code.",
        icon: Compass
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description: "High-fidelity mockups, interactive prototypes, and design system foundations validated with stakeholders.",
        icon: Palette
      },
      {
        step: 3,
        title: "Development & Testing",
        description: "Type-safe React/Next.js development with automated testing, code reviews, and CI/CD pipelines.",
        icon: Code2
      },
      {
        step: 4,
        title: "Launch & Optimization",
        description: "Deployment to production, performance monitoring, and iterative improvements based on real user data.",
        icon: Rocket
      }
    ],

    technologies: [
      {
        category: "Frontend",
        items: [
          { name: "React", description: "UI library" },
          { name: "Next.js", description: "React framework with SSR" },
          { name: "TypeScript", description: "Type-safe JavaScript" },
          { name: "Tailwind CSS", description: "Utility-first CSS" },
          { name: "Framer Motion", description: "Animation library" }
        ]
      },
      {
        category: "State & Data",
        items: [
          { name: "Zustand/Redux", description: "State management" },
          { name: "TanStack Query", description: "Server state management" },
          { name: "SWR", description: "Data fetching" },
          { name: "GraphQL/REST", description: "API integration" }
        ]
      },
      {
        category: "Quality & Deployment",
        items: [
          { name: "Vitest/Jest", description: "Testing framework" },
          { name: "Playwright", description: "E2E testing" },
          { name: "ESLint/Prettier", description: "Code quality" },
          { name: "Vercel/AWS", description: "Deployment platforms" }
        ]
      }
    ],

    seo: {
      metaTitle: "Web Development Services | React & Next.js | Impact Tech Greece",
      metaDescription: "Professional web development: marketing sites, SaaS portals, and dashboards built with React, Next.js, and TypeScript. SEO-optimized, high-performance solutions from Greece.",
      keywords: ["web development", "React development", "Next.js development", "TypeScript", "SaaS development", "web applications", "frontend development", "Greece web development"]
    }
  },
  {
    id: 3,
    title: "UX/UI & Design Systems",
    description: "User-centric interfaces designed with empathy and precision, focused on conversion.",
    icon: Palette,
    slug: "ux-ui-design",

    hero: {
      headline: "Design That Converts & Scales",
      subheadline: "User-centric interfaces and design systems that balance aesthetics with usability, all built for growth and consistency.",
      cta: "Transform Your Design"
    },

    benefits: [
      {
        title: "User-Centered Research",
        description: "Interviews, personas, journey maps, and usability testing to ground design decisions in real user needs.",
        icon: Users
      },
      {
        title: "Conversion-Driven UI",
        description: "Every element optimized for clarity, trust, and action based on UX principles and A/B testing.",
        icon: Target
      },
      {
        title: "Scalable Design Systems",
        description: "Component libraries, design tokens, and documentation that keep teams aligned and shipping faster.",
        icon: Layers
      },
      {
        title: "Accessibility by Default",
        description: "WCAG-compliant patterns, keyboard navigation, and inclusive design from wireframes to production.",
        icon: ShieldCheck
      },
      {
        title: "Motion & Delight",
        description: "Purposeful animations and micro-interactions that guide attention without distraction.",
        icon: Sparkles
      },
      {
        title: "Design-to-Dev Handoff",
        description: "Structured Figma specs, component variants, and responsive rules that engineering can implement directly.",
        icon: Workflow
      }
    ],

    process: [
      {
        step: 1,
        title: "Research & Strategy",
        description: "User interviews, competitive analysis, and UX audits to identify opportunities and constraints.",
        icon: Compass
      },
      {
        step: 2,
        title: "Wireframes & Flows",
        description: "Low-fidelity wireframes and user flows validated with stakeholders before visual design.",
        icon: Layout
      },
      {
        step: 3,
        title: "Visual Design & Prototyping",
        description: "High-fidelity mockups in Figma with interactive prototypes for usability testing.",
        icon: Palette
      },
      {
        step: 4,
        title: "Design System & Handoff",
        description: "Component library, design tokens, and developer-friendly specs for seamless implementation.",
        icon: Package
      }
    ],

    technologies: [
      {
        category: "Design Tools",
        items: [
          { name: "Figma", description: "UI design & prototyping" },
          { name: "FigJam", description: "Collaborative whiteboarding" },
          { name: "Maze", description: "User testing platform" },
          { name: "Optimal Workshop", description: "IA and tree testing" }
        ]
      },
      {
        category: "Design Systems",
        items: [
          { name: "Design Tokens", description: "Scalable design variables" },
          { name: "Storybook", description: "Component documentation" },
          { name: "Radix UI", description: "Accessible primitives" },
          { name: "shadcn/ui", description: "Component library" }
        ]
      },
      {
        category: "Collaboration",
        items: [
          { name: "Figma Dev Mode", description: "Design-to-code workflow" },
          { name: "Zeplin/Zeroheight", description: "Developer handoff" },
          { name: "Notion/Miro", description: "Documentation & workshops" }
        ]
      }
    ],

    seo: {
      metaTitle: "UX/UI Design & Design Systems | Impact Tech Greece",
      metaDescription: "Professional UX/UI design services and scalable design systems. User research, conversion-focused interfaces, and accessibility-first design from Greece.",
      keywords: ["UX design", "UI design", "design systems", "user experience", "user interface", "Figma design", "UX research", "conversion optimization", "accessibility design"]
    }
  },
  {
    id: 4,
    title: "Mobile Apps",
    description: "Cross-platform apps with React Native/Flutter, from build to store publish and ongoing maintenance.",
    icon: Monitor,
    slug: "mobile-apps",

    hero: {
      headline: "Native-Quality Mobile Apps, Cross-Platform Speed",
      subheadline: "React Native and Flutter apps that feel native, ship faster, and share code across iOS and Android.",
      cta: "Build Your Mobile App"
    },

    benefits: [
      {
        title: "Cross-Platform Efficiency",
        description: "One codebase for iOS and Android, reducing development time and maintenance costs by up to 60%.",
        icon: Smartphone
      },
      {
        title: "Native Performance",
        description: "60 FPS animations, platform-specific UI patterns, and optimized builds that feel truly native.",
        icon: Zap
      },
      {
        title: "Offline-First Architecture",
        description: "Local databases, sync strategies, and resilient UX that works even when connectivity drops.",
        icon: Database
      },
      {
        title: "Push Notifications & Deep Linking",
        description: "Full integration with FCM/APNs, dynamic links, and attribution tracking for user re-engagement.",
        icon: Bell
      },
      {
        title: "Store Optimization",
        description: "App Store/Play Store listing optimization, review management, and compliance guidance.",
        icon: Star
      },
      {
        title: "CI/CD & Testing",
        description: "Automated builds, E2E testing on real devices, and over-the-air updates for rapid iteration.",
        icon: Workflow
      }
    ],

    process: [
      {
        step: 1,
        title: "Requirements & Platform Choice",
        description: "Define features, choose between React Native/Flutter based on constraints, and plan architecture.",
        icon: Compass
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description: "Platform-specific UI/UX patterns, interactive prototypes, and design system adapted for mobile.",
        icon: Palette
      },
      {
        step: 3,
        title: "Development & Testing",
        description: "Cross-platform development with real device testing, performance profiling, and code reviews.",
        icon: Code2
      },
      {
        step: 4,
        title: "Store Submission & Support",
        description: "App Store/Play Store submission, compliance review, and ongoing maintenance + updates.",
        icon: Rocket
      }
    ],

    technologies: [
      {
        category: "Frameworks",
        items: [
          { name: "React Native", description: "JavaScript mobile framework" },
          { name: "Flutter", description: "Dart mobile framework" },
          { name: "Expo", description: "React Native toolchain" },
          { name: "TypeScript", description: "Type-safe development" }
        ]
      },
      {
        category: "State & Storage",
        items: [
          { name: "Redux/Zustand", description: "State management" },
          { name: "React Query", description: "Server state" },
          { name: "Realm/SQLite", description: "Local databases" },
          { name: "AsyncStorage", description: "Key-value storage" }
        ]
      },
      {
        category: "DevOps & Testing",
        items: [
          { name: "Fastlane", description: "CI/CD automation" },
          { name: "Detox", description: "E2E testing" },
          { name: "Firebase", description: "Analytics & Crashlytics" },
          { name: "CodePush", description: "OTA updates" }
        ]
      }
    ],

    seo: {
      metaTitle: "Mobile App Development | React Native & Flutter | Impact Tech",
      metaDescription: "Professional cross-platform mobile app development with React Native and Flutter. iOS and Android apps from Greece. App Store optimization and ongoing maintenance.",
      keywords: ["mobile app development", "React Native", "Flutter", "iOS development", "Android development", "cross-platform apps", "mobile development Greece"]
    }
  },
  {
    id: 5,
    title: "Backend & APIs",
    description: "Secure REST/GraphQL services on Node.js/Nest/Express, data models, and integrations with payments/CRM/ERP.",
    icon: Database,
    slug: "backend-apis",

    hero: {
      headline: "Scalable APIs That Power Growth",
      subheadline: "Production-grade backend systems, REST/GraphQL APIs, and secure integrations built on Node.js, PostgreSQL, and modern cloud infrastructure.",
      cta: "Build Your Backend"
    },

    benefits: [
      {
        title: "RESTful & GraphQL APIs",
        description: "Well-documented, versioned APIs with strong typing, validation, and error handling.",
        icon: Code2
      },
      {
        title: "Database Design & Optimization",
        description: "Normalized schemas, indexing strategies, and query optimization for PostgreSQL/MongoDB.",
        icon: Database
      },
      {
        title: "Authentication & Authorization",
        description: "JWT, OAuth2, RBAC, and multi-tenant security patterns that scale with your product.",
        icon: ShieldCheck
      },
      {
        title: "Third-Party Integrations",
        description: "Payment gateways (Stripe, PayPal), CRMs (Salesforce), ERPs, and custom API connectors.",
        icon: Puzzle
      },
      {
        title: "Caching & Performance",
        description: "Redis caching, CDN integration, and database read replicas to handle high traffic.",
        icon: Zap
      },
      {
        title: "Observability & Monitoring",
        description: "Structured logging, metrics, alerting, and distributed tracing for production confidence.",
        icon: Activity
      }
    ],

    process: [
      {
        step: 1,
        title: "API Design & Data Modeling",
        description: "Define endpoints, schemas, and access patterns based on frontend needs and business logic.",
        icon: Compass
      },
      {
        step: 2,
        title: "Development & Testing",
        description: "Type-safe Node.js development with automated unit/integration tests and API contract testing.",
        icon: Code2
      },
      {
        step: 3,
        title: "Security & Compliance",
        description: "Penetration testing, encryption at rest/in-transit, and compliance prep (GDPR, SOC 2).",
        icon: ShieldCheck
      },
      {
        step: 4,
        title: "Deployment & Scaling",
        description: "Containerized deployments, auto-scaling, and zero-downtime releases on AWS/GCP.",
        icon: Rocket
      }
    ],

    technologies: [
      {
        category: "Backend Frameworks",
        items: [
          { name: "Node.js", description: "JavaScript runtime" },
          { name: "NestJS", description: "Enterprise Node framework" },
          { name: "Express", description: "Minimal web framework" },
          { name: "TypeScript", description: "Type-safe backend code" }
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "PostgreSQL", description: "Relational database" },
          { name: "MongoDB", description: "Document database" },
          { name: "Redis", description: "In-memory cache" },
          { name: "Prisma/TypeORM", description: "ORM/query builder" }
        ]
      },
      {
        category: "APIs & Integration",
        items: [
          { name: "GraphQL (Apollo)", description: "Query language" },
          { name: "REST", description: "HTTP APIs" },
          { name: "WebSockets", description: "Real-time communication" },
          { name: "Message Queues", description: "Bull/RabbitMQ" }
        ]
      }
    ],

    seo: {
      metaTitle: "Backend Development & API Services | Node.js | Impact Tech",
      metaDescription: "Professional backend development and API services. REST, GraphQL, Node.js, PostgreSQL, secure integrations. Backend development from Greece for global clients.",
      keywords: ["backend development", "API development", "Node.js", "REST API", "GraphQL", "database design", "PostgreSQL", "backend services", "server-side development"]
    }
  },
  {
    id: 6,
    title: "DevOps & Reliability",
    description: "CI/CD, AWS cloud foundations, observability, security hardening, and cost/performance optimization.",
    icon: Cpu,
    slug: "devops",

    hero: {
      headline: "Ship Faster, Sleep Better",
      subheadline: "Production-grade DevOps: CI/CD pipelines, cloud infrastructure, monitoring, and security that scales with your team.",
      cta: "Optimize Your Infrastructure"
    },

    benefits: [
      {
        title: "Automated CI/CD Pipelines",
        description: "GitHub Actions, GitLab CI, or CircleCI workflows that test, build, and deploy code with every commit.",
        icon: Workflow
      },
      {
        title: "Infrastructure as Code",
        description: "Terraform/CloudFormation templates for reproducible, version-controlled cloud environments.",
        icon: FileCode
      },
      {
        title: "Container Orchestration",
        description: "Docker + Kubernetes deployments with auto-scaling, health checks, and rolling updates.",
        icon: Package
      },
      {
        title: "Observability & Alerting",
        description: "Prometheus, Grafana, and ELK stack for metrics, logs, and distributed tracing.",
        icon: Activity
      },
      {
        title: "Security Hardening",
        description: "Least-privilege IAM, secrets management, network segmentation, and vulnerability scanning.",
        icon: ShieldCheck
      },
      {
        title: "Cost Optimization",
        description: "Right-sizing instances, reserved capacity, and auto-scaling policies to reduce cloud spend.",
        icon: DollarSign
      }
    ],

    process: [
      {
        step: 1,
        title: "Infrastructure Audit",
        description: "Assess current setup, identify bottlenecks, security gaps, and cost inefficiencies.",
        icon: Compass
      },
      {
        step: 2,
        title: "Architecture & Planning",
        description: "Design cloud architecture, choose managed services, and define IaC structure.",
        icon: Layout
      },
      {
        step: 3,
        title: "Implementation & Migration",
        description: "Build pipelines, provision infrastructure, and migrate workloads with zero downtime.",
        icon: Cpu
      },
      {
        step: 4,
        title: "Monitoring & Iteration",
        description: "Set up dashboards, alerts, and runbooks for continuous improvement and incident response.",
        icon: TrendingUp
      }
    ],

    technologies: [
      {
        category: "Cloud Platforms",
        items: [
          { name: "AWS", description: "Amazon Web Services" },
          { name: "Google Cloud", description: "GCP infrastructure" },
          { name: "Azure", description: "Microsoft cloud" },
          { name: "Vercel/Netlify", description: "Frontend hosting" }
        ]
      },
      {
        category: "IaC & Containers",
        items: [
          { name: "Terraform", description: "Infrastructure as Code" },
          { name: "Docker", description: "Containerization" },
          { name: "Kubernetes", description: "Container orchestration" },
          { name: "Helm", description: "Kubernetes package manager" }
        ]
      },
      {
        category: "CI/CD & Monitoring",
        items: [
          { name: "GitHub Actions", description: "CI/CD automation" },
          { name: "GitLab CI", description: "GitLab pipelines" },
          { name: "Prometheus/Grafana", description: "Metrics & dashboards" },
          { name: "Sentry/DataDog", description: "Error & performance tracking" }
        ]
      }
    ],

    seo: {
      metaTitle: "DevOps & Cloud Infrastructure Services | AWS | Impact Tech",
      metaDescription: "Professional DevOps services: CI/CD, AWS cloud infrastructure, Kubernetes, monitoring, and security. DevOps consulting from Greece.",
      keywords: ["DevOps", "CI/CD", "AWS", "cloud infrastructure", "Kubernetes", "Docker", "infrastructure as code", "Terraform", "DevOps services", "cloud consulting"]
    }
  },
  {
    id: 7,
    title: "Custom Business Applications",
    description: "Tailor-made web, mobile, and internal software that streamlines operations and scales with your business.",
    icon: Puzzle,
    slug: "custom-software",

    hero: {
      headline: "Custom Software Built for Your Business",
      subheadline: "We design and build bespoke applications that digitize workflows, connect your systems, and drive measurable efficiency.",
      cta: "Plan Your Custom Build"
    },

    benefits: [
      {
        title: "Built Around Your Workflow",
        description: "We map how your team works and deliver software that fits your real processes.",
        icon: Puzzle
      },
      {
        title: "Process Automation",
        description: "Automate approvals, notifications, and repetitive tasks to remove manual bottlenecks.",
        icon: Workflow
      },
      {
        title: "System Integrations",
        description: "Connect CRMs, ERPs, payments, and APIs so data flows without spreadsheets.",
        icon: Link
      },
      {
        title: "Scalable Architecture",
        description: "Modular services and clean APIs that grow as usage and teams expand.",
        icon: TrendingUp
      },
      {
        title: "Security by Design",
        description: "Role-based access, audit trails, and secure data handling from day one.",
        icon: ShieldCheck
      },
      {
        title: "Maintainable Delivery",
        description: "Clear documentation, testable code, and clean handover for your internal team.",
        icon: Wrench
      }
    ],

    process: [
      {
        step: 1,
        title: "Discovery & Requirements",
        description: "We capture business goals, user flows, and constraints before any build starts.",
        icon: Map
      },
      {
        step: 2,
        title: "Solution Design",
        description: "UX, data models, and technical architecture aligned to your systems.",
        icon: Layout
      },
      {
        step: 3,
        title: "Build & Integrate",
        description: "We develop, test, and connect the solution to your existing stack.",
        icon: Code2
      },
      {
        step: 4,
        title: "Launch & Iterate",
        description: "Release confidently, monitor outcomes, and evolve the product with your team.",
        icon: Rocket
      }
    ],

    technologies: [
      {
        category: "Frontend & Mobile",
        items: [
          { name: "React", description: "Modern web UI" },
          { name: "Next.js", description: "Production-ready React framework" },
          { name: "React Native", description: "Cross-platform mobile apps" },
          { name: "TypeScript", description: "Type-safe application code" },
          { name: "Tailwind CSS", description: "Design system implementation" }
        ]
      },
      {
        category: "Backend & Data",
        items: [
          { name: "Node.js", description: "API services" },
          { name: "PostgreSQL", description: "Relational data storage" },
          { name: "MongoDB", description: "Document databases" },
          { name: "Redis", description: "Caching and queues" },
          { name: "GraphQL/REST", description: "Flexible API design" }
        ]
      },
      {
        category: "Integrations & Ops",
        items: [
          { name: "AWS", description: "Cloud infrastructure" },
          { name: "Docker", description: "Containerized services" },
          { name: "CI/CD", description: "Automated delivery pipelines" },
          { name: "OAuth/SAML", description: "Enterprise authentication" },
          { name: "Stripe/Payments", description: "Billing integrations" }
        ]
      }
    ],

    seo: {
      metaTitle: "Custom Business Software Development | Tailored Apps | Impact Tech",
      metaDescription: "Custom business software development: web, mobile, and internal applications that streamline operations and integrate with your systems. Greece-based team.",
      keywords: ["custom software development", "business application development", "bespoke software", "enterprise app development", "workflow automation", "internal tools", "systems integration", "SaaS development", "tailored software", "software development Greece"]
    }
  },
  {
    id: 8,
    title: "SEO - Discovery & Strategy",
    description: "Outcome-focused workshops, roadmaps, KPIs, and risk framing before we write code.",
    icon: Globe,
    slug: "seo-strategy",

    hero: {
      headline: "SEO Strategy That Drives Organic Growth",
      subheadline: "Technical SEO audits, content strategy, and Core Web Vitals optimization to rank higher and convert better.",
      cta: "Boost Your SEO"
    },

    benefits: [
      {
        title: "Technical SEO Audits",
        description: "Crawl analysis, site architecture review, and structured data validation to fix foundational issues.",
        icon: Search
      },
      {
        title: "Core Web Vitals Optimization",
        description: "LCP, FID, CLS improvements through performance engineering and rendering strategies.",
        icon: Zap
      },
      {
        title: "Content Strategy & Mapping",
        description: "Keyword research, topic clustering, and content roadmaps aligned with search intent.",
        icon: FileText
      },
      {
        title: "On-Page SEO",
        description: "Meta tags, semantic HTML, internal linking, and schema markup for better indexing.",
        icon: Layout
      },
      {
        title: "Link Building & Outreach",
        description: "White-hat backlink strategies, digital PR, and partnership opportunities to build authority.",
        icon: Link
      },
      {
        title: "Analytics & Reporting",
        description: "GA4/Search Console dashboards, rank tracking, and ROI measurement for continuous optimization.",
        icon: BarChart3
      }
    ],

    process: [
      {
        step: 1,
        title: "SEO Audit & Discovery",
        description: "Crawl site, analyze competitors, review analytics, and identify quick wins + long-term opportunities.",
        icon: Compass
      },
      {
        step: 2,
        title: "Strategy & Roadmap",
        description: "Prioritize fixes, define KPIs, and build quarterly SEO roadmap aligned with business goals.",
        icon: Map
      },
      {
        step: 3,
        title: "Implementation & Optimization",
        description: "Fix technical issues, optimize content, improve Core Web Vitals, and implement tracking.",
        icon: Wrench
      },
      {
        step: 4,
        title: "Monitoring & Iteration",
        description: "Track rankings, organic traffic, and conversions; adjust strategy based on performance data.",
        icon: TrendingUp
      }
    ],

    technologies: [
      {
        category: "SEO Tools",
        items: [
          { name: "Google Search Console", description: "Site performance monitoring" },
          { name: "Screaming Frog", description: "Technical SEO crawler" },
          { name: "Ahrefs/SEMrush", description: "Competitive analysis" },
          { name: "Google Analytics 4", description: "Behavior & conversion tracking" }
        ]
      },
      {
        category: "Technical SEO",
        items: [
          { name: "Schema Markup", description: "Structured data (JSON-LD)" },
          { name: "Core Web Vitals", description: "Performance metrics" },
          { name: "Robots.txt/Sitemaps", description: "Crawl optimization" },
          { name: "Canonical Tags", description: "Duplicate content handling" }
        ]
      },
      {
        category: "Content & Analysis",
        items: [
          { name: "Surfer SEO", description: "Content optimization" },
          { name: "Google Trends", description: "Search trends analysis" },
          { name: "AnswerThePublic", description: "Question research" },
          { name: "Hotjar/Clarity", description: "User behavior insights" }
        ]
      }
    ],

    seo: {
      metaTitle: "SEO Strategy & Consulting Services | Technical SEO | Impact Tech",
      metaDescription: "Professional SEO services: technical audits, Core Web Vitals optimization, content strategy, and link building. SEO consulting from Greece for global clients.",
      keywords: ["SEO services", "technical SEO", "SEO strategy", "Core Web Vitals", "SEO audit", "content strategy", "SEO consulting", "search engine optimization", "organic growth"]
    }
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
  },
  {
    id: 14,
    title: "Cult Crew",
    category: "Brand Website",
    image: "https://cdn.sanity.io/images/2e8w1pu4/production/80b09cfc9f64bc565447a81f18e79a29514b9cc1-4000x3000.jpg",
    stack: ["Branding", "UI Design", "Responsive", "Performance"],
    live: "https://www.cult-crew.com/"
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
