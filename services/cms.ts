/**
 * CMS Service
 *
 * This service handles fetching content from JSON files or a headless CMS API.
 * It includes caching functionality to improve performance.
 */

import type { CMSService, CMSProject, CMSTestimonial, CMSTechItem, CMSConfig } from '../types/cms';

class ContentManagementService {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private config: CMSConfig = {
    useLocalContent: true,
    cacheEnabled: true,
    cacheDuration: 5 * 60 * 1000, // 5 minutes
  };

  constructor(config?: Partial<CMSConfig>) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
  }

  /**
   * Check if cached data is still valid
   */
  private isCacheValid(key: string): boolean {
    if (!this.config.cacheEnabled) return false;

    const cached = this.cache.get(key);
    if (!cached) return false;

    const now = Date.now();
    return (now - cached.timestamp) < this.config.cacheDuration;
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
    if (!this.config.cacheEnabled) return;

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  /**
   * Fetch content from local JSON file or API
   */
  private async fetchContent<T>(endpoint: string): Promise<T> {
    const cacheKey = `content_${endpoint}`;

    // Check cache first
    const cached = this.getFromCache<T>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      let data: T;

      if (this.config.useLocalContent) {
        // Fetch from local JSON files
        const response = await fetch(`/content/${endpoint}.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
        }
        data = await response.json();
      } else if (this.config.apiEndpoint) {
        // Fetch from API
        const response = await fetch(`${this.config.apiEndpoint}/${endpoint}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
        }
        data = await response.json();
      } else {
        throw new Error('No content source configured');
      }

      // Save to cache
      this.saveToCache(cacheKey, data);

      return data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

  /**
   * Get all services
   */
  async getServices(): Promise<CMSService[]> {
    const services = await this.fetchContent<CMSService[]>('services');
    return services
      .filter(service => service.published)
      .sort((a, b) => a.order - b.order);
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
    const projects = await this.fetchContent<CMSProject[]>('projects');
    let filtered = projects.filter(project => project.published);

    if (featured !== undefined) {
      filtered = filtered.filter(project => project.featured === featured);
    }

    return filtered.sort((a, b) => a.order - b.order);
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
    const testimonials = await this.fetchContent<CMSTestimonial[]>('testimonials');
    return testimonials
      .filter(testimonial => testimonial.published)
      .sort((a, b) => a.order - b.order);
  }

  /**
   * Get all tech stack items
   */
  async getTechStack(category?: string): Promise<CMSTechItem[]> {
    const techStack = await this.fetchContent<CMSTechItem[]>('tech-stack');
    let filtered = techStack.filter(item => item.published);

    if (category) {
      filtered = filtered.filter(item => item.category === category);
    }

    return filtered.sort((a, b) => a.order - b.order);
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
    this.cache.delete(`content_${key}`);
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
}

// Export singleton instance
export const cms = new ContentManagementService();

// Export class for custom instances
export default ContentManagementService;
