/**
 * Sanity CMS Service
 *
 * This service handles fetching content from Sanity CMS.
 * Falls back to JSON files if Sanity is not configured.
 */

import type { CMSService, CMSProject, CMSTestimonial, CMSTechItem } from '../types/cms';
import { client, QUERIES } from '../lib/sanity.client';

class SanityCMSService {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private cacheDuration = 5 * 60 * 1000; // 5 minutes
  private useSanity = false;

  constructor() {
    // Check if Sanity is configured
    this.useSanity = !!(
      import.meta.env.VITE_SANITY_PROJECT_ID &&
      import.meta.env.VITE_SANITY_PROJECT_ID !== 'YOUR_PROJECT_ID'
    );
  }

  /**
   * Check if cached data is still valid
   */
  private isCacheValid(key: string): boolean {
    const cached = this.cache.get(key);
    if (!cached) return false;

    const now = Date.now();
    return (now - cached.timestamp) < this.cacheDuration;
  }

  /**
   * Get data from cache
   */
  private getFromCache<T>(key: string): T | null {
    if (!this.isCacheValid(key)) return null;
    return this.cache.get(key)?.data || null;
  }

  /**
   * Save data to cache
   */
  private saveToCache(key: string, data: any): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  /**
   * Fetch from Sanity or fallback to JSON files
   */
  private async fetchContent<T>(query: string, fallbackEndpoint: string): Promise<T> {
    const cacheKey = `sanity_${fallbackEndpoint}`;

    // Check cache first
    const cached = this.getFromCache<T>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      let data: T;

      if (this.useSanity) {
        // Fetch from Sanity
        data = await client.fetch<T>(query);
      } else {
        // Fallback to JSON files
        const response = await fetch(`/content/${fallbackEndpoint}.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${fallbackEndpoint}: ${response.statusText}`);
        }
        data = await response.json();
      }

      // Save to cache
      this.saveToCache(cacheKey, data);

      return data;
    } catch (error) {
      console.error(`Error fetching ${fallbackEndpoint}:`, error);
      throw error;
    }
  }

  /**
   * Get all services
   */
  async getServices(): Promise<CMSService[]> {
    return this.fetchContent<CMSService[]>(QUERIES.services, 'services');
  }

  /**
   * Get a single service by ID
   */
  async getService(id: string): Promise<CMSService | null> {
    const services = await this.getServices();
    return services.find(service => service.id === id) || null;
  }

  /**
   * Get all projects
   */
  async getProjects(featured?: boolean): Promise<CMSProject[]> {
    const query = featured ? QUERIES.featuredProjects : QUERIES.projects;
    return this.fetchContent<CMSProject[]>(query, 'projects');
  }

  /**
   * Get a single project by ID
   */
  async getProject(id: string): Promise<CMSProject | null> {
    const projects = await this.getProjects();
    return projects.find(project => project.id === id) || null;
  }

  /**
   * Get all testimonials
   */
  async getTestimonials(): Promise<CMSTestimonial[]> {
    return this.fetchContent<CMSTestimonial[]>(QUERIES.testimonials, 'testimonials');
  }

  /**
   * Get all tech stack items
   */
  async getTechStack(category?: string): Promise<CMSTechItem[]> {
    const query = category ? QUERIES.techStackByCategory(category) : QUERIES.techStack;
    return this.fetchContent<CMSTechItem[]>(query, 'tech-stack');
  }

  /**
   * Clear all cached data
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Clear cache for a specific key
   */
  clearCacheKey(key: string): void {
    this.cache.delete(`sanity_${key}`);
  }

  /**
   * Prefetch all content (useful for initial load)
   */
  async prefetchAll(): Promise<void> {
    await Promise.all([
      this.getServices(),
      this.getProjects(),
      this.getTestimonials(),
      this.getTechStack(),
    ]);
  }

  /**
   * Check if using Sanity CMS
   */
  isUsingSanity(): boolean {
    return this.useSanity;
  }
}

// Export singleton instance
export const cms = new SanityCMSService();

// Export class for custom instances
export default SanityCMSService;
