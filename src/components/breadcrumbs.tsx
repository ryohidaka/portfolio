import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import { Breadcrumbs, Link } from "@material-ui/core"
import { BreadcrumbJsonLd } from "gatsby-plugin-next-seo"
import SectionTitle from "../components/section-title"

type Props = {
  crumbs: Crumb[]
  title?: string
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breadcrumbs: {
      margin: theme.spacing(2),
      textTransform: "uppercase",
    },
  })
)

const Breadcrumb: React.FC<Props> = ({ crumbs, title }: Props) => {
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

  const classes = useStyles()

  return (
    <>
      {crumbs.length > 1 && title && <SectionTitle title={title} />}

      {crumbs.length > 1 && (
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
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
