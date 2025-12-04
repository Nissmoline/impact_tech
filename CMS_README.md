# Content Management System (CMS) Documentation

## Overview

This project now includes a flexible CMS system that allows you to manage website content through JSON files. The system is designed to be easily migrated to a headless CMS (like Contentful, Strapi, or Sanity) in the future.

## Architecture

### Directory Structure

```
├── public/content/          # JSON content files
│   ├── services.json       # Services/expertise offerings
│   ├── projects.json       # Portfolio projects
│   ├── testimonials.json   # Client testimonials
│   └── tech-stack.json     # Technologies used
├── types/cms.ts            # TypeScript interfaces for CMS
├── services/cms.ts         # CMS service with caching
├── hooks/useCMS.ts         # React hooks for fetching content
└── utils/iconMapper.ts     # Maps icon names to Lucide components
```

## Content Files

All content is stored in `/public/content/` as JSON files.

### Services (`services.json`)

Defines the services/expertise offered by the studio.

```json
{
  "id": "web-development",
  "icon": "Code2",              // Lucide icon name
  "title": "Web Development",
  "description": "Modern, responsive websites...",
  "features": [
    "Landing Pages",
    "Corporate Websites"
  ],
  "order": 1,                   // Display order
  "published": true,            // Show/hide
  "createdAt": "2025-12-03T00:00:00Z",
  "updatedAt": "2025-12-03T00:00:00Z"
}
```

**Available Lucide Icons:**
- Code2, Globe, Cpu, Zap, Layers, Monitor, Palette, Database
- Full list: https://lucide.dev/icons/

### Projects (`projects.json`)

Portfolio projects with links and descriptions.

```json
{
  "id": "ecommerce-platform",
  "title": "E-Commerce Platform",
  "category": "Web Application",
  "description": "Full-featured e-commerce platform...",
  "image": "https://images.unsplash.com/...",
  "tags": ["React", "Node.js", "PostgreSQL"],
  "github": "https://github.com",
  "live": "https://example.com",
  "order": 1,
  "featured": true,             // Show in featured section
  "published": true,
  "createdAt": "2025-12-03T00:00:00Z",
  "updatedAt": "2025-12-03T00:00:00Z"
}
```

### Testimonials (`testimonials.json`)

Client reviews and testimonials.

```json
{
  "id": "testimonial-1",
  "name": "Alex Thompson",
  "role": "CTO",
  "company": "TechCorp Inc.",
  "content": "Vertex Studio delivered exceptional...",
  "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  "rating": 5,
  "order": 1,
  "published": true,
  "createdAt": "2025-12-03T00:00:00Z",
  "updatedAt": "2025-12-03T00:00:00Z"
}
```

**Avatar Services:**
- DiceBear API: `https://api.dicebear.com/7.x/avataaars/svg?seed={name}`
- Or use real image URLs

### Tech Stack (`tech-stack.json`)

Technologies and tools used by the studio.

```json
{
  "id": "react",
  "name": "React",
  "color": "#61DAFB",           // Hex color for branding
  "category": "frontend",       // frontend, backend, database, devops, other
  "order": 1,
  "published": true,
  "createdAt": "2025-12-03T00:00:00Z",
  "updatedAt": "2025-12-03T00:00:00Z"
}
```

## Using the CMS in Components

### React Hooks

Use the provided hooks to fetch CMS content:

```typescript
import { useServices, useProjects, useTestimonials, useTechStack } from '../hooks/useCMS';

function MyComponent() {
  const { data: services, loading, error, refetch } = useServices();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  return (
    <div>
      {services?.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}
```

### Available Hooks

- `useServices()` - Fetch all published services
- `useProjects(featured?: boolean)` - Fetch projects (optionally filter by featured)
- `useTestimonials()` - Fetch all published testimonials
- `useTechStack(category?: string)` - Fetch tech stack (optionally filter by category)

### Hook Return Values

All hooks return:
```typescript
{
  data: T | null,           // Content data
  loading: boolean,         // Loading state
  error: Error | null,      // Error if fetch failed
  refetch: () => Promise    // Function to refetch data
}
```

## CMS Service API

For advanced usage, you can use the CMS service directly:

```typescript
import { cms } from '../services/cms';

// Get all services
const services = await cms.getServices();

// Get single service by ID
const service = await cms.getService('web-development');

// Get featured projects only
const featured = await cms.getProjects(true);

// Get specific project
const project = await cms.getProject('ecommerce-platform');

// Clear cache
cms.clearCache();

// Prefetch all content
await cms.prefetchAll();
```

