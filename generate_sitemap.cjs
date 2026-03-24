const fs = require('fs');
const path = require('path');

const domain = 'https://www.goldenexcursions.online';

const routes = [
  '/',
  '/tours',
  '/about',
  '/gallery',
  '/contact'
];

// we know the tour slugs from earlier
const tourSlugs = [
  "paradise-island-vip-hurghada",
  "orange-bay-hurghada",
  "dolphin-house-vip-hurghada",
  "intro-diving-hurghada",
  "sharm-el-naga-hurghada",
  "parasailing-hurghada",
  "private-speedboat-vip-hurghada",
  "diving-hurghada",
  "salem-express-hurghada",
  "glass-boat-hurghada",
  "grand-aquarium-hurghada",
  "el-gouna-city-tour-hurghada",
  "morning-quad-safari-hurghada",
  "afternoon-quad-safari-hurghada",
  "sahara-park-mega-safari",
  "hurghada-city-tour",
  "sindbad-submarine-hurghada",
  "horse-riding-private-hurghada",
  "cairo-trip-from-hurghada",
  "private-cairo-ancient-egypt-hurghada",
  "private-cairo-trip-by-plane-hurghada",
  "luxor-valley-of-kings-hurghada"
];

tourSlugs.forEach(slug => {
  routes.push(`/tour/${slug}`);
});

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${domain}${route}</loc>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : (route.startsWith('/tour/') ? '0.8' : '0.9')}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemapContent);
console.log('Sitemap generated!');

// Update robots.txt to point to sitemap
const robotsPath = path.resolve('./public/robots.txt');
let robotsContent = '';
if (fs.existsSync(robotsPath)) {
  robotsContent = fs.readFileSync(robotsPath, 'utf8');
} else {
  robotsContent = "User-agent: *\nAllow: /\n";
}

if (!robotsContent.includes('Sitemap:')) {
  robotsContent += `\nSitemap: ${domain}/sitemap.xml\n`;
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('Updated robots.txt');
}
