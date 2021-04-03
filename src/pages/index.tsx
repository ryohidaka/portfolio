import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Props = {
  data: any
  location: string
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />

      <Link to={"blog"} itemProp="url">
        <span itemProp="headline">BLOG</span>
      </Link>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
