import * as React from "react"
import Header from "./header"
import Footer from "../components/footer"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"

type Props = {
  location: string
  title: string
  children: any
}

const Layout: React.FC<Props> = ({ title, children }: Props) => {
  const pageLink = [
    { name: "home", url: "/" },
    { name: "blog", url: "/blog" },
  ]

  return (
    <>
      <Header title={title} links={pageLink} />
      <main>
        <CssBaseline />
        <Container maxWidth="sm">{children}</Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
