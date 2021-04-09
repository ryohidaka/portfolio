import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorksJsonld from "../components/jsonld/works"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

type Props = {
  pageContext: {
    nodeType: BLOCKS.DOCUMENT
    post: Post
    data: any
    breadcrumb: { crumbs: Crumb[] }
  }
  location: any
}

type Post = {
  title: string
  description: string
  body: any
  eyecatch: { file: { url: string }; title: string }
  createdAt: string
  published_at?: string
  updatedAt: string
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

const CommonPostTemplate: React.FC<Props> = ({
  pageContext,
  location,
}: Props) => {
  const { post } = pageContext
  const title = post.title
  const description = post.description
  const eyecatch = {
    url: `https:${post.eyecatch.file.url}`,
    alt: post.eyecatch.title,
  }

  const {
    breadcrumb: { crumbs },
  } = pageContext

  // 記事ページはパンくずリストのタイトルを記事タイトルに
  crumbs[2].crumbLabel = title

  return (
    <Layout title={title} crumbs={crumbs}>
      <SEO
        title={title}
        description={description}
        image={eyecatch}
        path={location.pathname}
      />
      <Bio />
      <article>
        <h1>{title}</h1>
        {renderRichText(post.body, options)}
      </article>
      
      {/* 構造化マークアップ */}
      <WorksJsonld post={post} />
    </Layout>
  )
}
export default CommonPostTemplate
