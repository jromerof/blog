import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  return (
    <nav className="navbar">
      <Link className="title" to="/">
        {title}
      </Link>
    </nav>
  )
}
export default Header
