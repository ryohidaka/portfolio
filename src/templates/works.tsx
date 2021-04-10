import * as React from "react"
import { graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkCard from "../components/work-card"

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
    description: string
    eyecatch: { file: { url: string } }
  }
}

type Crumb = {
  pathname: string
  crumbLabel: string
}

const WorkIndex: React.FC<Props> = ({ pageContext, location }: Props) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout title="WORKS" crumbs={crumbs}>
      <SEO title="WORKS" path={location.pathname} />
      <Grid item xs={12}>
        <Grid container justify="space-between" spacing={4}>
          {pageContext.posts.map((post: Post) => {
            return <WorkCard work={post.node} />
          })}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default WorkIndex
