import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  stack: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
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