import * as React from "react"
import WorkCard from "../components/work-card"
import { Grid, Hidden } from "@material-ui/core"
import Pagination from "@material-ui/lab/Pagination"

type Props = {
  works: Work[]
}

type Work = {
  node: {
    title: string
    slug: string
    description: string
    eyecatch: { file: { url: string } }
  }
}

const TopWorksList: React.FC<Props> = ({ works }: Props) => {
  const [page, setPage] = React.useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Grid item xs={12}>
      <Hidden mdDown>
        <Grid container justify="space-between" spacing={4}>
          {works.map((post: Work) => {
            return <WorkCard work={post.node} key={post.node.slug} />
          })}
        </Grid>
      </Hidden>
      <Hidden only={["xl", "lg"]}>
        <Grid container justify="center">
          <WorkCard work={works[page - 1].node} />
          <Grid container justify="center">
            <Pagination
              count={works.length}
              page={page}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default TopWorksList
