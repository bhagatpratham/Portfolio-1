import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as navigationStyles from "./navigation.module.scss";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={navigationStyles.header}>
      <h1>
        <Link
          className={navigationStyles.title}
          activeClassName={navigationStyles.activeNavItem}
          to="/"
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={navigationStyles.navList}>
          <li>
            <Link
              className={navigationStyles.navItem}
              activeClassName={navigationStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={navigationStyles.navItem}
              activeClassName={navigationStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={navigationStyles.navItem}
              activeClassName={navigationStyles.activeNavItem}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          {/*    <li>
            <Link
              className={navigationStyles.navItem}
              activeClassName={navigationStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
      </li>   */}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
