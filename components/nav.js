import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          width: '100%',
          margin: 0,
          padding: '1rem 0',
        }}
      >
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
          <Link href="/code_schools" prefetch>
            <a>Code Schools</a>
          </Link>
        </li>
        <li>
          <Link href="/history">
            <a>History</a>
          </Link>
        </li>
        <li>
          <Link href="/jobs">
            <a>Jobs</a>
          </Link>
        </li>
        <li>
          <Link href="/leadership_circle">
            <a>Leadership Circle</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
