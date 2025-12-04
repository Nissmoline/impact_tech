/**
 * React Hooks for CMS Content
 *
 * These hooks provide easy access to CMS content in React components.
 * They handle loading states and error handling automatically.
 */

import { useState, useEffect } from 'react';
import { cms } from '../services/cms';
import type { CMSService, CMSProject, CMSTestimonial, CMSTechItem } from '../types/cms';

interface UseCMSResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Fetch services from CMS
 */
export function useServices(): UseCMSResult<CMSService[]> {
  const [data, setData] = useState<CMSService[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const services = await cms.getServices();
      setData(services);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch services'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Fetch projects from CMS
 */
export function useProjects(featured?: boolean): UseCMSResult<CMSProject[]> {
  const [data, setData] = useState<CMSProject[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const projects = await cms.getProjects(featured);
      setData(projects);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch projects'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [featured]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Fetch testimonials from CMS
 */
export function useTestimonials(): UseCMSResult<CMSTestimonial[]> {
  const [data, setData] = useState<CMSTestimonial[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const testimonials = await cms.getTestimonials();
      setData(testimonials);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch testimonials'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Fetch tech stack from CMS
 */
export function useTechStack(category?: string): UseCMSResult<CMSTechItem[]> {
  const [data, setData] = useState<CMSTechItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const techStack = await cms.getTechStack(category);
      setData(techStack);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch tech stack'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return { data, loading, error, refetch: fetchData };
}
