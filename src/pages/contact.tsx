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

  const description =
    "こちらはお問い合わせページです。お問い合わせフォームに必要事項を入力し、送信ボタンを押してください。後日改めて担当者より連絡いたします。"

  return (
    <Layout title="CONTACT" crumbs={crumbs}>
      <SEO title="CONTACT" description={description} path={location.pathname} />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
