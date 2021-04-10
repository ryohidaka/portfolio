import * as React from "react"
import BlogCard from "../components/blog-card"
import { Grid, Hidden, Typography } from "@material-ui/core"
import Pagination from "@material-ui/lab/Pagination"

type Props = {
  blogs: Blog[]
}

type Blog = {
  node: {
    title: string
    slug: string
    eyecatch?: { file: { url: string } }
    body: any
    createdAt: string
    published_at?: string
    updatedAt: string
    description?: string
  }
}

const TopBlogList: React.FC<Props> = ({ blogs }: Props) => {
  const [page, setPage] = React.useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Grid item xs={12}>
      {blogs.length > 0 && (
        <>
          <Hidden mdDown>
            <Grid container justify="space-between" spacing={4}>
              {blogs.map((post: Blog) => {
                return <BlogCard post={post.node} />
              })}
            </Grid>
          </Hidden>
          <Hidden only={["xl", "lg"]}>
            <Grid container justify="center">
              <BlogCard post={blogs[page - 1].node} />
              <Grid container justify="center">
                <Pagination
                  count={blogs.length}
                  page={page}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Hidden>
        </>
      )}
      {blogs.length === 0 && (
        <Typography variant="body1" component="p" align="center">
          現在投稿はございません。
        </Typography>
      )}
    </Grid>
  )
}

export default TopBlogList
