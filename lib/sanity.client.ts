import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you want to ensure fresh data
  perspective: 'published', // Only fetch published documents
})

// Helper for generating image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// GROQ queries for fetching content
export const QUERIES = {
  // Get all published services, ordered by 'order' field
  services: `*[_type == "service" && published == true] | order(order asc) {
    _id,
    "id": slug.current,
    title,
    icon,
    description,
    features,
    order,
    published,
    _createdAt,
    _updatedAt
  }`,

  // Get all published projects, ordered by 'order' field
  projects: `*[_type == "project" && published == true] | order(order asc) {
    _id,
    "id": slug.current,
    title,
    category,
    description,
    "image": image.asset->url,
    "imageAlt": image.alt,
    tags,
    github,
    live,
    featured,
    order,
    published,
    _createdAt,
    _updatedAt
  }`,

  // Get featured projects only
  featuredProjects: `*[_type == "project" && published == true && featured == true] | order(order asc) {
    _id,
    "id": slug.current,
    title,
    category,
    description,
    "image": image.asset->url,
    "imageAlt": image.alt,
    tags,
    github,
    live,
    featured,
    order,
    published,
    _createdAt,
    _updatedAt
  }`,

  // Get all published testimonials, ordered by 'order' field
  testimonials: `*[_type == "testimonial" && published == true] | order(order asc) {
    _id,
    "id": _id,
    name,
    role,
    company,
    content,
    "avatar": avatar.asset->url,
    "avatarAlt": avatar.alt,
    rating,
    order,
    published,
    _createdAt,
    _updatedAt
  }`,

  // Get all published tech stack items, ordered by 'order' field
  techStack: `*[_type == "techStack" && published == true] | order(order asc) {
    _id,
    "id": slug.current,
    name,
    color,
    category,
    order,
    published,
    _createdAt,
    _updatedAt
  }`,

  // Get tech stack by category
  techStackByCategory: (category: string) => `*[_type == "techStack" && published == true && category == "${category}"] | order(order asc) {
    _id,
    "id": slug.current,
    name,
    color,
    category,
    order,
    published,
    _createdAt,
    _updatedAt
  }`,
}
