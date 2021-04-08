import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
  body: any
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

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout title={title} crumbs={crumbs}>
      <SEO title={title} path={location.pathname} />
      <Bio />
      <article>
        <h1>{title}</h1>
        {renderRichText(post.body, options)}
      </article>
    </Layout>
  )
}
export default CommonPostTemplate
