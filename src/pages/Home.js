import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div id="sidebar">
        <h1>Website Blog</h1>
        <div>
          <form id="search-form" role="search">
            <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`/blog`}>Blog</Link>
            </li>
            <li>
              <Link to={`/profile`}>Profile</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
