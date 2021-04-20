import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionTitle from "../components/section-title"

import TopWorksList from "../components/top-works-list"
import TopBlogList from "../components/top-blog-list"

type Props = {
  pageContext: {
    blogs: Blog[]
    works: Work[]
    breadcrumb: { crumbs: Crumb[] }
  }
}

type Blog = {
  node: {
    title: string
    slug: string
    eyecatch?: { file: { url: string } }
    body: any
    createdAt: string
    published_at?: string
    updatedAt: string
    description?: string
  }
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

const BlogIndex: React.FC<Props> = ({ pageContext }: Props) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout crumbs={crumbs}>
      <SEO />
      <Bio />
      <section>
        <SectionTitle title="works" />
        <TopWorksList works={pageContext.works} />
      </section>

      <section>
        <SectionTitle title="blog" />
        <TopBlogList blogs={pageContext.blogs} />
      </section>
    </Layout>
  )
}

export default BlogIndex
