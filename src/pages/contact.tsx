import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

type Props = {
  pageContext: any
  location: any
}

const ContactPage: React.FC<Props> = ({ pageContext, location }: Props) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout title="CONTACT" crumbs={crumbs}>
      <SEO title="CONTACT" path={location.pathname} />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
