import * as React from "react"
import { Typography, Grid } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"

type Props = {
  pageContext: {
    posts: Post[]
    breadcrumb: { crumbs: Crumb[] }
  }
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

const BlogIndex: React.FC<Props> = ({ pageContext, location }: Props) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const description = "ブログ記事の一覧ページです。不定期で更新しています。"

  return (
    <Layout title="BLOG" crumbs={crumbs}>
      <SEO title="BLOG" description={description} path={location.pathname} />

      {pageContext.posts.length > 0 ? (
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={4}>
            {pageContext.posts.map((post: Post) => {
              return <BlogCard post={post.node} />
            })}
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body1" component="p" align="center">
          現在投稿はございません。
        </Typography>
      )}
    </Layout>
  )
}

export default BlogIndex
