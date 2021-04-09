import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ArticleJsonLd } from "gatsby-plugin-next-seo"

type Props = {
  post: Post
}

type Post = {
  title: string
  image?: string
  createdAt: string
  published_at?: string
  updatedAt: string
  description?: string
}

const WorksJsonLd: React.FC<Props> = ({ post }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            icon
            author {
              name
            }
          }
        }
      }
    `
  )
  const metadata = site.siteMetadata

  const images = []
  if (post.image) {
    images.push(post.image)
  }

  return (
    <ArticleJsonLd
      url={`${metadata.siteUrl}/works`}
      headline={post.title}
      images={images}
      datePublished={post.published_at || post.createdAt}
      dateModified={post.updatedAt}
      authorName={metadata.author.name}
      publisherName={metadata.author.name}
      publisherLogo={`${metadata.siteUrl}${metadata.icon}`}
      description={post.description || ""}
    />
  )
}
export default WorksJsonLd
