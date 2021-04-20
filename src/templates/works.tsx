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

  const description =
    "過去に作成したプロダクトや書籍の情報を掲載しています。記載された情報は、発表日現在のものです。"

  return (
    <Layout title="WORKS" crumbs={crumbs}>
      <SEO title="WORKS" description={description} path={location.pathname} />
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
