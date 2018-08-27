import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" prefetch>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