## Caching

The CMS service includes automatic caching:

- **Cache Duration:** 5 minutes (configurable)
- **Auto-refresh:** Cache invalidates after duration
- **Manual Clear:** Use `cms.clearCache()` or `cms.clearCacheKey('services')`

### Configure Cache

```typescript
import ContentManagementService from '../services/cms';

const customCMS = new ContentManagementService({
  useLocalContent: true,
  cacheEnabled: true,
  cacheDuration: 10 * 60 * 1000, // 10 minutes
});
```

## Migrating to Headless CMS

### Step 1: Choose a CMS Provider

Popular options:
- **Contentful** - User-friendly, great API
- **Strapi** - Open-source, self-hosted
- **Sanity** - Real-time, flexible
- **Prismic** - Slice-based content modeling

### Step 2: Update Configuration

```typescript
const cms = new ContentManagementService({
  useLocalContent: false,
  apiEndpoint: 'https://api.contentful.com/spaces/YOUR_SPACE_ID',
  cacheEnabled: true,
});
```

### Step 3: Map Content Types

Create adapters to transform CMS responses to match our interfaces in `types/cms.ts`.

### Step 4: Update Service

Modify `services/cms.ts` to handle API authentication and response transformation.

## Best Practices

### Content Management

1. **IDs:** Use descriptive kebab-case IDs (e.g., `web-development`)
2. **Images:** Use CDN URLs or optimization services (Cloudinary, Imgix)
3. **Order:** Use incremental numbers (1, 2, 3) for flexibility
4. **Published:** Always set to `false` for drafts

### Performance

1. **Prefetch:** Use `cms.prefetchAll()` in `App.tsx` for faster initial load
2. **Images:** Optimize images before uploading (WebP format recommended)
3. **Caching:** Keep cache duration at 5-10 minutes for production

### SEO

1. **Alt Text:** Always provide descriptive image alt attributes
2. **Meta:** Update meta tags in `index.html` when content changes
3. **Structured Data:** Keep JSON-LD in sync with content

## Editing Content

### Adding a New Service

1. Open `public/content/services.json`
2. Add new object with unique `id`
3. Choose icon from [Lucide Icons](https://lucide.dev/icons/)
4. Set `order` to position it
5. Set `published: true` when ready
6. Save file - changes appear immediately in dev mode

### Adding a New Project

1. Open `public/content/projects.json`
2. Add new object with unique `id`
3. Upload project image to CDN or use Unsplash
4. Add relevant tags (technologies used)
5. Provide GitHub and live demo URLs
6. Set `featured: true` for homepage display
7. Save file

### Updating Testimonials

1. Open `public/content/testimonials.json`
2. Add/edit testimonial object
3. Generate avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed={name}`
4. Save file

### Managing Tech Stack

1. Open `public/content/tech-stack.json`
2. Add/edit technology
3. Find brand color from [Brand Colors](https://brandcolors.net/)
4. Set appropriate category
5. Save file

## Troubleshooting

### Content Not Updating

1. **Cache:** Clear browser cache (Ctrl+Shift+R)
2. **Service:** Run `cms.clearCache()` in console
3. **Dev Server:** Restart Vite dev server
4. **JSON Syntax:** Validate JSON at [JSONLint](https://jsonlint.com/)

### Icons Not Showing

1. Check icon name matches Lucide exactly (case-sensitive)
2. Verify icon exists in [Lucide Icons](https://lucide.dev/icons/)
3. Common names: Code2, Globe, Cpu, Zap, Layers, Monitor, Palette

### Images Not Loading

1. **CORS:** Ensure image URLs allow cross-origin requests
2. **URLs:** Use HTTPS URLs only
3. **Size:** Optimize images (< 1MB recommended)
4. **Format:** Use WebP or JPG formats

### Type Errors

1. Ensure JSON matches interfaces in `types/cms.ts`
2. All fields marked as required must be present
3. Date strings must be in ISO 8601 format

## Future Enhancements

- [ ] Admin panel for content editing
- [ ] Multi-language support (i18n)
- [ ] Image upload and optimization
- [ ] Content versioning
- [ ] Scheduled publishing
- [ ] Full-text search
- [ ] Content analytics
- [ ] Webhooks for updates

## Support

For questions or issues with the CMS:
1. Check this documentation
2. Verify JSON syntax
3. Review component implementation in `components/`
4. Check browser console for errors
