/* eslint-disable prettier/prettier */
import { ONE_DAY } from 'common/constants/unitsOfTime';
import { arrayOf, shape, string } from 'prop-types';
// import Card from 'components/Cards/Card/Card';
import Head from 'components/head';
// import Heading from 'components/Heading/Heading';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Link from 'next/link';
// import styles from 'styles/podcast.module.css';
import { getAllPosts } from '../api/blogIndex'

const pageTitle = 'Blog';


BlogIndex.propTypes = {
  posts: arrayOf(shape({ slug: string, author: string, publishDate: string, title: string }))
    .isRequired,
};

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts
    },
    revalidate: ONE_DAY
  };

}

function BlogIndex(props) {
  const { posts } = props;
  return (
    <div>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />
      
      <h1>List of posts:</h1>
      <ul>
        {posts.map((post, idx) => {
          return (
            <li key={idx}>
              <Link href={'/blog/'+post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default BlogIndex;
