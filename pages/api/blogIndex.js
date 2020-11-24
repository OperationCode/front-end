import matter from 'gray-matter';
import marked from 'marked';

export async function getAllPosts() {
  const context = require.context('../../blogArticles', false, /\.md$/)
  const posts = []
  // eslint-disable-next-line no-restricted-syntax
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../../blogArticles/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post.replace('.mdx',''),
      title: meta.data.title
    });
  };
  return posts;
};

export async function getPostBySlug(slug) {
  const fileContent = await import(`../../blogArticles/${slug}.mdx`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);

  return {
    author: meta.data.author,
    publishDate: meta.data.publishDate,
    title: meta.data.title,
    body: content,
  }
}