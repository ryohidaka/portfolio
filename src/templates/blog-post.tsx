import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostJsonld from "../components/jsonld/blog-post"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

type Props = {
  pageContext: {
    nodeType: BLOCKS.DOCUMENT
    post: Post
    data: any
    breadcrumb: { crumbs: Crumb[] }
  }
}

type Post = {
  title: string
  slug: string
  body: any
  createdAt: string
  published_at?: string
  updatedAt: string
  description?: string
}

type Crumb = {
  pathname: string
  crumbLabel: string
}

const options: any = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: {
      data: { target: { file: { url: any } } }
    }) => {
      const url = node.data.target.file.url
      return <img src={url} />
    },
  },
}

const CommonPostTemplate: React.FC<Props> = ({ pageContext }: Props) => {
  const { post } = pageContext
  const title = post.title

  const {
    breadcrumb: { crumbs },
  } = pageContext

  // 記事ページはパンくずリストのタイトルを記事タイトルに
  crumbs[2].crumbLabel = title

  return (
    <Layout title="BLOG" crumbs={crumbs}>
      <SEO title={title} />
      <article>
        <h1>{title}</h1>
        {renderRichText(post.body, options)}
      </article>

      {/* 構造化マークアップ */}
      <BlogPostJsonld post={post} />
    </Layout>
  )
}
export default CommonPostTemplate
