import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionTitle from "../components/section-title"

import TopWorksList from "../components/top-works-list"

type Props = {
  pageContext: {
    works: Work[]
    breadcrumb: { crumbs: Crumb[] }
  }
  data: any
}

type Work = {
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

const BlogIndex: React.FC<Props> = ({ pageContext, data }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout title={siteTitle} crumbs={crumbs}>
      <SEO />
      <Bio />
      <section>
        <SectionTitle title="works" />
        <TopWorksList works={pageContext.works} />
      </section>

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
