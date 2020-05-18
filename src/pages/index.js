import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

function Index({ data }) {
  return (
    <Layout>
      <main className="index">
        <h1>Hola! Soy Joaquín</h1>
        <h4>Un poco desarrollador, un poco control de gestión</h4>
        <p>
          Este es mi blog personal donde podras leer mis notas (principalmente
          de programación!)
        </p>
        <div className="posts">
          {data.allMarkdownRemark.edges.map(edge => (
            <div className="card">
              <Link
                className="card-content"
                to={edge.node.frontmatter.slug}
                key={edge.node.frontmatter.slug}
              >
                <h1>{edge.node.frontmatter.title}</h1>
                <h4>{edge.node.frontmatter.date}</h4>
                <p>{edge.node.frontmatter.excerpt}</p>
              </Link>
              <div className="tags">
                {edge.node.frontmatter.tags.map(tag => (
                  <p className="tag">{tag}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
            excerpt
            tags
          }
        }
      }
    }
  }
`

export default Index
