import * as React from "react"
import { graphql } from "gatsby"
import { Typography, Grid } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"

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
    body: any
    createdAt: string
    published_at?: string
    updatedAt: string
    description?: string
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
    <Layout title="BLOG" crumbs={crumbs}>
      <SEO title="BLOG" path={location.pathname} />

      {pageContext.posts.length > 0 && (
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={4}>
            {pageContext.posts.map((post: Post) => {
              return <BlogCard post={post.node} />
            })}
          </Grid>
        </Grid>
      )}

      {pageContext.posts.length === 0 && (
        <Typography variant="body1" component="p" align="center">
          現在投稿はございません。
        </Typography>
      )}
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
