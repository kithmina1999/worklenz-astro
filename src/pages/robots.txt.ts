import type { APIRoute } from 'astro';

// Get environment variable (default to "development" if not set)
const ENVIRONMENT = import.meta.env.MODE || "development";

const getRobotsTxt = (allowCrawling: boolean, sitemapURL: URL | null) => {
    if (allowCrawling && sitemapURL) {
        return `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;
    } else {
        return `
User-agent: *
Disallow: /
`;
    }
};

export const GET: APIRoute = ({ site }) => {
    if (!site) {
        return new Response("Site URL is not defined", { status: 400 });
    }

    // Allow crawling only if environment is "production"
    const allowCrawling = ENVIRONMENT === "production";
    const sitemapURL = allowCrawling ? new URL('sitemap-index.xml', site) : null;

    return new Response(getRobotsTxt(allowCrawling, sitemapURL));
};
