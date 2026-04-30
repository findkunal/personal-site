import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (
    await getCollection('blog', ({ data }) => data.lang === 'gu' && !data.draft)
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'કુણાલ — બ્લોગ (ગુજરાતી)',
    description: 'તાજેતરની ગુજરાતી પોસ્ટ્સ.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/gu/blog/${post.slug.replace(/^gu\//, '')}/`,
    })),
  });
}
