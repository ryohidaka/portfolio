import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Props = {
  pageContext: {
    posts: Post[]
    breadcrumb: { crumbs: Crumb[] }
  }
  data: any
  location: any
}

type Post = {
  node: {
    title: string
    slug: string
  }
}

type Crumb = {
  pathname: string
  crumbLabel: string
}

const BlogIndex: React.FC<Props> = ({ pageContext, data, location }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <Layout title={siteTitle} crumbs={crumbs}>
      <SEO title="BLOG" path={location.pathname} />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {pageContext.posts.map((post: Post) => {
          const title = post.node.title

          return (
            <li key={post.node.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.node.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                </header>
                <section></section>
              </article>
            </li>
          )
        })}
      </ol>
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
