/**
 * CMS Content Types
 *
 * These types define the structure of content managed through the CMS.
 * Content can be stored in JSON files or fetched from a headless CMS API.
 */

import { LucideIcon } from 'lucide-react';

export interface CMSService {
  id: string;
  icon: string; // Icon name from lucide-react
  title: string;
  description: string;
  features: string[];
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CMSProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  demo?: string;
  order: number;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CMSTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CMSTechItem {
  id: string;
  name: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CMSContent {
  services: CMSService[];
  projects: CMSProject[];
  testimonials: CMSTestimonial[];
  techStack: CMSTechItem[];
}

export interface CMSConfig {
  apiEndpoint?: string;
  useLocalContent: boolean;
  cacheEnabled: boolean;
  cacheDuration: number; // in milliseconds
}
