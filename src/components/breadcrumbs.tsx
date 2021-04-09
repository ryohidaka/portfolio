import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Breadcrumbs, Link } from "@material-ui/core"
import { BreadcrumbJsonLd } from "gatsby-plugin-next-seo"

type Props = {
  crumbs: Crumb[]
}

type Crumb = {
  pathname: string
  crumbLabel: string
}
type itemListElements = Payload[]

type Payload = {
  name: string
  item: string
  position: number
}

const Breadcrumb: React.FC<Props> = ({ crumbs }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  )

  let itemListElements: itemListElements = []
  crumbs.map((crumb: Crumb, i: number) => {
    const payload: Payload = {
      name: crumb.crumbLabel,
      item: `${site.siteMetadata.siteUrl}${crumb.pathname}`,
      position: i + 1,
    }

    itemListElements.push(payload)
  })

  //   トップページのnameにサイト名を指定
  itemListElements[0].name = site.siteMetadata.title
  itemListElements[0].item = site.siteMetadata.siteUrl

  return (
    <>
      {crumbs.length > 1 && (
        <Breadcrumbs aria-label="breadcrumb">
          {crumbs.map((crumb: Crumb) => {
            return (
              <Link
                color="inherit"
                key={crumb.pathname}
                href={crumb.pathname}
                itemProp="url"
              >
                {crumb.crumbLabel}
              </Link>
            )
          })}
        </Breadcrumbs>
      )}

      {/* 構造化マークアップ */}
      <BreadcrumbJsonLd itemListElements={itemListElements} />
    </>
  )
}

export default Breadcrumb
