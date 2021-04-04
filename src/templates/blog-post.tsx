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
  }
  location: string
}

type Post = {
  title: string
  body: any
}

const options: any = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: {
      data: { target: { file: { url: any } } }
    }) => {
      const url = `http:${node.data.target.file.url}`
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

  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      <Bio />
      <article>
        <h1>{title}</h1>
        {renderRichText(post.body, options)}
      </article>
    </Layout>
  )
}
export default CommonPostTemplate
