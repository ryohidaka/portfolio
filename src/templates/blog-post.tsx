import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

type Props = {
  pageContext: {
    nodeType: BLOCKS.DOCUMENT
    post: Post
    data: any
  }
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

const CommonPostTemplate: React.FC<Props> = ({ pageContext }: Props) => {
  const { post } = pageContext

  return (
    <article>
      <h1>{post.title}</h1>
      {renderRichText(post.body, options)}
    </article>
  )
}
export default CommonPostTemplate
