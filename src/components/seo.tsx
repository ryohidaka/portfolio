import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo, LogoJsonLd } from "gatsby-plugin-next-seo"

type metaType = Array<{
  property?: string
  name?: string
  content: string
}>
type Props = {
  description?: string
  lang?: string
  meta?: metaType
  title?: string
  image?: Image
  path?: string
}

type Image = {
  url: string
  alt?: string
  width?: number
  height?: number
}

const SEO: React.FC<Props> = ({ description, title, image, path }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
            icon
          }
        }
      }
    `
  )
  const siteTitle = site.siteMetadata.title
  const siteUrl = site.siteMetadata.siteUrl
  const metaDescription = description || site.siteMetadata.description
  const twitterId = site.siteMetadata?.social?.twitter || ``
  const icon = site.siteMetadata?.icon
  path = path || ""

  return (
    <>
      {/* サブページ以降はタイトルテンプレートを使用 */}
      {title && <GatsbySeo titleTemplate={`%s | ${siteTitle}`} />}

      {image && (
        <GatsbySeo
          openGraph={{
            images: [
              {
                url: image.url || "",
                width: image.width || 800,
                height: image.height || 600,
                alt: image.alt || "",
              },
            ],
          }}
        />
      )}

      <GatsbySeo
        title={title || siteTitle}
        description={metaDescription}
        openGraph={{
          locale: "ja",
          url: `${siteUrl}${path}`,
          title,
          description: metaDescription,

          site_name: siteTitle,
          profile: {
            firstName: "Ryo",
            lastName: "Hidaka",
            username: "日高凌",
            gender: "male",
          },
        }}
        twitter={{
          handle: twitterId,
          site: twitterId,
          cardType: "summary_large_image",
        }}
      />

      <LogoJsonLd logo={`${siteUrl}${icon}`} url={siteUrl} />
    </>
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

export default SEO
