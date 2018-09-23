import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" prefetch>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/history" prefetch>
            <a>History</a>
          </Link>
        </li>
        <li>
          <Link href="/jobs" prefetch>
            <a>Jobs</a>
          </Link>
          <li>
            <Link href="/leadership_circle" prefetch>
              <a>Leadership Circle</a>
            </Link>
          </li>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
