export async function GET() {
  const baseUrl = 'https://yourworkwizard.com';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: '',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: '/aboutus',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/portfolio',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: '/blogs',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Blog posts
  const blogPosts = [
    {
      slug: 'ai-marketing-solutions-stay-ahead',
      lastModified: '2025-01-15T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      slug: 'smart-automation-for-academics',
      lastModified: '2024-09-15T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      slug: 'designing-accessible-ux',
      lastModified: '2024-08-02T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      slug: 'from-idea-to-web-app',
      lastModified: '2024-07-10T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      slug: 'data-analysis-for-students',
      lastModified: '2024-06-21T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${blogPosts
  .map(
    (post) => `  <url>
    <loc>${baseUrl}/blogs/${post.slug}</loc>
    <lastmod>${post.lastModified}</lastmod>
    <changefreq>${post.changeFrequency}</changefreq>
    <priority>${post.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
