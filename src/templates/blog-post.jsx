import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, childern) => {
      console.log("embed")
      return <img src={`http:${node.data.target.file.url}`} />
    },
  },
}

const CommonPostTemplate = ({ pageContext }) => {
  const { post } = pageContext

  return (
    <article>
      <h1>{post.title}</h1>
      {renderRichText(post.body, options)}
    </article>
  )
}
export default CommonPostTemplate
