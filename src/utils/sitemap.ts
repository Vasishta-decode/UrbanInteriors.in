import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export const generateSitemap = async () => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/projects', changefreq: 'weekly', priority: 0.8 },
    { url: '/process', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  ];

  const stream = new SitemapStream({ hostname: 'https://urbaninteriors.com' });
  const data = await streamToPromise(Readable.from(links).pipe(stream));
  return data.toString();
};

export default generateSitemap; 