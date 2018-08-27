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
          <Link href="/test" prefetch>
            Test
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
