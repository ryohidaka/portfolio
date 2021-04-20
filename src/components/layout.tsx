import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Breadcrumbs from "./breadcrumbs"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { CssBaseline, Container } from "@material-ui/core"

type Props = {
  title?: string
  children: any
  crumbs: Crumb[]
}

type Crumb = {
  pathname: string
  crumbLabel: string
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingBottom: "5rem",
    },
  })
)

const Layout: React.FC<Props> = ({ title, children, crumbs }: Props) => {
  const classes = useStyles()
  const pageLink = [
    { name: "home", url: "/" },
    { name: "works", url: "/works" },
    { name: "blog", url: "/blog" },
    { name: "contact", url: "/contact" },
  ]

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <Header title={title || site.siteMetadata.title} links={pageLink} />
      <Container maxWidth="lg" component="main" className={classes.container}>
        <Breadcrumbs crumbs={crumbs} title={title} />
        <CssBaseline />
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
