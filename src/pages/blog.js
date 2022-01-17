import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import * as BlogStyles from "../styles/blog.module.scss";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `);

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li className={BlogStyles.link} key={edge.node.id}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2 className={BlogStyles.link}>
                    {edge.node.frontmatter.title}
                  </h2>
                  <p className={BlogStyles.link}>
                    {edge.node.frontmatter.date}
                  </p>
                </Link>
              </li>
            );
          })}
        </ol>
      </Layout>
    </div>
  );
};

export default Blog;
