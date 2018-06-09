import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link
          prefetch
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          prefetch
          href="/404"
        >
          404
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
