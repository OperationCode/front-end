import Head from './head';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/404">
          <a>404</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
