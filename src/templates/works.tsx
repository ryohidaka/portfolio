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
  data: any
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

const WorkIndex: React.FC<Props> = ({ pageContext, data, location }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout title={siteTitle} crumbs={crumbs}>
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
