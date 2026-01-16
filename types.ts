import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  stack: string[];
  github?: string;
  live?: string;
  demo?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;

  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };

  benefits: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];

  process: {
    step: number;
    title: string;
    description: string;
    icon: LucideIcon;
  }[];

  technologies: {
    category: string;
    items: {
      name: string;
      icon?: LucideIcon;
      description?: string;
    }[];
  }[];

  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface TechItem {
  name: string;
  color: string;
}