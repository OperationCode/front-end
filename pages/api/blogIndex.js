import matter from 'gray-matter';

export async function getAllPosts() {
  const context = require.context('../../blogArticles', false, /\.md$/)
  const posts = []
  // eslint-disable-next-line no-restricted-syntax
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../../blogArticles/${post}`);
    const meta = matter(content.default)
    posts.push({
      slug: post.replace('.md',''),
      title: meta.data.title
    })
  };
  return posts;
};