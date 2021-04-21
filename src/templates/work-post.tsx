import React from "react"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../components/image"
import WorksJsonld from "../components/jsonld/works"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { Typography, Grid, Button } from "@material-ui/core"
import UpdateOutlinedIcon from "@material-ui/icons/UpdateOutlined"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

type Props = {
  pageContext: {
    nodeType: BLOCKS.DOCUMENT
    post: Post
    data: any
    breadcrumb: { crumbs: Crumb[] }
  }
  location: any
}

type Post = {
  title: string
  description: string
  body: any
  eyecatch: { file: { url: string }; title: string }
  logo: { file: { url: string } }
  createdAt: string
  published_at?: string
  updatedAt: string
}

type Crumb = {
  pathname: string
  crumbLabel: string
}

const options: any = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: {
      data: { target: { file: { url: any } } }
    }) => {
      const url = node.data.target.file.url
      return <img src={url} />
    },
  },
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: { marginTop: theme.spacing(5) },
    updatedAt: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    logo: {
      height: "3rem",
      margin: "0 1rem",
    },
  })
)

const CommonPostTemplate: React.FC<Props> = ({
  pageContext,
  location,
}: Props) => {
  const { post } = pageContext
  const title = post.title
  const description = post.description
  const eyecatch = {
    url: `https:${post.eyecatch.file.url}`,
    alt: post.eyecatch.title,
  }

  const {
    breadcrumb: { crumbs },
  } = pageContext

  // 記事ページはパンくずリストのタイトルを記事タイトルに
  crumbs[2].crumbLabel = title

  const classes = useStyles()
  return (
    <Layout title="WORKS" crumbs={crumbs}>
      <SEO
        title={title}
        description={description}
        image={eyecatch}
        path={location.pathname}
      />

      {/* 最終更新日 */}
      <Typography variant="body1" className={classes.updatedAt}>
        <UpdateOutlinedIcon />
        <time>{moment(post.updatedAt).format(`YYYY/MM/DD`)}</time>
      </Typography>

      <article>
        <header>
          <Grid container direction="row" justify="center" alignItems="center">
            {/* ロゴ画像がある場合は表示 */}
            {post.logo && (
              <img
                src={post.logo.file.url}
                alt="logo"
                height="1rem"
                className={classes.logo}
              />
            )}

            {/* 記事タイトル */}
            <Typography variant="h3" component="h1" align="center">
              {title}
            </Typography>
          </Grid>

          {/* 記事説明 */}
          <Typography
            variant="h6"
            component="p"
            align="center"
            className={classes.description}
          >
            {description}
          </Typography>
        </header>

        <main>
          {/* アイキャッチ画像 */}
          <Img src={eyecatch.url} alt={eyecatch.alt} />


          {/* 本文 */}
          {renderRichText(post.body, options)}
        </main>
      </article>

      {/* 構造化マークアップ */}
      <WorksJsonld post={post} />
    </Layout>
  )
}
export default CommonPostTemplate
