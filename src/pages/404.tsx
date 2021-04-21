import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Props = {
  pageContext: any
}

const NotFoundPage: React.FC<Props> = ({ pageContext }: Props) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout crumbs={crumbs}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
