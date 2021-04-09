import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Breadcrumbs from "./breadcrumbs"
import { CssBaseline, Container } from "@material-ui/core"

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
        <Breadcrumbs crumbs={crumbs} />
        <CssBaseline />
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
