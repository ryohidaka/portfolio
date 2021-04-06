import * as React from "react"
import Header from "./header"
import Footer from "../components/footer"
import { CssBaseline, Container, Breadcrumbs, Link } from "@material-ui/core"

type Props = {
  title: string
  children: any
  crumbs: Crumb[]
}

type Crumb = {
  pathname: string
  crumbLabel: string
}

const Layout: React.FC<Props> = ({ title, children, crumbs }: Props) => {
  const pageLink = [
    { name: "home", url: "/" },
    { name: "works", url: "/works" },
    { name: "blog", url: "/blog" },
  ]

  return (
    <>
      <Header title={title} links={pageLink} />
      <Container maxWidth="lg" component="main">
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
        <CssBaseline />
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
