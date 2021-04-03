import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

type Props = {
  location: string
  title: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title, children }: Props) => {
  let header

  header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )

  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
